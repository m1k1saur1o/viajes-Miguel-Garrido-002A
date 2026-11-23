import { useMemo, useState } from 'react'
import TarjetaDestino from '../TarjetaDestino'
import TituloSeccion from '../TituloSeccion'
import Cargando from '../Cargando'
import MensajeEstado from '../MensajeEstado'
import { useConsulta } from '../../hooks/useConsulta'
import { obtenerDestinos } from '../../services/destinosService'

function normalizar(texto) {
  return texto.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
}

function Destinos() {
  const { datos: destinos, cargando, error } = useConsulta(obtenerDestinos, [])
  const [busqueda, setBusqueda] = useState('')

  const destinosFiltrados = useMemo(() => {
    if (!destinos) return []
    const termino = normalizar(busqueda.trim())
    if (!termino) return destinos

    return destinos.filter((destino) =>
      [destino.nombre, destino.region, destino.descripcion, ...destino.actividades].some((campo) =>
        normalizar(campo).includes(termino),
      ),
    )
  }, [destinos, busqueda])

  return (
    <main className="bg-arena">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <TituloSeccion
          etiqueta="Destinos"
          titulo="Elige tu próximo destino"
          descripcion="Revisa cada destino y descubre los vuelos y hoteles disponibles."
        />

        <form
          role="search"
          onSubmit={(evento) => evento.preventDefault()}
          className="mb-8 max-w-md"
        >
          <label htmlFor="busqueda" className="mb-2 block text-sm font-semibold text-gray-700">
            Buscar destino o actividad
          </label>
          <input
            id="busqueda"
            type="search"
            value={busqueda}
            onChange={(evento) => setBusqueda(evento.target.value)}
            placeholder="Ej.: playa, Chiloé, astronomía..."
            className="w-full rounded-lg border border-gray-300 bg-white p-3 text-gray-800 placeholder-gray-400 focus:border-oceano focus:outline-none focus:ring-2 focus:ring-oceano/40"
          />
        </form>

        {cargando ? (
          <Cargando texto="Consultando destinos disponibles..." />
        ) : error ? (
          <MensajeEstado tipo="error" titulo="No pudimos cargar los destinos">
            {error} Intenta recargar la página.
          </MensajeEstado>
        ) : destinosFiltrados.length === 0 ? (
          <MensajeEstado titulo="No encontramos destinos">
            {busqueda ? `No hay resultados para "${busqueda}".` : 'Aún no hay destinos disponibles.'}
          </MensajeEstado>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {destinosFiltrados.map((destino) => (
              <TarjetaDestino key={destino.id} destino={destino} />
            ))}
          </div>
        )}
      </div>
    </main>
  )
}

export default Destinos
