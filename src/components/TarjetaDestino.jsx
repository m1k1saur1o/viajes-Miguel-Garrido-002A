import { Link } from 'react-router-dom'

function TarjetaDestino({ destino }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="aspect-[4/3] overflow-hidden bg-gray-100">
        <img
          src={destino.imagen}
          alt={`Vista de ${destino.nombre}`}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-oceano">
          {destino.region} · {destino.pais}
        </p>
        <h3 className="mt-1 text-xl font-bold text-marino">{destino.nombre}</h3>
        <p className="texto-recortado mt-2 text-sm leading-relaxed text-gray-600">{destino.descripcion}</p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {destino.actividades.slice(0, 3).map((actividad) => (
            <li key={actividad} className="rounded-full bg-arena px-3 py-1 text-xs font-medium text-marino">
              {actividad}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-5">
          <Link
            to={`/destinos/${destino.id}`}
            className="inline-flex w-full items-center justify-center rounded-lg bg-marino px-4 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-oceano"
          >
            Ver detalles
          </Link>
        </div>
      </div>
    </article>
  )
}

export default TarjetaDestino
