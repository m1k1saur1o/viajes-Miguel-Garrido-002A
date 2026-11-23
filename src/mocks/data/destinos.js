// Datos simulados de destinos. Solo los consume MSW (nunca los componentes).
// Las imágenes son las seis disponibles en public/img.
export const destinos = [
  {
    id: 'atacama',
    nombre: 'Desierto de Atacama',
    region: 'Región de Antofagasta',
    pais: 'Chile',
    descripcion:
      'El desierto más árido del planeta ofrece paisajes únicos: salares, géiseres, lagunas altiplánicas y cielos perfectos para la observación astronómica. Muy cerca de Antofagasta se alza la Mano del Desierto, una de las esculturas más fotografiadas del norte de Chile.',
    actividades: [
      'Visita a la Mano del Desierto',
      'Tour astronómico nocturno',
      'Géiseres del Tatio al amanecer',
      'Valle de la Luna',
    ],
    imagen: '/img/atacama.webp',
  },
  {
    id: 'la-serena',
    nombre: 'La Serena',
    region: 'Región de Coquimbo',
    pais: 'Chile',
    descripcion:
      'Ciudad costera con amplias playas, clima templado todo el año y un casco histórico lleno de iglesias coloniales. Su icónico Faro Monumental marca el inicio de la Avenida del Mar, ideal para caminar junto al Pacífico.',
    actividades: [
      'Paseo por la Avenida del Mar',
      'Faro Monumental',
      'Excursión al Valle del Elqui',
      'Surf y deportes acuáticos',
    ],
    imagen: '/img/la%20serena.webp',
  },
  {
    id: 'santiago',
    nombre: 'Santiago',
    region: 'Región Metropolitana',
    pais: 'Chile',
    descripcion:
      'La capital de Chile combina modernidad y cultura a los pies de la Cordillera de los Andes. Rascacielos, barrios bohemios, museos y una gastronomía en constante crecimiento la convierten en el punto de partida ideal para recorrer el país.',
    actividades: [
      'Mirador Sky Costanera',
      'Cerro San Cristóbal',
      'Barrio Lastarria y Bellavista',
      'Ruta del vino en el Valle del Maipo',
    ],
    imagen: '/img/santiago.webp',
  },
  {
    id: 'concepcion',
    nombre: 'Concepción',
    region: 'Región del Biobío',
    pais: 'Chile',
    descripcion:
      'Ciudad universitaria y vibrante, rodeada de cerros verdes y a orillas del río Biobío. Destaca por su escena musical, sus parques urbanos y la cercanía a playas y caletas de la costa del Biobío.',
    actividades: [
      'Mirador del Cerro Caracol',
      'Recorrido por la Universidad de Concepción',
      'Parque Ecuador',
      'Caletas de Tomé y Lirquén',
    ],
    imagen: '/img/concepcion.jpg',
  },
  {
    id: 'valdivia',
    nombre: 'Valdivia',
    region: 'Región de Los Ríos',
    pais: 'Chile',
    descripcion:
      'Conocida como la ciudad de los ríos, Valdivia ofrece una costanera llena de vida, mercado fluvial, lobos marinos y una histórica red de fuertes españoles. Su tradición cervecera y la selva valdiviana completan la experiencia.',
    actividades: [
      'Navegación por el río Calle-Calle',
      'Mercado Fluvial y lobos marinos',
      'Fuertes de Niebla y Corral',
      'Ruta cervecera',
    ],
    imagen: '/img/valdivia.jpg',
  },
  {
    id: 'castro',
    nombre: 'Castro, Chiloé',
    region: 'Región de Los Lagos',
    pais: 'Chile',
    descripcion:
      'Capital de la Isla Grande de Chiloé, famosa por sus coloridos palafitos, sus iglesias de madera declaradas Patrimonio de la Humanidad y una rica tradición culinaria y mitológica.',
    actividades: [
      'Palafitos de Gamboa',
      'Iglesia de San Francisco',
      'Curanto tradicional',
      'Parque Nacional Chiloé',
    ],
    imagen: '/img/castro.jpg',
  },
]
