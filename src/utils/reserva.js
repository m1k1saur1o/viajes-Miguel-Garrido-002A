// Cálculos de una reserva ficticia (compartidos por la interfaz y el mock).

export const MAX_PASAJEROS = 6
export const PASAJEROS_POR_HABITACION = 2

export function calcularNoches(fechaSalida, fechaRegreso) {
  const dia = 24 * 60 * 60 * 1000
  return Math.max(1, Math.round((Date.parse(fechaRegreso) - Date.parse(fechaSalida)) / dia))
}

export function calcularHabitaciones(pasajeros) {
  return Math.ceil(pasajeros / PASAJEROS_POR_HABITACION)
}

export function calcularTotales({ vuelo, hotel, pasajeros }) {
  const noches = calcularNoches(vuelo.fechaSalida, vuelo.fechaRegreso)
  const habitaciones = calcularHabitaciones(pasajeros)
  const totalVuelos = vuelo.precio * pasajeros
  const totalHotel = hotel.precioPorNoche * noches * habitaciones
  return { noches, habitaciones, totalVuelos, totalHotel, total: totalVuelos + totalHotel }
}

// Máximo de pasajeros según asientos y habitaciones disponibles
export function maximoPasajeros(vuelo, hotel) {
  return Math.min(
    MAX_PASAJEROS,
    vuelo.asientosDisponibles,
    hotel.habitacionesDisponibles * PASAJEROS_POR_HABITACION,
  )
}
