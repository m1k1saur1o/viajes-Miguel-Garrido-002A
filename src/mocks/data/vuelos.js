// Vuelos simulados, relacionados con cada destino mediante `destinoId`.
export const vuelos = [
  // Atacama (Aeropuerto El Loa, Calama)
  { id: 'VU-101', destinoId: 'atacama', origen: 'Santiago (SCL)', aerolinea: 'LATAM', precio: 189900, fechaSalida: '2027-01-12', fechaRegreso: '2027-01-19', duracion: '2 h 05 min', asientosDisponibles: 14 },
  { id: 'VU-102', destinoId: 'atacama', origen: 'Santiago (SCL)', aerolinea: 'Sky Airline', precio: 154500, fechaSalida: '2027-02-03', fechaRegreso: '2027-02-10', duracion: '2 h 10 min', asientosDisponibles: 6 },
  { id: 'VU-103', destinoId: 'atacama', origen: 'Santiago (SCL)', aerolinea: 'JetSMART', precio: 119990, fechaSalida: '2027-03-05', fechaRegreso: '2027-03-09', duracion: '2 h 05 min', asientosDisponibles: 0 },

  // La Serena (Aeródromo La Florida)
  { id: 'VU-201', destinoId: 'la-serena', origen: 'Santiago (SCL)', aerolinea: 'LATAM', precio: 98900, fechaSalida: '2027-01-08', fechaRegreso: '2027-01-15', duracion: '55 min', asientosDisponibles: 22 },
  { id: 'VU-202', destinoId: 'la-serena', origen: 'Santiago (SCL)', aerolinea: 'JetSMART', precio: 64990, fechaSalida: '2027-02-14', fechaRegreso: '2027-02-21', duracion: '1 h 00 min', asientosDisponibles: 9 },

  // Santiago (Aeropuerto Arturo Merino Benítez)
  { id: 'VU-301', destinoId: 'santiago', origen: 'Puerto Montt (PMC)', aerolinea: 'LATAM', precio: 112900, fechaSalida: '2027-01-20', fechaRegreso: '2027-01-24', duracion: '1 h 45 min', asientosDisponibles: 31 },
  { id: 'VU-302', destinoId: 'santiago', origen: 'Antofagasta (ANF)', aerolinea: 'Sky Airline', precio: 104500, fechaSalida: '2027-02-06', fechaRegreso: '2027-02-11', duracion: '2 h 05 min', asientosDisponibles: 12 },
  { id: 'VU-303', destinoId: 'santiago', origen: 'Punta Arenas (PUQ)', aerolinea: 'JetSMART', precio: 139990, fechaSalida: '2027-03-12', fechaRegreso: '2027-03-18', duracion: '3 h 20 min', asientosDisponibles: 4 },

  // Concepción (Aeropuerto Carriel Sur)
  { id: 'VU-401', destinoId: 'concepcion', origen: 'Santiago (SCL)', aerolinea: 'Sky Airline', precio: 79900, fechaSalida: '2027-01-16', fechaRegreso: '2027-01-20', duracion: '1 h 05 min', asientosDisponibles: 17 },
  { id: 'VU-402', destinoId: 'concepcion', origen: 'Santiago (SCL)', aerolinea: 'LATAM', precio: 92500, fechaSalida: '2027-02-22', fechaRegreso: '2027-02-27', duracion: '1 h 05 min', asientosDisponibles: 0 },
  { id: 'VU-403', destinoId: 'concepcion', origen: 'Santiago (SCL)', aerolinea: 'JetSMART', precio: 58990, fechaSalida: '2027-03-19', fechaRegreso: '2027-03-23', duracion: '1 h 10 min', asientosDisponibles: 25 },

  // Valdivia (Aeródromo Pichoy)
  { id: 'VU-501', destinoId: 'valdivia', origen: 'Santiago (SCL)', aerolinea: 'LATAM', precio: 124900, fechaSalida: '2027-01-26', fechaRegreso: '2027-02-02', duracion: '1 h 25 min', asientosDisponibles: 10 },
  { id: 'VU-502', destinoId: 'valdivia', origen: 'Santiago (SCL)', aerolinea: 'Sky Airline', precio: 99500, fechaSalida: '2027-02-17', fechaRegreso: '2027-02-23', duracion: '1 h 30 min', asientosDisponibles: 3 },

  // Castro (Aeródromo Mocopulli)
  { id: 'VU-601', destinoId: 'castro', origen: 'Santiago (SCL)', aerolinea: 'LATAM', precio: 168900, fechaSalida: '2027-01-30', fechaRegreso: '2027-02-06', duracion: '2 h 00 min', asientosDisponibles: 8 },
  { id: 'VU-602', destinoId: 'castro', origen: 'Puerto Montt (PMC)', aerolinea: 'Sky Airline', precio: 72500, fechaSalida: '2027-02-25', fechaRegreso: '2027-03-01', duracion: '35 min', asientosDisponibles: 15 },
  { id: 'VU-603', destinoId: 'castro', origen: 'Santiago (SCL)', aerolinea: 'JetSMART', precio: 134990, fechaSalida: '2027-03-26', fechaRegreso: '2027-04-02', duracion: '2 h 10 min', asientosDisponibles: 0 },
]
