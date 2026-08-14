// =====================================================================
//  ⬇️  EDITA SOLO ESTE ARCHIVO para personalizar la campaña.
//      Cuando conectes el backend, reemplaza estos valores por los
//      que traigas desde la API (mismo shape) y no tocas la UI.
// =====================================================================

const CONFIG = {
  // --- Identidad ---
  nombre: "Karina",
  nombreCompleto: "Karina Reyes",
  hashtag: "#TodosxKarina",
  instagram: "todosxkarina", // sin la @
  fotoPrincipal:
    "https://placehold.co/640x720/E8546B/ffffff?text=Foto+de+Karina",

  // --- Termómetro de recaudación (el % se calcula solo) ---
  metaMonto: 30000000, // meta en pesos
  recaudado: 8400000, // monto recaudado hasta hoy
  fechaActualizacion: "Monto actualizado al 01 de agosto, 20:00 hrs",

  // --- Hero ---
  tituloHero: "Acompañemos a Karina en su lucha por la vida",
  subtituloHero:
    "Karina necesita un tratamiento que hoy no está a su alcance. Juntos podemos lograrlo.",
  fraseUrgente:
    "La montaña es gigante, pero con tu ayuda no es imposible. Necesitamos de todos.",

  // --- Frase destacada (banda entre secciones) ---
  quote: "Cada aporte, por pequeño que sea, es un abrazo para Karina.",

  // --- Historia ---
  historia: {
    titulo: "¿Quién es Karina?",
    parrafos: [
      "Karina es madre, hija y amiga. Una persona luchadora que siempre ha estado para los demás y que hoy necesita que estemos para ella.",
      "Hace algunos meses su vida cambió por completo con un diagnóstico que exige un tratamiento urgente y costoso. Esta campaña nace del cariño de quienes la rodean para que nada le falte en este proceso.",
    ],
  },

  // --- Línea de tiempo ---
  timeline: [
    { fecha: "Marzo 2026", texto: "Primeros síntomas y exámenes iniciales." },
    { fecha: "Mayo 2026", texto: "Diagnóstico confirmado por el equipo médico." },
    { fecha: "Julio 2026", texto: "Inicio del tratamiento y comienzo de la campaña." },
  ],

  // --- Tratamiento ---
  tratamiento: {
    titulo: "¿Para qué es tu ayuda?",
    parrafos: [
      "El tratamiento de Karina incluye medicamentos, sesiones y controles que no cubre completamente su sistema de salud.",
      "Tu aporte se destina íntegramente a costear estas atenciones. Toda la información y los comprobantes están disponibles en la sección de transparencia.",
    ],
    items: [
      { titulo: "Medicamentos", detalle: "Tratamiento farmacológico mensual." },
      { titulo: "Sesiones", detalle: "Atenciones especializadas periódicas." },
      { titulo: "Traslados", detalle: "Viajes a controles médicos." },
    ],
  },

  // --- Datos para aportar (transferencia) ---
  cuenta: {
    banco: "Banco Estado",
    tipoCuenta: "Cuenta RUT",
    numeroCuenta: "12.345.678",
    rut: "12.345.678-9",
    nombre: "Karina Reyes",
    email: "todosxkarina@gmail.com",
  },

  // --- Rifa solidaria ---
  rifa: {
    activa: true,

    titulo: "Rifa por Karina",
    bajada:
      "Participa con tu número y ayúdanos a completar el tratamiento. Cada aporte nos acerca a la meta.",

    // Premio
    premio: "Gift card $200.000 + caja de productos",
    detallePremio: "Sorteo. El ganador se anuncia por Instagram.",
    imagenPremio:
      "https://placehold.co/800x480/E8546B/ffffff?text=Premio+de+la+rifa",

    // Datos de la rifa
    valorNumero: 5000, // en pesos → se muestra como $5.000
    totalNumeros: 1000, // opcional; borra la línea si no quieres mostrarlo
    fechaSorteo: "30 de agosto de 2026",

    // Botón de pago: pega el "link de pago" de Flow / MercadoPago / Khipu.
    // Si lo dejas "", el botón aparece deshabilitado ("Pago disponible pronto").
    linkPago: "",
    notaPago:
      "Al pagar recibirás la confirmación por correo. Tu número se te asignará y confirmará por Instagram dentro de 24 h.",

    // Transferencia alternativa (borra el bloque si no la quieres)
    instagram: "todosxkarina",
    transferencia: {
      banco: "Banco Estado",
      tipoCuenta: "Cuenta RUT",
      numeroCuenta: "12.345.678",
      rut: "12.345.678-9",
      nombre: "Karina Reyes",
      email: "todosxkarina@gmail.com",
    },
  },

  // --- Transparencia (documentos / imágenes) ---
  transparencia: {
    titulo: "Transparencia",
    bajada:
      "Creemos en la confianza. Aquí puedes revisar los documentos que respaldan la campaña.",
    documentos: [
      {
        titulo: "Informe médico",
        img: "https://placehold.co/600x800/f2dde3/8a7079?text=Informe+medico",
      },
      {
        titulo: "Presupuesto tratamiento",
        img: "https://placehold.co/600x800/f2dde3/8a7079?text=Presupuesto",
      },
      {
        titulo: "Rendición de gastos",
        img: "https://placehold.co/600x800/f2dde3/8a7079?text=Rendicion",
      },
    ],
  },

  // --- Redes ---
  redes: [
    { nombre: "Instagram", url: "https://instagram.com/todosxkarina" },
    { nombre: "WhatsApp", url: "https://wa.me/56900000000" },
  ],
};

export default CONFIG;
