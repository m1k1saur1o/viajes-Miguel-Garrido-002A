import { buildSchema } from 'graphql'
import { vuelos } from './data/vuelos'
import { hoteles } from './data/hoteles'
import { obtenerReservas, guardarReserva, generarCodigo } from './data/reservas'
import { REGEX_CORREO } from '../utils/validaciones'
import { calcularTotales, maximoPasajeros } from '../utils/reserva'

// Esquema de la API GraphQL simulada de vuelos, hoteles y reservas.
export const schema = buildSchema(`
  type Vuelo {
    id: ID!
    destinoId: ID!
    origen: String!
    aerolinea: String!
    precio: Int!
    fechaSalida: String!
    fechaRegreso: String!
    duracion: String!
    asientosDisponibles: Int!
    disponible: Boolean!
  }

  type Hotel {
    id: ID!
    destinoId: ID!
    nombre: String!
    precioPorNoche: Int!
    estrellas: Int!
    habitacionesDisponibles: Int!
    disponible: Boolean!
    descripcion: String!
  }

  type Reserva {
    codigo: ID!
    destinoId: ID!
    vuelo: Vuelo!
    hotel: Hotel!
    pasajeros: Int!
    habitaciones: Int!
    noches: Int!
    nombreTitular: String!
    correo: String!
    totalVuelos: Int!
    totalHotel: Int!
    total: Int!
    fechaCreacion: String!
  }

  input ReservaInput {
    destinoId: ID!
    vueloId: ID!
    hotelId: ID!
    pasajeros: Int!
    nombreTitular: String!
    correo: String!
  }

  type Query {
    vuelos(destinoId: ID!): [Vuelo!]!
    hoteles(destinoId: ID!): [Hotel!]!
    reserva(codigo: ID!): Reserva
  }

  type Mutation {
    crearReserva(input: ReservaInput!): Reserva!
  }
`)

// La disponibilidad descuenta lo ya reservado (registrado en el mock).
function vueloConDisponibilidad(vuelo) {
  const reservados = obtenerReservas()
    .filter((r) => r.vueloId === vuelo.id)
    .reduce((suma, r) => suma + r.pasajeros, 0)
  const asientosDisponibles = Math.max(0, vuelo.asientosDisponibles - reservados)
  return { ...vuelo, asientosDisponibles, disponible: asientosDisponibles > 0 }
}

function hotelConDisponibilidad(hotel) {
  const reservadas = obtenerReservas()
    .filter((r) => r.hotelId === hotel.id)
    .reduce((suma, r) => suma + r.habitaciones, 0)
  const habitacionesDisponibles = Math.max(0, hotel.habitacionesDisponibles - reservadas)
  return { ...hotel, habitacionesDisponibles, disponible: habitacionesDisponibles > 0 }
}

function armarReserva(registro) {
  const vuelo = vuelos.find((v) => v.id === registro.vueloId)
  const hotel = hoteles.find((h) => h.id === registro.hotelId)
  return { ...registro, vuelo: vueloConDisponibilidad(vuelo), hotel: hotelConDisponibilidad(hotel) }
}

// Resolvers (rootValue)
export const rootValue = {
  vuelos: ({ destinoId }) =>
    vuelos.filter((vuelo) => vuelo.destinoId === destinoId).map(vueloConDisponibilidad),

  hoteles: ({ destinoId }) =>
    hoteles.filter((hotel) => hotel.destinoId === destinoId).map(hotelConDisponibilidad),

  reserva: ({ codigo }) => {
    const registro = obtenerReservas().find((r) => r.codigo === codigo)
    return registro ? armarReserva(registro) : null
  },

  crearReserva: ({ input }) => {
    const { destinoId, vueloId, hotelId, pasajeros } = input
    const nombreTitular = input.nombreTitular.trim()
    const correo = input.correo.trim()

    const vueloBase = vuelos.find((v) => v.id === vueloId && v.destinoId === destinoId)
    const hotelBase = hoteles.find((h) => h.id === hotelId && h.destinoId === destinoId)
    if (!vueloBase) throw new Error('El vuelo seleccionado no corresponde a este destino.')
    if (!hotelBase) throw new Error('El hotel seleccionado no corresponde a este destino.')
    if (nombreTitular.length < 3) throw new Error('El nombre del titular no es válido.')
    if (!REGEX_CORREO.test(correo)) throw new Error('El correo electrónico no es válido.')

    const vuelo = vueloConDisponibilidad(vueloBase)
    const hotel = hotelConDisponibilidad(hotelBase)
    if (!vuelo.disponible) throw new Error('El vuelo seleccionado ya no tiene asientos disponibles.')
    if (!hotel.disponible) throw new Error('El hotel seleccionado ya no tiene habitaciones disponibles.')
    if (pasajeros < 1 || pasajeros > maximoPasajeros(vuelo, hotel)) {
      throw new Error(`Solo quedan cupos para ${maximoPasajeros(vuelo, hotel)} pasajero(s) con esta combinación.`)
    }

    const registro = {
      codigo: generarCodigo(),
      destinoId,
      vueloId,
      hotelId,
      pasajeros,
      nombreTitular,
      correo,
      ...calcularTotales({ vuelo, hotel, pasajeros }),
      fechaCreacion: new Date().toISOString(),
    }
    guardarReserva(registro)

    return armarReserva(registro)
  },
}
