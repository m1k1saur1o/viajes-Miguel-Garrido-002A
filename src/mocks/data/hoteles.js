// Hoteles simulados: exactamente tres por destino (Hotel 1, Hotel 2, Hotel 3).
// Sin imágenes: solo información textual.
export const hoteles = [
  // Atacama
  { id: 'HO-atacama-1', destinoId: 'atacama', nombre: 'Hotel 1', precioPorNoche: 45000, estrellas: 3, habitacionesDisponibles: 7, descripcion: 'Hostal acogedor en el centro, con desayuno incluido y estacionamiento.' },
  { id: 'HO-atacama-2', destinoId: 'atacama', nombre: 'Hotel 2', precioPorNoche: 89000, estrellas: 4, habitacionesDisponibles: 3, descripcion: 'Habitaciones amplias de adobe, piscina al aire libre y tours astronómicos.' },
  { id: 'HO-atacama-3', destinoId: 'atacama', nombre: 'Hotel 3', precioPorNoche: 185000, estrellas: 5, habitacionesDisponibles: 0, descripcion: 'Lodge de lujo con spa, pensión completa y excursiones privadas.' },

  // La Serena
  { id: 'HO-la-serena-1', destinoId: 'la-serena', nombre: 'Hotel 1', precioPorNoche: 52000, estrellas: 3, habitacionesDisponibles: 12, descripcion: 'A pasos del casco histórico, ideal para recorrer la ciudad a pie.' },
  { id: 'HO-la-serena-2', destinoId: 'la-serena', nombre: 'Hotel 2', precioPorNoche: 78000, estrellas: 4, habitacionesDisponibles: 5, descripcion: 'Frente a la Avenida del Mar, con vista al océano y piscina.' },
  { id: 'HO-la-serena-3', destinoId: 'la-serena', nombre: 'Hotel 3', precioPorNoche: 132000, estrellas: 5, habitacionesDisponibles: 2, descripcion: 'Resort junto a la playa con spa, restaurante y club de niños.' },

  // Santiago
  { id: 'HO-santiago-1', destinoId: 'santiago', nombre: 'Hotel 1', precioPorNoche: 39000, estrellas: 3, habitacionesDisponibles: 20, descripcion: 'Opción económica en Barrio Brasil, cerca del metro.' },
  { id: 'HO-santiago-2', destinoId: 'santiago', nombre: 'Hotel 2', precioPorNoche: 95000, estrellas: 4, habitacionesDisponibles: 8, descripcion: 'Hotel boutique en Lastarria, con terraza y bar en la azotea.' },
  { id: 'HO-santiago-3', destinoId: 'santiago', nombre: 'Hotel 3', precioPorNoche: 210000, estrellas: 5, habitacionesDisponibles: 4, descripcion: 'Torre de lujo en Las Condes con vista a la cordillera y gimnasio.' },

  // Concepción
  { id: 'HO-concepcion-1', destinoId: 'concepcion', nombre: 'Hotel 1', precioPorNoche: 42000, estrellas: 3, habitacionesDisponibles: 9, descripcion: 'Céntrico y práctico, a minutos de la Plaza de la Independencia.' },
  { id: 'HO-concepcion-2', destinoId: 'concepcion', nombre: 'Hotel 2', precioPorNoche: 69000, estrellas: 4, habitacionesDisponibles: 0, descripcion: 'Habitaciones ejecutivas, cowork y desayuno buffet.' },
  { id: 'HO-concepcion-3', destinoId: 'concepcion', nombre: 'Hotel 3', precioPorNoche: 118000, estrellas: 5, habitacionesDisponibles: 6, descripcion: 'Vista al río Biobío, piscina temperada y restaurante gourmet.' },

  // Valdivia
  { id: 'HO-valdivia-1', destinoId: 'valdivia', nombre: 'Hotel 1', precioPorNoche: 38000, estrellas: 3, habitacionesDisponibles: 11, descripcion: 'Casona tradicional restaurada, cerca de la costanera.' },
  { id: 'HO-valdivia-2', destinoId: 'valdivia', nombre: 'Hotel 2', precioPorNoche: 74000, estrellas: 4, habitacionesDisponibles: 4, descripcion: 'Frente al río Calle-Calle, con kayaks disponibles para huéspedes.' },
  { id: 'HO-valdivia-3', destinoId: 'valdivia', nombre: 'Hotel 3', precioPorNoche: 126000, estrellas: 5, habitacionesDisponibles: 3, descripcion: 'Hotel con spa, piscina interior y degustación de cervezas locales.' },

  // Castro
  { id: 'HO-castro-1', destinoId: 'castro', nombre: 'Hotel 1', precioPorNoche: 48000, estrellas: 3, habitacionesDisponibles: 6, descripcion: 'Palafito familiar sobre el agua, con desayuno chilote casero.' },
  { id: 'HO-castro-2', destinoId: 'castro', nombre: 'Hotel 2', precioPorNoche: 82000, estrellas: 4, habitacionesDisponibles: 2, descripcion: 'Palafito de diseño con vista al fiordo y calefacción a leña.' },
  { id: 'HO-castro-3', destinoId: 'castro', nombre: 'Hotel 3', precioPorNoche: 145000, estrellas: 5, habitacionesDisponibles: 5, descripcion: 'Hotel boutique frente al mar, con tinajas y excursiones a islas.' },
]
