// Servicio de vuelos, hoteles y reservas (API GraphQL simulada con MSW).
import { ejecutarConsulta } from './graphqlClient'
import { OBTENER_VUELOS, OBTENER_HOTELES, CREAR_RESERVA, OBTENER_RESERVA } from '../graphql/queries'

export async function obtenerVuelos(destinoId, opciones) {
  const data = await ejecutarConsulta(OBTENER_VUELOS, { destinoId }, opciones)
  return data.vuelos
}

export async function obtenerHoteles(destinoId, opciones) {
  const data = await ejecutarConsulta(OBTENER_HOTELES, { destinoId }, opciones)
  return data.hoteles
}

export async function crearReserva(input) {
  const data = await ejecutarConsulta(CREAR_RESERVA, { input })
  return data.crearReserva
}

export async function obtenerReserva(codigo, opciones) {
  const data = await ejecutarConsulta(OBTENER_RESERVA, { codigo }, opciones)
  return data.reserva
}
