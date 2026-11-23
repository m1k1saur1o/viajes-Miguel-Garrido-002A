// "Base de datos" de reservas del mock. Se guarda en localStorage
// para que las reservas queden registradas entre recargas.
const CLAVE = 'chile-travel:reservas'

export function obtenerReservas() {
  try {
    return JSON.parse(localStorage.getItem(CLAVE)) ?? []
  } catch {
    return []
  }
}

export function guardarReserva(reserva) {
  const reservas = obtenerReservas()
  reservas.push(reserva)
  localStorage.setItem(CLAVE, JSON.stringify(reservas))
}

export function generarCodigo() {
  const caracteres = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
  let codigo = 'CT-'
  for (let i = 0; i < 6; i++) codigo += caracteres[Math.floor(Math.random() * caracteres.length)]
  return codigo
}
