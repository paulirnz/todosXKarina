# Todos x Karina — Campaña Solidaria

Sitio de campaña solidaria en React + Vite. Toda la información se edita en un
solo archivo: `src/config.js`.

## Requisitos

- Node.js 18 o superior (recomendado 20+).

## Uso

```bash
npm install
npm run dev      # servidor de desarrollo
npm run build    # build de producción en /dist
npm run preview  # previsualizar el build
```

## Personalizar

Edita **`src/config.js`**. Ahí está todo: nombre, foto, meta y monto recaudado
(el termómetro calcula el % solo), historia, tratamiento, datos de
transferencia, transparencia, redes y la **rifa**.

## Aportar

La sección "Haz tu aporte" muestra los datos de la cuenta y un solo botón
**"Copiar todos los datos"** que los copia juntos con formato (listo para pegar
en el banco o por WhatsApp).

## Rifa

El bloque `rifa` en `config.js` controla la sección:

- `linkPago`: pega el "link de pago" que te genere tu proveedor
  (Flow / MercadoPago / Khipu). Si lo dejas `""`, el botón queda deshabilitado.
- `transferencia`: alternativa con copiar-al-portapapeles (campo por campo).
- `activa: false` oculta la sección completa.

> La asignación automática de números requiere backend. Por ahora el número se
> coordina por Instagram con el comprobante de pago.

## Backend (después)

La app está diseñada para que reemplaces el `CONFIG` estático en `src/App.jsx`
por un `fetch` a tu API con el mismo shape, sin tocar los componentes.
