import { useState } from 'react'
import { crearReserva } from '../services/reservasService'
import { calcularTotales, maximoPasajeros } from '../utils/reserva'
import { formatearFecha, formatearPrecio } from '../utils/formato'
import { REGEX_CORREO } from '../utils/validaciones'

function claseCampo(error) {
  return [
    'w-full rounded-lg border bg-white p-3 text-gray-800 placeholder-gray-400 transition focus:outline-none focus:ring-2',
    error ? 'border-red-400 focus:ring-red-200' : 'border-gray-300 focus:border-oceano focus:ring-oceano/30',
  ].join(' ')
}

function validar({ nombre, correo }) {
  const errores = {}
  if (nombre.trim().length < 3) errores.nombre = 'Ingresa el nombre del titular (mínimo 3 caracteres).'
  if (!REGEX_CORREO.test(correo.trim())) errores.correo = 'Ingresa un correo válido, por ejemplo nombre@correo.cl.'
  return errores
}

function ItemSeleccion({ paso, titulo, vacio, href, children }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4">
      <p className="text-xs font-bold uppercase tracking-widest text-oceano">Paso {paso} · {titulo}</p>
      {children ?? (
        <p className="mt-1 text-sm text-gray-500">
          {vacio} <a href={href} className="font-semibold text-marino underline hover:text-oceano">Elegir</a>
        </p>
      )}
    </div>
  )
}

// Paso 3: resumen de la selección y confirmación de la reserva ficticia.
function ResumenReserva({ destino, vuelo, hotel, onConfirmada }) {
  const [datos, setDatos] = useState({ nombre: '', correo: '', pasajeros: 1 })
  const [errores, setErrores] = useState({})
  const [enviando, setEnviando] = useState(false)
  const [errorServidor, setErrorServidor] = useState(null)

  const completo = Boolean(vuelo && hotel)
  const maximo = completo ? maximoPasajeros(vuelo, hotel) : 1
  const pasajeros = Math.min(datos.pasajeros, Math.max(maximo, 1))
  const totales = completo ? calcularTotales({ vuelo, hotel, pasajeros }) : null

  function manejarCambio(evento) {
    const { name, value } = evento.target
    setDatos((prev) => ({ ...prev, [name]: name === 'pasajeros' ? Number(value) : value }))
    if (errores[name]) setErrores((prev) => ({ ...prev, [name]: undefined }))
  }

  async function manejarEnvio(evento) {
    evento.preventDefault()
    if (!completo) return

    const nuevosErrores = validar(datos)
    setErrores(nuevosErrores)
    if (Object.keys(nuevosErrores).length) return

    setEnviando(true)
    setErrorServidor(null)
    try {
      const reserva = await crearReserva({
        destinoId: destino.id,
        vueloId: vuelo.id,
        hotelId: hotel.id,
        pasajeros,
        nombreTitular: datos.nombre.trim(),
        correo: datos.correo.trim(),
      })
      setDatos({ nombre: '', correo: '', pasajeros: 1 })
      onConfirmada(reserva)
    } catch (error) {
      setErrorServidor(error.message)
    } finally {
      setEnviando(false)
    }
  }

  return (
    <div className="grid gap-8 lg:grid-cols-5">
      {/* Selección */}
      <div className="space-y-4 lg:col-span-2">
        <ItemSeleccion paso={1} titulo="Vuelo" vacio="Aún no eliges un vuelo." href="#vuelos">
          {vuelo && (
            <div className="mt-1 text-sm text-gray-700">
              <p className="font-bold text-marino">{vuelo.aerolinea} · {vuelo.id}</p>
              <p>Desde {vuelo.origen}</p>
              <p>{formatearFecha(vuelo.fechaSalida)} – {formatearFecha(vuelo.fechaRegreso)} · {vuelo.duracion}</p>
              <p className="mt-1 font-semibold">{formatearPrecio(vuelo.precio)} por pasajero</p>
            </div>
          )}
        </ItemSeleccion>

        <ItemSeleccion paso={2} titulo="Hotel" vacio="Aún no eliges un hotel." href="#hoteles">
          {hotel && (
            <div className="mt-1 text-sm text-gray-700">
              <p className="font-bold text-marino">{hotel.nombre} · {hotel.estrellas} estrellas</p>
              <p className="mt-1 font-semibold">{formatearPrecio(hotel.precioPorNoche)} por noche</p>
            </div>
          )}
        </ItemSeleccion>

        {totales && (
          <div className="rounded-xl bg-marino p-5 text-white">
            <p className="text-sm text-white/80">
              {totales.noches} noches · {totales.habitaciones} habitación(es) · {pasajeros} pasajero(s)
            </p>
            <dl className="mt-3 space-y-1 text-sm">
              <div className="flex justify-between">
                <dt>Vuelos ({pasajeros} × {formatearPrecio(vuelo.precio)})</dt>
                <dd>{formatearPrecio(totales.totalVuelos)}</dd>
              </div>
              <div className="flex justify-between">
                <dt>Hotel ({totales.noches} noches × {totales.habitaciones} hab.)</dt>
                <dd>{formatearPrecio(totales.totalHotel)}</dd>
              </div>
            </dl>
            <div className="mt-3 flex items-end justify-between border-t border-white/20 pt-3">
              <span className="font-semibold">Total estimado</span>
              <span className="text-2xl font-extrabold">{formatearPrecio(totales.total)}</span>
            </div>
            <p className="mt-2 text-xs text-white/70">La estadía corresponde a las fechas del vuelo elegido.</p>
          </div>
        )}
      </div>

      {/* Datos del titular */}
      <form onSubmit={manejarEnvio} noValidate className="space-y-5 rounded-2xl bg-white p-6 shadow-sm lg:col-span-3 md:p-8">
        <h3 className="text-xl font-bold text-marino">Datos del titular</h3>

        <div>
          <label htmlFor="reserva-nombre" className="mb-2 block text-sm font-semibold text-gray-700">Nombre completo</label>
          <input
            id="reserva-nombre"
            name="nombre"
            type="text"
            autoComplete="name"
            placeholder="Ej.: Camila Rojas"
            value={datos.nombre}
            onChange={manejarCambio}
            aria-invalid={Boolean(errores.nombre)}
            className={claseCampo(errores.nombre)}
          />
          {errores.nombre && <p className="mt-1 text-sm text-red-600">{errores.nombre}</p>}
        </div>

        <div className="grid gap-5 sm:grid-cols-3">
          <div className="sm:col-span-2">
            <label htmlFor="reserva-correo" className="mb-2 block text-sm font-semibold text-gray-700">Correo electrónico</label>
            <input
              id="reserva-correo"
              name="correo"
              type="email"
              autoComplete="email"
              placeholder="nombre@correo.cl"
              value={datos.correo}
              onChange={manejarCambio}
              aria-invalid={Boolean(errores.correo)}
              className={claseCampo(errores.correo)}
            />
            {errores.correo && <p className="mt-1 text-sm text-red-600">{errores.correo}</p>}
          </div>

          <div>
            <label htmlFor="reserva-pasajeros" className="mb-2 block text-sm font-semibold text-gray-700">Pasajeros</label>
            <select
              id="reserva-pasajeros"
              name="pasajeros"
              value={pasajeros}
              onChange={manejarCambio}
              disabled={!completo}
              className={`${claseCampo()} disabled:bg-gray-100`}
            >
              {Array.from({ length: Math.max(maximo, 1) }, (_, i) => i + 1).map((n) => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>
          </div>
        </div>

        {errorServidor && (
          <p role="alert" className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">{errorServidor}</p>
        )}

        {!completo && (
          <p className="rounded-lg bg-arena p-3 text-sm text-marino">
            Selecciona un vuelo y un hotel para confirmar tu reserva.
          </p>
        )}

        <button
          type="submit"
          disabled={!completo || enviando}
          className="w-full cursor-pointer rounded-lg bg-coral px-6 py-3 font-semibold text-white shadow-sm transition duration-200 hover:bg-coral-oscuro hover:shadow-md active:scale-[0.99] disabled:cursor-not-allowed disabled:bg-gray-300 disabled:shadow-none"
        >
          {enviando ? 'Confirmando reserva...' : totales ? `Confirmar reserva · ${formatearPrecio(totales.total)}` : 'Confirmar reserva'}
        </button>
        <p className="text-center text-xs text-gray-500">Reserva de demostración: no se realiza ningún cobro.</p>
      </form>
    </div>
  )
}

export default ResumenReserva
