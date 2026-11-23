import { Link } from 'react-router-dom'
import { formatearFecha, formatearPrecio } from '../utils/formato'

function ConfirmacionReserva({ reserva, destino, onNuevaReserva }) {
  return (
    <div role="status" className="mx-auto max-w-2xl rounded-2xl border border-emerald-200 bg-white p-6 shadow-sm md:p-10">
      <div className="text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-2xl text-white" aria-hidden="true">✓</div>
        <h3 className="mt-4 text-2xl font-bold text-marino">¡Reserva confirmada!</h3>
        <p className="mt-1 text-gray-600">
          Enviaremos el detalle a <strong>{reserva.correo}</strong>.
        </p>
        <p className="mt-4 inline-block rounded-lg bg-arena px-4 py-2 font-mono text-lg font-bold tracking-widest text-marino">
          {reserva.codigo}
        </p>
        <p className="mt-1 text-xs text-gray-500">Código de reserva</p>
      </div>

      <dl className="mt-6 divide-y divide-gray-100 text-sm">
        <div className="flex justify-between gap-4 py-2"><dt className="text-gray-500">Titular</dt><dd className="text-right font-semibold">{reserva.nombreTitular}</dd></div>
        <div className="flex justify-between gap-4 py-2"><dt className="text-gray-500">Destino</dt><dd className="text-right font-semibold">{destino.nombre}</dd></div>
        <div className="flex justify-between gap-4 py-2">
          <dt className="text-gray-500">Vuelo</dt>
          <dd className="text-right font-semibold">
            {reserva.vuelo.aerolinea} {reserva.vuelo.id} desde {reserva.vuelo.origen}<br />
            <span className="font-normal">{formatearFecha(reserva.vuelo.fechaSalida)} – {formatearFecha(reserva.vuelo.fechaRegreso)}</span>
          </dd>
        </div>
        <div className="flex justify-between gap-4 py-2">
          <dt className="text-gray-500">Hotel</dt>
          <dd className="text-right font-semibold">
            {reserva.hotel.nombre} ({reserva.hotel.estrellas} estrellas)<br />
            <span className="font-normal">{reserva.noches} noches · {reserva.habitaciones} habitación(es)</span>
          </dd>
        </div>
        <div className="flex justify-between gap-4 py-2"><dt className="text-gray-500">Pasajeros</dt><dd className="font-semibold">{reserva.pasajeros}</dd></div>
        <div className="flex justify-between gap-4 py-2"><dt className="text-gray-500">Vuelos</dt><dd>{formatearPrecio(reserva.totalVuelos)}</dd></div>
        <div className="flex justify-between gap-4 py-2"><dt className="text-gray-500">Hotel</dt><dd>{formatearPrecio(reserva.totalHotel)}</dd></div>
        <div className="flex justify-between gap-4 py-3 text-base"><dt className="font-bold text-marino">Total</dt><dd className="text-xl font-extrabold text-coral">{formatearPrecio(reserva.total)}</dd></div>
      </dl>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
        <button
          type="button"
          onClick={onNuevaReserva}
          className="cursor-pointer rounded-lg bg-marino px-5 py-2.5 font-semibold text-white transition-colors hover:bg-oceano"
        >
          Hacer otra reserva
        </button>
        <Link to="/destinos" className="rounded-lg border border-marino px-5 py-2.5 text-center font-semibold text-marino transition-colors hover:bg-marino hover:text-white">
          Explorar otros destinos
        </Link>
      </div>
      <p className="mt-4 text-center text-xs text-gray-500">Reserva ficticia registrada en la API simulada (MSW).</p>
    </div>
  )
}

export default ConfirmacionReserva
