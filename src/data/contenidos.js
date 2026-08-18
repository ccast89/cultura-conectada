const contenidos = [
  {
    id: 1,
    titulo: "Luna Tucumana",
    categoria: "Música",
    descripcion:
      "Una de las obras más representativas del folklore argentino vinculadas a Tucumán. La canción evoca el paisaje, la noche y el sentimiento de pertenencia a la tierra tucumana.",
    autor: "Atahualpa Yupanqui",
    imagen: "/luna.webp",
    anio: 1949,
  },
  {
    id: 2,
    titulo: "Zamba del Grillo",
    categoria: "Música",
    descripcion:
      "Una reconocida composición de Atahualpa Yupanqui que forma parte del repertorio tradicional del folklore argentino y está fuertemente vinculada a los paisajes y sonidos del noroeste.",
    autor: "Atahualpa Yupanqui",
    imagen: "/grillo.webp",
    anio: 1960,
  },
  {
    id: 3,
    titulo: "Romance de la Luna Tucumana",
    categoria: "Música",
    descripcion:
      "Canción relacionada con el repertorio tucumano de Mercedes Sosa y con la identidad musical del noroeste argentino. La obra forma parte de las interpretaciones que ayudaron a difundir la cultura de la región.",
    autor: "Mercedes Sosa",
    imagen: "/mercedes.webp",
    anio: 2003,
  },
  {
    id: 4,
    titulo: "Añoranzas",
    categoria: "Música",
    descripcion:
      "Una de las chacareras más emblemáticas de Santiago del Estero. La canción expresa la nostalgia por la tierra natal y el profundo vínculo con las tradiciones santiagueñas.",
    autor: "Julio Argentino Jerez",
    imagen: "/anoranzas.webp",
    anio: 1916,
  },
  {
    id: 5,
    titulo: "La López Pereyra",
    categoria: "Música",
    descripcion:
      "Una de las obras más tradicionales del folklore salteño y popularmente considerada un himno de Salta. Su música fue compuesta por el músico salteño Artidorio Cresseri.",
    autor: "Artidorio Cresseri",
    imagen: "/lopez.webp",
    anio: 1901,
  },
  {
    id: 6,
    titulo: "Zamba de la Candelaria",
    categoria: "Música",
    descripcion:
      "Una reconocida zamba del cancionero folklórico argentino, vinculada al paisaje y la tradición musical del noroeste argentino.",
    autor: "Eduardo Falú",
    imagen: "/candelaria.webp",
    anio: 1960,
  },
  {
    id: 7,
    titulo: "Muña Muña",
    categoria: "Cine",
    descripcion:
      "Película filmada en El Mollar, Tucumán, que retrata historias y personajes vinculados con el paisaje y la identidad de los Valles Calchaquíes.",
    autor: "Cine tucumano",
    imagen: "/muna.webp",
    anio: 2025,
  },
  {
    id: 8,
    titulo: "La ausencia de Juana",
    categoria: "Cine",
    descripcion:
      "Producción audiovisual tucumana que combina drama e identidad local y forma parte del catálogo de la plataforma Cine Tucumano.",
    autor: "Producción tucumana",
    imagen: "/juana.webp",
    anio: 2024,
  },
  {
    id: 9,
    titulo: "Las cosas ciertas",
    categoria: "Cine",
    descripcion:
      "Película vinculada con la producción audiovisual de Tucumán que aborda historias y experiencias relacionadas con la región.",
    autor: "Producción tucumana",
    imagen: "/cosas.webp",
    anio: 2024,
  },
  {
    id: 10,
    titulo: "Amaicha, imágenes de un pueblo",
    categoria: "Cine",
    descripcion:
      "Producción documental que registra paisajes, costumbres y aspectos de la vida de Amaicha del Valle, una comunidad emblemática de Tucumán.",
    autor: "Producción audiovisual tucumana",
    imagen: "/amaicha.webp",
    anio: 2023,
  },
  {
    id: 11,
    titulo: "La hermandad",
    categoria: "Cine",
    descripcion:
      "Largometraje de producción tucumana que forma parte del desarrollo de la industria audiovisual de la provincia.",
    autor: "Martín Falci",
    imagen: "/hermandad.webp",
    anio: 2025,
  },
  {
    id: 12,
    titulo: "Tucumán: Sinfonía de una Ciudad Escondida",
    categoria: "Cine",
    descripcion:
      "Obra audiovisual que propone una mirada cinematográfica sobre la ciudad de San Miguel de Tucumán y su identidad urbana.",
    autor: "Producción tucumana",
    imagen: "/sinfonia.webp",
    anio: 2024,
  },
  {
    id: 13,
    titulo: "Piedras",
    categoria: "Arte digital",
    descripcion:
      "Obra digital inspirada en el paisaje de Tafí del Valle. Utiliza registros del paisaje tucumano para crear una composición audiovisual en movimiento.",
    autor: "Marto",
    imagen: "/piedras.webp",
    anio: 2026,
  },
  {
    id: 14,
    titulo: "Long Latin American Night",
    categoria: "Arte digital",
    descripcion:
      "Obra audiovisual digital inspirada en el paisaje nocturno latinoamericano y relacionada con la tradición artística del NOA.",
    autor: "Bombita",
    imagen: "/long.webp",
    anio: 2026,
  },
  {
    id: 15,
    titulo: "Afantasía",
    categoria: "Arte digital",
    descripcion:
      "Obra digital que explora la relación entre materialidad, espacio y representación mediante recursos tecnológicos.",
    autor: "Neol",
    imagen: "/afantasia.webp",
    anio: 2026,
  },
  {
    id: 16,
    titulo: "Brokers",
    categoria: "Arte digital",
    descripcion:
      "Obra generativa desarrollada mediante código y entornos tridimensionales. La interacción del usuario modifica la experiencia visual.",
    autor: "4ngeles fr4nco",
    imagen: "/brokers.webp",
    anio: 2026,
  },
  {
    id: 17,
    titulo: "Siempre te veo en Tucumán",
    categoria: "Arte digital",
    descripcion:
      "Obra perteneciente al patrimonio artístico tucumano que propone una mirada sobre la identidad y la relación con el territorio.",
    autor: "Pierina Illuminato",
    imagen: "/siempre.webp",
    anio: 2016,
  },
  {
    id: 18,
    titulo: "Mirador / Mirante",
    categoria: "Arte digital",
    descripcion:
      "Propuesta artística que trabaja la relación entre paisaje, territorio y representación desde una mirada contemporánea.",
    autor: "Eduardo Joaquín",
    imagen: "/mirador.webp",
    anio: 2016,
  },
  {
    id: 19,
    titulo: "Retrato de Identidad",
    categoria: "Videojuegos",
    descripcion:
      "Proyecto de videojuego educativo que busca vincular a la comunidad con el patrimonio artístico tucumano a través del arte y la música local.",
    autor: "Mariana Barcellone",
    imagen: "/retrato.webp",
    anio: 2025,
  },
  {
    id: 20,
    titulo: "The Dirty Kommie Toys vs. The Guita Eater",
    categoria: "Videojuegos",
    descripcion:
      "Producción audiovisual experimental vinculada al ecosistema creativo tucumano y a las nuevas formas de narración digital.",
    autor: "Producción tucumana",
    imagen: "/kommie.webp",
    anio: 2024,
  },
  {
    id: 21,
    titulo: "Mi mundito con monstruos",
    categoria: "Videojuegos",
    descripcion:
      "Propuesta vinculada al universo de contenidos digitales y audiovisuales desarrollados en Tucumán.",
    autor: "Producción tucumana",
    imagen: "/monster.webp",
    anio: 2024,
  },
  {
    id: 22,
    titulo: "Eureka!",
    categoria: "Videojuegos",
    descripcion:
      "Proyecto de entretenimiento digital asociado a la producción audiovisual y tecnológica de Tucumán.",
    autor: "Producción tucumana",
    imagen: "/eureka.webp",
    anio: 2024,
  },
  {
    id: 23,
    titulo: "La leyenda de la laguna del tesoro",
    categoria: "Videojuegos",
    descripcion:
      "Contenido inspirado en relatos y paisajes del noroeste argentino, con elementos de fantasía y tradición regional.",
    autor: "Producción tucumana",
    imagen: "/leyenda.webp",
    anio: 2024,
  },
  {
    id: 24,
    titulo: "Guardianes de la Naturaleza",
    categoria: "Videojuegos",
    descripcion:
      "Propuesta interactiva orientada a la relación entre tecnología, educación y cuidado del patrimonio natural.",
    autor: "Producción regional",
    imagen: "/guardianes.webp",
    anio: 2024,
  },
  {
    id: 25,
    titulo: "El hombre que está solo y espera",
    categoria: "Literatura",
    descripcion:
      "Obra fundamental del pensamiento y la literatura argentina, escrita por el tucumano Raúl Scalabrini Ortiz.",
    autor: "Raúl Scalabrini Ortiz",
    imagen: "/hombre.webp",
    anio: 1931,
  },
  {
    id: 26,
    titulo: "La tierra natal",
    categoria: "Literatura",
    descripcion:
      "Obra vinculada con la literatura regional y la representación del paisaje y la identidad del noroeste argentino.",
    autor: "Alberto Córdoba",
    imagen: "/tierra.webp",
  },
  {
    id: 27,
    titulo: "La vida en Haikus",
    categoria: "Literatura",
    descripcion:
      "Colección literaria publicada por TrascenderNOA que reúne una mirada poética a través del formato breve del haiku.",
    autor: "Autores regionales",
    imagen: "/haiku.webp",
    anio: 2022,
  },
  {
    id: 28,
    titulo: "Poemas en el Tiempo",
    categoria: "Literatura",
    descripcion:
      "Propuesta literaria publicada por una editorial regional vinculada con la producción cultural del noroeste argentino.",
    autor: "Autores regionales",
    imagen: "/poema.webp",
    anio: 2022,
  },
  {
    id: 29,
    titulo: "Pisar el hielo negro",
    categoria: "Literatura",
    descripcion:
      "Libro del cronista tucumano Miguel Velárdez que aborda las historias de trabajadores del norte que migran hacia la Patagonia.",
    autor: "Miguel Velárdez",
    imagen: "/hielo.webp",
    anio: 2026,
  },
  {
    id: 30,
    titulo: "El sendero de los inmortales",
    categoria: "Literatura",
    descripcion:
      "Obra publicada por TrascenderNOA, editorial vinculada con la difusión de autores y producciones literarias de la región.",
    autor: "Autores regionales",
    imagen: "/sendero.webp",
    anio: 2022,
  },
  {
    id: 31,
    titulo: "Fiesta Nacional de la Pachamama",
    categoria: "Cultura local o regional",
    descripcion:
      "Celebración ancestral vinculada a los pueblos originarios y a la relación con la Madre Tierra. En Tucumán tiene especial presencia en Amaicha del Valle.",
    autor: "Comunidad de Amaicha del Valle",
    imagen: "/pachamama.webp",
    anio: 1970,
  },
  {
    id: 32,
    titulo: "Casa Histórica de la Independencia",
    categoria: "Cultura local o regional",
    descripcion:
      "Uno de los principales símbolos históricos y culturales de Tucumán. En este lugar se declaró la Independencia de las Provincias Unidas del Río de la Plata en 1816.",
    autor: "Patrimonio histórico nacional",
    imagen: "/historica.webp",
    anio: 1816,
  },
  {
    id: 33,
    titulo: "Ruinas de Quilmes",
    categoria: "Cultura local o regional",
    descripcion:
      "Importante sitio arqueológico de los Valles Calchaquíes que conserva parte del legado de los pueblos originarios que habitaron la región.",
    autor: "Pueblo Quilmes",
    imagen: "/quilmes.webp",
    anio: 800,
  },
  {
    id: 34,
    titulo: "Museo Pachamama",
    categoria: "Cultura local o regional",
    descripcion:
      "Espacio cultural ubicado en Amaicha del Valle dedicado a preservar y difundir expresiones artísticas, históricas y culturales de los pueblos originarios y de los Valles Calchaquíes.",
    autor: "Héctor Cruz",
    imagen: "/museo.webp",
    anio: 1996,
  },
  {
    id: 35,
    titulo: "Fiesta Nacional de la Empanada",
    categoria: "Cultura local o regional",
    descripcion:
      "Celebración gastronómica y cultural que se realiza en Famaillá y que destaca a la empanada tucumana como uno de los símbolos culinarios de la provincia.",
    autor: "Municipalidad de Famaillá",
    imagen: "/empanada.webp",
    anio: 1979,
  },
  {
    id: 36,
    titulo: "Mayo de las Letras",
    categoria: "Cultura local o regional",
    descripcion:
      "Festival cultural y literario de Tucumán destinado a promover la lectura y visibilizar la producción literaria de la región.",
    autor: "Ente Cultural de Tucumán",
    imagen: "/mayo.webp",
    anio: 2006,
  },
];

export default contenidos;
