# Todos x Karina — Campaña Solidaria

Sitio de campaña en **React + Vite** (frontend) con un servicio de donaciones en
**Spring Boot + Flow** (backend, carpeta `backend/`).

Todo el contenido del sitio se edita en un solo archivo: `src/config.js`.

---

## 1. Frontend (el sitio)

### Requisitos
- Node.js 18 o superior.

### Uso
```bash
npm install
npm run dev      # desarrollo (http://localhost:5173)
npm run build    # build de producción en /dist
```

### Personalizar
Edita **`src/config.js`**: identidad, historia, tratamiento, datos de
transferencia, rifa, transparencia y redes.

Detalles útiles:
- `mostrarTermometro: false` → el corazón con el monto está **oculto**. Ponlo en
  `true` (y actualiza `metaMonto` y `recaudado`) cuando empiecen a recaudar.
- `donacion.activa: false` → el botón de pago con Flow está **apagado** y solo se
  muestra la transferencia. Ponlo en `true` cuando el backend esté configurado
  con tus llaves (ver abajo).
- La foto del premio de la rifa está en `public/premio-retablo.jpg`.

---

## 2. Backend de donaciones (Flow)

Carpeta `backend/`. Una pasarela **necesita** backend: crea la transacción y
verifica el pago con llaves secretas del lado del servidor.

### Requisitos
- Java 17+ y Maven.

### Pasos

1. **Crea tu cuenta de pruebas** en https://sandbox.flow.cl (el sandbox es
   independiente de la cuenta de producción de flow.cl). En "Mis datos →
   Integración" copia tu **API Key** y **Secret Key**.

2. **Configura las variables de entorno** y levanta el backend:
   ```bash
   cd backend
   export FLOW_API_KEY=tu_api_key
   export FLOW_SECRET_KEY=tu_secret_key
   export APP_FRONTEND_URL=http://localhost:5173
   # APP_BASE_URL debe ser una URL PÚBLICA (ver punto 3)
   export APP_BASE_URL=https://xxxx.ngrok-free.app
   mvn spring-boot:run
   ```

3. **Webhook público (importante).** Flow confirma el pago llamando a tu
   `urlConfirmation` desde sus servidores, así que **no puede ser localhost**.
   En desarrollo usa un túnel:
   ```bash
   ngrok http 8080
   ```
   y usa esa URL pública en `APP_BASE_URL`.

4. **Enciende la donación en el sitio:** en `src/config.js` pon
   `donacion.activa: true`, y en un `.env` del frontend define
   `VITE_API_URL` apuntando al backend (ver `.env.example`).

5. **Prueba** con las tarjetas de prueba que Flow indica en su documentación de
   sandbox. Cuando todo funcione, cambia en `backend` la variable
   `FLOW_API_URL` a `https://www.flow.cl/api` y usa tus llaves de producción.

### Cómo funciona
- `POST /api/donaciones/crear` → crea la orden en Flow y devuelve la URL de
  checkout; el frontend redirige ahí.
- `POST /api/flow/confirmacion` → webhook: Flow avisa el pago; aquí se verifica
  con `getStatus` y es donde debes **persistir la donación** (ver el `TODO`).
- `POST /api/flow/retorno` → el navegador del donante vuelve tras pagar.

> La firma HMAC-SHA256 de las peticiones fue validada contra la referencia
> oficial de Flow.

---

## Nota

Recibir donaciones en una cuenta personal tiene implicancias tributarias;
conviene revisarlo con un contador o evaluar una fundación que acoja la campaña.
