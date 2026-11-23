// Operaciones GraphQL utilizadas por la aplicación.
// MSW las intercepta por su nombre de operación.

export const OBTENER_VUELOS = `
  query ObtenerVuelos($destinoId: ID!) {
    vuelos(destinoId: $destinoId) {
      id
      destinoId
      origen
      aerolinea
      precio
      fechaSalida
      fechaRegreso
      duracion
      asientosDisponibles
      disponible
    }
  }
`

export const OBTENER_HOTELES = `
  query ObtenerHoteles($destinoId: ID!) {
    hoteles(destinoId: $destinoId) {
      id
      destinoId
      nombre
      precioPorNoche
      estrellas
      habitacionesDisponibles
      disponible
      descripcion
    }
  }
`

const CAMPOS_RESERVA = `
  codigo
  destinoId
  pasajeros
  habitaciones
  noches
  nombreTitular
  correo
  totalVuelos
  totalHotel
  total
  fechaCreacion
  vuelo {
    id
    aerolinea
    origen
    fechaSalida
    fechaRegreso
    duracion
    precio
  }
  hotel {
    id
    nombre
    estrellas
    precioPorNoche
  }
`

export const CREAR_RESERVA = `
  mutation CrearReserva($input: ReservaInput!) {
    crearReserva(input: $input) {
      ${CAMPOS_RESERVA}
    }
  }
`

export const OBTENER_RESERVA = `
  query ObtenerReserva($codigo: ID!) {
    reserva(codigo: $codigo) {
      ${CAMPOS_RESERVA}
    }
  }
`
