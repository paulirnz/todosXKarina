package cl.todosxkarina.pagos;

import com.fasterxml.jackson.databind.JsonNode;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.net.URI;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class DonacionController {

    private final FlowService flow;

    @Value("${app.base-url}")     private String baseUrl;      // URL PÚBLICA del backend (para el webhook de Flow)
    @Value("${app.frontend-url}") private String frontendUrl;  // URL del sitio React

    public DonacionController(FlowService flow) {
        this.flow = flow;
    }

    /** Petición del frontend: {"monto": 5000, "email": "opcional@correo.cl"} */
    public record CrearDonacionRequest(int monto, String email) {}

    /** Crea la orden en Flow y devuelve la URL de checkout para redirigir al donante. */
    @PostMapping("/donaciones/crear")
    public Map<String, String> crear(@RequestBody CrearDonacionRequest req) throws Exception {
        if (req.monto() < 350) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "El monto mínimo es $350");
        }
        String email = (req.email() == null || req.email().isBlank())
                ? "donaciones@todosxkarina.cl" : req.email().trim();
        String commerceOrder = "don-" + System.currentTimeMillis();

        String urlConfirmation = baseUrl + "/api/flow/confirmacion";
        String urlReturn       = baseUrl + "/api/flow/retorno";

        String checkoutUrl = flow.crearPago(req.monto(), email, commerceOrder, urlConfirmation, urlReturn);
        return Map.of("url", checkoutUrl);
    }

    /**
     * Webhook server-to-server. Flow lo llama con el token cuando valida el pago.
     * Aquí es donde debes PERSISTIR la donación (guardar en BD, sumar al total, etc.).
     */
    @PostMapping("/flow/confirmacion")
    public ResponseEntity<String> confirmacion(@RequestParam("token") String token) throws Exception {
        JsonNode status = flow.getStatus(token);
        int estado = status.path("status").asInt(); // 1 pendiente, 2 pagado, 3 rechazado, 4 anulado

        if (estado == 2) {
            int monto = status.path("amount").asInt();
            String order = status.path("commerceOrder").asText();
            // TODO: persistir la donación pagada (order, monto) y actualizar el total recaudado.
            System.out.println("Donación PAGADA: " + order + " por $" + monto);
        }
        // Flow espera un 200 para dar por recibida la notificación.
        return ResponseEntity.ok("OK");
    }

    /** El navegador del donante vuelve aquí tras pagar; lo mandamos a una página de gracias. */
    @PostMapping("/flow/retorno")
    public ResponseEntity<Void> retorno(@RequestParam("token") String token) throws Exception {
        JsonNode status = flow.getStatus(token);
        int estado = status.path("status").asInt();
        String destino = frontendUrl + "/?donacion=" + (estado == 2 ? "ok" : "pendiente");
        return ResponseEntity.status(HttpStatus.FOUND).location(URI.create(destino)).build();
    }
}
