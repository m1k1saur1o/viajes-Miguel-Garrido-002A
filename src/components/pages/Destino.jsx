import { Link, useParams } from 'react-router-dom'
import Cargando from '../Cargando'
import MensajeEstado from '../MensajeEstado'
import PlanificadorViaje from '../PlanificadorViaje'
import { useConsulta } from '../../hooks/useConsulta'
import { obtenerDestinoPorId } from '../../services/destinosService'

function Destino() {
  const { id } = useParams()
  const { datos: destino, cargando, error } = useConsulta(
    (opciones) => obtenerDestinoPorId(id, opciones),
    [id],
  )

  if (cargando) {
    return <main className="mx-auto max-w-6xl px-4 py-12"><Cargando texto="Cargando destino..." /></main>
  }

  if (error) {
    return (
      <main className="mx-auto max-w-6xl px-4 py-12">
        <MensajeEstado tipo="error" titulo="No pudimos cargar el destino">{error}</MensajeEstado>
      </main>
    )
  }

  if (!destino) {
    return (
      <main className="mx-auto max-w-6xl px-4 py-12 text-center">
        <MensajeEstado titulo="Destino no encontrado">
          El destino que buscas no existe o ya no está disponible.
        </MensajeEstado>
        <Link to="/destinos" className="mt-6 inline-block rounded-lg bg-marino px-5 py-2.5 font-semibold text-white hover:bg-oceano">
          Volver a destinos
        </Link>
      </main>
    )
  }

  return (
    <main>
      {/* Información del destino */}
      <section className="bg-arena">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <nav aria-label="Ruta de navegación" className="mb-6 text-sm text-gray-500">
            <Link to="/" className="hover:text-marino">Inicio</Link>
            <span className="mx-2">/</span>
            <Link to="/destinos" className="hover:text-marino">Destinos</Link>
            <span className="mx-2">/</span>
            <span className="text-marino">{destino.nombre}</span>
          </nav>

          <div className="grid items-start gap-8 lg:grid-cols-2">
            <img
              src={destino.imagen}
              alt={`Vista de ${destino.nombre}`}
              className="aspect-[4/3] w-full rounded-2xl object-cover shadow-md"
            />
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-coral">
                {destino.region} · {destino.pais}
              </p>
              <h1 className="mt-2 text-4xl font-extrabold text-marino sm:text-5xl">{destino.nombre}</h1>
              <p className="mt-4 leading-relaxed text-gray-700">{destino.descripcion}</p>

              <h2 className="mt-6 text-lg font-bold text-marino">Actividades populares</h2>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {destino.actividades.map((actividad) => (
                  <li key={actividad} className="flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm text-gray-700 shadow-sm">
                    <span className="h-2 w-2 shrink-0 rounded-full bg-oceano" aria-hidden="true"></span>
                    {actividad}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#vuelos" className="rounded-lg bg-coral px-5 py-2.5 font-semibold text-white transition-colors hover:bg-coral-oscuro">
                  Reservar este viaje
                </a>
                <a href="#hoteles" className="rounded-lg border border-marino px-5 py-2.5 font-semibold text-marino transition-colors hover:bg-marino hover:text-white">
                  Ver hoteles
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PlanificadorViaje key={destino.id} destino={destino} />
    </main>
  )
}

export default Destino
