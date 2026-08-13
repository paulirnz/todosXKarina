// =====================================================================
//  ⬇️  EDITA SOLO ESTE ARCHIVO para personalizar la campaña.
// =====================================================================

const CONFIG = {
  // --- Identidad ---
  nombre: "Karina",
  nombreCompleto: "Karina Reyes",
  hashtag: "#TodosxKarina",
  instagram: "todosxkarina",
  fotoPrincipal: "https://placehold.co/640x720/E8546B/ffffff?text=Foto+de+Karina",

  // --- Termómetro (oculto por ahora: aún no se recauda) ---
  mostrarTermometro: false,
  metaMonto: 30000000,
  recaudado: 0,
  fechaActualizacion: "",

  // --- Hero ---
  tituloHero: "Acompañemos a Karina en su lucha por la vida",
  subtituloHero:
    "Karina necesita un tratamiento que hoy no está a su alcance. Juntos podemos lograrlo.",

  // --- Frase destacada ---
  quote: "Cada aporte, por pequeño que sea, es un abrazo para Karina.",

  // --- Historia (texto real de la campaña) ---
  historia: {
    titulo: "🙏 Ayúdanos a apoyar a una mamá y sus dos hijas ❤️",
    parrafos: [
      "Hoy queremos pedirles ayuda para una familia que está atravesando uno de los momentos más difíciles de su vida.",
      "Una madre de 40 años, mamá de dos niñas, fue diagnosticada con cáncer de hígado con metástasis. Debido a las características de su diagnóstico, el tratamiento que necesita no se encuentra cubierto por el GES, lo que significa enfrentar costos que para su familia son muy difíciles de asumir.",
      "En este momento, cada aporte puede hacer una diferencia. El dinero recaudado será destinado a ayudar a cubrir los costos de su tratamiento, medicamentos, exámenes y otros gastos asociados a su enfermedad.",
      "💗 No importa cuánto puedas aportar. $1.000, $5.000, $10.000 o lo que esté dentro de tus posibilidades. Todo suma y, especialmente, compartir esta publicación también es una enorme ayuda.",
      "Ella tiene dos hijas que la necesitan y una familia que está haciendo todo lo posible para acompañarla en esta lucha. Hoy queremos ayudarles a que pueda concentrarse en lo más importante: seguir luchando y tener la oportunidad de continuar su tratamiento.",
    ],
  },

  // --- Tratamiento ---
  tratamiento: {
    titulo: "¿Para qué es tu ayuda?",
    parrafos: [
      "El tratamiento incluye medicamentos, exámenes y controles que no cubre completamente el sistema de salud.",
      "Tu aporte se destina íntegramente a costear estas atenciones. Toda la información y los comprobantes están disponibles en la sección de transparencia.",
    ],
    items: [
      { titulo: "Medicamentos", detalle: "Tratamiento farmacológico." },
      { titulo: "Exámenes", detalle: "Controles y exámenes médicos." },
      { titulo: "Otros gastos", detalle: "Gastos asociados a la enfermedad." },
    ],
  },

  // --- Donación con pasarela (Flow) ---
  // Ponlo en true cuando tengas configurado el backend con tus llaves de Flow.
  donacion: { activa: false },

  // --- Datos para transferir (cuenta real de la campaña) ---
  cuenta: {
    banco: "Banco Estado",
    tipoCuenta: "Cuenta Corriente",
    numeroCuenta: "7542313",
    rut: "14.258.895-1",
    nombre: "Andrea Patricia Nuñez Correa",
  },

  // --- Rifa solidaria ---
  rifa: {
    activa: true,
    titulo: "Rifa por Karina",
    bajada:
      "Participa con tu número y ayúdanos a completar el tratamiento. Cada aporte nos acerca a la meta.",
    premio: "Retablo artesanal de casa antigua",
    detallePremio:
      "Una pieza única hecha a mano, con todo el detalle de una casa de campo antigua: horno de barro, parrón, herramientas y más. Sorteo ante notario; el ganador se anuncia por Instagram.",
    imagenPremio: "/premio-retablo.jpg",
    creditoInstagram: "retablos_pam",
    valorNumero: 5000,
    fechaSorteo: "30 de noviembre de 2026",
    instagram: "todosxkarina",
    correoSolicitud: "todosxkarinareyes@gmail.com",
    transferencia: {
      banco: "Banco Estado",
      tipoCuenta: "Cuenta Corriente",
      numeroCuenta: "7542313",
      rut: "14.258.895-1",
      nombre: "Andrea Patricia Nuñez Correa",
    },
  },

  // --- Transparencia ---
  transparencia: {
    titulo: "Transparencia",
    bajada:
      "Creemos en la confianza. Aquí puedes revisar los documentos que respaldan la campaña.",
    documentos: [
      { titulo: "Informe médico", img: "https://placehold.co/600x800/f2dde3/8a7079?text=Informe+medico" },
      { titulo: "Presupuesto tratamiento", img: "https://placehold.co/600x800/f2dde3/8a7079?text=Presupuesto" },
      { titulo: "Rendición de gastos", img: "https://placehold.co/600x800/f2dde3/8a7079?text=Rendicion" },
    ],
  },

  // --- Redes (para difundir) ---
  redes: [
    { nombre: "@todosxkarina", url: "https://instagram.com/todosxkarina" },
    { nombre: "@retablos_pam", url: "https://instagram.com/retablos_pam" },
  ],
};

export default CONFIG;
