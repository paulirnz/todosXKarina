package cl.todosxkarina.pagos;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import java.net.URI;
import java.net.URLEncoder;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.nio.charset.StandardCharsets;
import java.util.Map;
import java.util.TreeMap;

/**
 * Integración con la API de Flow (https://developers.flow.cl).
 * La firma HMAC-SHA256 fue validada contra la referencia oficial de Flow.
 */
@Service
public class FlowService {

    @Value("${flow.api-url}")    private String apiUrl;     // https://sandbox.flow.cl/api (pruebas)
    @Value("${flow.api-key}")    private String apiKey;
    @Value("${flow.secret-key}") private String secretKey;

    private final HttpClient http = HttpClient.newHttpClient();
    private final ObjectMapper mapper = new ObjectMapper();

    /**
     * Firma de parámetros: se ordenan alfabéticamente por nombre (TreeMap),
     * se concatenan como nombre+valor y se aplica HMAC-SHA256 con la secret key.
     */
    String firmar(TreeMap<String, String> params) {
        try {
            StringBuilder toSign = new StringBuilder();
            for (Map.Entry<String, String> e : params.entrySet()) {
                toSign.append(e.getKey()).append(e.getValue());
            }
            Mac mac = Mac.getInstance("HmacSHA256");
            mac.init(new SecretKeySpec(secretKey.getBytes(StandardCharsets.UTF_8), "HmacSHA256"));
            byte[] raw = mac.doFinal(toSign.toString().getBytes(StandardCharsets.UTF_8));
            StringBuilder hex = new StringBuilder();
            for (byte b : raw) hex.append(String.format("%02x", b));
            return hex.toString();
        } catch (Exception ex) {
            throw new RuntimeException("Error al firmar parámetros Flow", ex);
        }
    }

    private String urlEncode(Map<String, String> params) {
        StringBuilder sb = new StringBuilder();
        for (Map.Entry<String, String> e : params.entrySet()) {
            if (sb.length() > 0) sb.append("&");
            sb.append(URLEncoder.encode(e.getKey(), StandardCharsets.UTF_8))
              .append("=")
              .append(URLEncoder.encode(e.getValue(), StandardCharsets.UTF_8));
        }
        return sb.toString();
    }

    /**
     * Crea una orden de pago en Flow y devuelve la URL de checkout a la que
     * hay que redirigir al donante (url + "?token=" + token).
     */
    public String crearPago(int monto, String email, String commerceOrder,
                            String urlConfirmation, String urlReturn) throws Exception {
        TreeMap<String, String> params = new TreeMap<>();
        params.put("apiKey", apiKey);
        params.put("commerceOrder", commerceOrder);
        params.put("subject", "Donación campaña Todos x Karina");
        params.put("currency", "CLP");
        params.put("amount", String.valueOf(monto));
        params.put("email", email);
        params.put("urlConfirmation", urlConfirmation);
        params.put("urlReturn", urlReturn);
        params.put("s", firmar(params)); // la firma se calcula sobre el resto y se agrega al final

        HttpRequest req = HttpRequest.newBuilder()
                .uri(URI.create(apiUrl + "/payment/create"))
                .header("Content-Type", "application/x-www-form-urlencoded")
                .POST(HttpRequest.BodyPublishers.ofString(urlEncode(params)))
                .build();

        HttpResponse<String> resp = http.send(req, HttpResponse.BodyHandlers.ofString());
        JsonNode json = mapper.readTree(resp.body());
        if (resp.statusCode() != 200) {
            throw new RuntimeException("Flow /payment/create respondió " + resp.statusCode() + ": " + resp.body());
        }
        return json.get("url").asText() + "?token=" + json.get("token").asText();
    }

    /**
     * Consulta el estado de un pago por su token.
     * status: 1 pendiente, 2 pagado, 3 rechazado, 4 anulado.
     */
    public JsonNode getStatus(String token) throws Exception {
        TreeMap<String, String> params = new TreeMap<>();
        params.put("apiKey", apiKey);
        params.put("token", token);
        params.put("s", firmar(params));

        HttpRequest req = HttpRequest.newBuilder()
                .uri(URI.create(apiUrl + "/payment/getStatus?" + urlEncode(params)))
                .GET()
                .build();

        HttpResponse<String> resp = http.send(req, HttpResponse.BodyHandlers.ofString());
        return mapper.readTree(resp.body());
    }
}
