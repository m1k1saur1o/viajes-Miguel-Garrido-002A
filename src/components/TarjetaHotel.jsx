import Estrellas from './Estrellas'
import EtiquetaDisponibilidad from './EtiquetaDisponibilidad'
import BotonSeleccion from './BotonSeleccion'
import { formatearPrecio } from '../utils/formato'

// Tarjeta de hotel sin imágenes: solo información textual.
function TarjetaHotel({ hotel, seleccionado = false, onSeleccionar }) {
  const textoDisponibilidad = hotel.disponible
    ? `${hotel.habitacionesDisponibles} habitaciones disponibles`
    : 'Sin habitaciones disponibles'

  return (
    <article
      className={`flex flex-col rounded-2xl border border-t-4 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md ${
        seleccionado ? 'border-coral border-t-coral ring-2 ring-coral' : 'border-gray-200 border-t-oceano'
      } ${hotel.disponible ? '' : 'opacity-75'}`}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-bold text-marino">{hotel.nombre}</h3>
        <EtiquetaDisponibilidad disponible={hotel.disponible} />
      </div>

      <div className="mt-1 flex items-center gap-2 text-sm text-gray-600">
        <Estrellas cantidad={hotel.estrellas} />
        <span>{hotel.estrellas} estrellas</span>
      </div>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600">{hotel.descripcion}</p>

      <p className="mt-3 text-sm text-gray-500">{textoDisponibilidad}</p>

      <div className="mt-4 border-t border-gray-100 pt-4">
        <p className="text-xs text-gray-500">Precio por noche</p>
        <p className="text-2xl font-extrabold text-coral">{formatearPrecio(hotel.precioPorNoche)}</p>
      </div>

      {onSeleccionar && (
        <div className="mt-4">
          <BotonSeleccion
            disponible={hotel.disponible}
            seleccionado={seleccionado}
            onClick={() => onSeleccionar(hotel.id)}
            texto="Seleccionar hotel"
          />
        </div>
      )}
    </article>
  )
}

export default TarjetaHotel
