import EtiquetaDisponibilidad from './EtiquetaDisponibilidad'
import BotonSeleccion from './BotonSeleccion'
import { formatearFecha, formatearPrecio } from '../utils/formato'

function TarjetaVuelo({ vuelo, seleccionado = false, onSeleccionar }) {
  const textoDisponibilidad = vuelo.disponible
    ? `${vuelo.asientosDisponibles} asientos disponibles`
    : 'Sin asientos disponibles'

  return (
    <article
      className={`flex flex-col rounded-2xl border bg-white p-5 shadow-sm transition duration-300 hover:shadow-md ${
        seleccionado ? 'border-coral ring-2 ring-coral' : 'border-gray-200 hover:border-oceano'
      } ${vuelo.disponible ? '' : 'opacity-75'}`}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-lg font-bold text-marino">{vuelo.aerolinea}</p>
          <p className="text-xs text-gray-500">Vuelo {vuelo.id} · desde {vuelo.origen}</p>
        </div>
        <EtiquetaDisponibilidad disponible={vuelo.disponible} />
      </div>

      <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
        <div>
          <dt className="text-gray-500">Salida</dt>
          <dd className="font-semibold text-gray-800">{formatearFecha(vuelo.fechaSalida)}</dd>
        </div>
        <div>
          <dt className="text-gray-500">Regreso</dt>
          <dd className="font-semibold text-gray-800">{formatearFecha(vuelo.fechaRegreso)}</dd>
        </div>
        <div>
          <dt className="text-gray-500">Duración</dt>
          <dd className="font-semibold text-gray-800">{vuelo.duracion}</dd>
        </div>
        <div>
          <dt className="text-gray-500">Disponibilidad</dt>
          <dd className="font-semibold text-gray-800">{textoDisponibilidad}</dd>
        </div>
      </dl>

      <div className="mt-auto pt-5">
        <div className="border-t border-gray-100 pt-4">
          <p className="text-xs text-gray-500">Precio ida y vuelta, por pasajero</p>
          <p className="text-2xl font-extrabold text-coral">{formatearPrecio(vuelo.precio)}</p>
        </div>
        {onSeleccionar && (
          <div className="mt-4">
            <BotonSeleccion
              disponible={vuelo.disponible}
              seleccionado={seleccionado}
              onClick={() => onSeleccionar(vuelo.id)}
              texto="Seleccionar vuelo"
            />
          </div>
        )}
      </div>
    </article>
  )
}

export default TarjetaVuelo
