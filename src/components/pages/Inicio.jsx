import { Link } from 'react-router-dom'
import TituloSeccion from '../TituloSeccion'
import Cargando from '../Cargando'
import MensajeEstado from '../MensajeEstado'
import { useConsulta } from '../../hooks/useConsulta'
import { obtenerDestinos } from '../../services/destinosService'

const servicios = [
  {
    titulo: 'Vuelos nacionales',
    descripcion: 'Comparamos aerolíneas para encontrar la mejor combinación de precio y horario.',
    icono: <path d="M2 16l20-6-20-6 4 6-4 6zm4-6h8" />,
  },
  {
    titulo: 'Hoteles seleccionados',
    descripcion: 'Alojamientos verificados para cada presupuesto, desde hostales hasta hoteles de lujo.',
    icono: <path d="M3 21V7l9-4 9 4v14M9 21v-6h6v6M3 21h18" />,
  },
  {
    titulo: 'Experiencias locales',
    descripcion: 'Tours y actividades con guías de cada zona para conocer Chile en profundidad.',
    icono: <path d="M3 20l6-12 4 7 3-4 5 9H3z" />,
  },
  {
    titulo: 'Asesoría personalizada',
    descripcion: 'Un equipo disponible para planificar tu viaje antes, durante y después.',
    icono: <path d="M12 12a4 4 0 100-8 4 4 0 000 8zm-7 9a7 7 0 0114 0" />,
  },
]

function Inicio() {
  const { datos: destinos, cargando, error } = useConsulta(obtenerDestinos, [])

  return (
    <main>
      {/* Bienvenida */}
      <section className="bg-marino text-white">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
          <p className="text-sm font-bold uppercase tracking-widest text-coral">Agencia de viajes</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
            Descubre Chile, de desierto a archipiélago
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/80">
            En Chile Travel planificamos tu próximo viaje con vuelos, hoteles y experiencias pensadas
            para ti. Elige tu destino y nosotros nos encargamos del resto.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/destinos"
              className="rounded-lg bg-coral px-6 py-3 font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-coral-oscuro"
            >
              Explorar destinos
            </Link>
            <Link
              to="/contacto"
              className="rounded-lg border border-white/40 px-6 py-3 font-semibold text-white transition-colors duration-200 hover:bg-white/10"
            >
              Hablar con un asesor
            </Link>
          </div>
        </div>
      </section>

      {/* Destinos destacados */}
      <section className="bg-arena">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <TituloSeccion
            etiqueta="Destinos destacados"
            titulo="Seis lugares que tienes que conocer"
            descripcion="Desde el norte árido hasta los canales del sur, cada destino ofrece una experiencia distinta."
          />

          {cargando ? (
            <Cargando texto="Cargando destinos..." />
          ) : error ? (
            <MensajeEstado tipo="error" titulo="No pudimos cargar los destinos">{error}</MensajeEstado>
          ) : destinos.length === 0 ? (
            <MensajeEstado titulo="Aún no hay destinos disponibles" />
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {destinos.map((destino) => (
                <Link
                  key={destino.id}
                  to={`/destinos/${destino.id}`}
                  className="group relative block aspect-[4/3] overflow-hidden rounded-2xl shadow-sm transition duration-300 hover:shadow-lg"
                >
                  <img
                    src={destino.imagen}
                    alt={`Vista de ${destino.nombre}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-marino-oscuro/75 px-4 py-3">
                    <p className="text-lg font-bold text-white">{destino.nombre}</p>
                    <p className="text-xs text-white/80">{destino.region}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}

          <div className="mt-10 text-center">
            <Link
              to="/destinos"
              className="inline-block rounded-lg bg-marino px-6 py-3 font-semibold text-white transition-colors duration-200 hover:bg-oceano"
            >
              Ver todos los destinos
            </Link>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <TituloSeccion
            etiqueta="Nuestros servicios"
            titulo="Todo tu viaje en un solo lugar"
            descripcion="Nos ocupamos de cada detalle para que solo pienses en disfrutar."
            centrado
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {servicios.map((servicio) => (
              <div
                key={servicio.titulo}
                className="rounded-2xl border border-gray-200 p-6 transition duration-300 hover:-translate-y-1 hover:border-oceano hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-arena text-oceano">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {servicio.icono}
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-bold text-marino">{servicio.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{servicio.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="bg-oceano text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-14 sm:px-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">¿Listo para tu próxima aventura?</h2>
            <p className="mt-2 max-w-xl text-white/85">
              Escríbenos o llámanos al +56 2 2345 6789. Nuestro equipo te ayudará a armar el viaje
              ideal según tus fechas y presupuesto.
            </p>
          </div>
          <Link
            to="/contacto"
            className="shrink-0 rounded-lg bg-white px-6 py-3 font-semibold text-marino transition-colors duration-200 hover:bg-arena"
          >
            Contáctanos
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Inicio
