// =====================================================================
//  ⬇️  EDITA SOLO ESTE ARCHIVO para personalizar la campaña.
// =====================================================================

const CONFIG = {
  // --- Identidad ---
  nombre: "Karina",
  nombreCompleto: "Karina Reyes",
  hashtag: "#TodosxKarina",
  instagram: "todosxkarina",
  fotoPrincipal: "/galeria/foto-5.jpeg",

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

  // --- Videos destacados (testimonios en Instagram) ---
  videosDestacados: [
    {
      url: "https://www.instagram.com/reel/Db65opVsm2H/",
      titulo: "Vendiendo artesanías para ayudar a su hija",
      descripcion:
        "La mamá de Karina cuenta cómo está vendiendo sus artesanías para juntar plata para el tratamiento.",
    },
    {
      url: "https://www.instagram.com/reel/Db0wT-suj5E/",
      titulo: "Un nuevo testimonio",
      descripcion: "",
    },
  ],

  // --- Su familia ---
  familia: {
    eyebrow: "Familia",
    titulo: "Su familia",
    parrafos: [
      "Karina es mamá de dos niñas, de **5 y 8 años**, quienes son su mayor fuerza para seguir adelante. Hoy enfrentan un difícil momento tras su diagnóstico de **colangiocarcinoma con metástasis**.",
      "Sus hijas necesitan a su mamá y, por eso, esta lucha es también por ellas. **Cada aporte puede ayudar a Karina a continuar su tratamiento y seguir a su lado.**",
    ],
  },

  // --- Tratamiento ---
  tratamiento: {
    titulo: "¿Para qué será tu ayuda? ❤️",
    parrafos: [
      "Hoy Karina necesita de nuestra ayuda para poder enfrentar los altos costos de su tratamiento contra el **colangiocarcinoma con metástasis**.",
      "Cada aporte será destinado a cubrir parte de los gastos que esta enfermedad implica, como:",
    ],
    lista: [
      "💊 **Medicamentos y tratamientos** que necesita para seguir luchando.",
      "🧪 **Exámenes y controles médicos**, como análisis de sangre, escáneres, resonancias, biopsias y otros estudios para saber cómo está avanzando la enfermedad y cómo responde al tratamiento.",
      "🏥 **Procedimientos y atenciones médicas** que sean necesarios durante este proceso.",
      "🚕 **Traslados y otros gastos** relacionados con sus controles y tratamientos.",
      "❤️ Cualquier otro gasto que vaya surgiendo producto de su enfermedad.",
    ],
    cierre: [
      "Para Karina y su familia, cada aporte significa mucho. **Es una forma de acompañarla en esta lucha y ayudarla a seguir adelante junto a sus dos hijas, de 5 y 8 años.**",
      "**No importa cuánto puedas aportar: cada ayuda suma.** 🙏❤️",
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
      "Una pieza única hecha a mano, con todo el detalle de una casa de campo antigua: horno de barro, parrón, herramientas y más. Sorteo; el ganador se anuncia por Instagram.",
    imagenesPremio: [
      "/premio/premio-1.jpeg",
      "/premio/premio-2.jpeg",
      "/premio/premio-3.jpeg",
      "/premio/premio-4.jpeg",
    ],
    creditoInstagram: "retablos_pam",
    valorNumero: 3500,
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

  // --- Galería de fotos ---
  galeria: [
    "/galeria/foto-1.jpeg",
    "/galeria/foto-2.jpg",
    "/galeria/foto-3.jpeg",
    "/galeria/foto-6.jpeg",
  ],

  // --- Transparencia (oculta por ahora, se sube más adelante) ---
  mostrarTransparencia: false,
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
