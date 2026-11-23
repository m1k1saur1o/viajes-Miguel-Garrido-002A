import { useState } from 'react'
import Cargando from './Cargando'
import MensajeEstado from './MensajeEstado'
import TarjetaVuelo from './TarjetaVuelo'
import TarjetaHotel from './TarjetaHotel'
import ResumenReserva from './ResumenReserva'
import ConfirmacionReserva from './ConfirmacionReserva'
import { useConsulta } from '../hooks/useConsulta'
import { obtenerVuelos, obtenerHoteles } from '../services/reservasService'

function EncabezadoPaso({ paso, titulo, descripcion }) {
  return (
    <div>
      <p className="text-sm font-bold uppercase tracking-widest text-coral">Paso {paso}</p>
      <h2 className="mt-1 text-3xl font-bold text-marino">{titulo}</h2>
      <p className="mt-2 text-gray-600">{descripcion}</p>
    </div>
  )
}

function ListaOpciones({ consulta, vacio, errorTitulo, cargandoTexto, columnas, children }) {
  if (consulta.cargando) return <Cargando texto={cargandoTexto} />
  if (consulta.error) return <MensajeEstado tipo="error" titulo={errorTitulo}>{consulta.error}</MensajeEstado>
  if (consulta.datos.length === 0) return <MensajeEstado titulo={vacio.titulo}>{vacio.texto}</MensajeEstado>
  return <div className={`grid gap-6 ${columnas}`}>{consulta.datos.map(children)}</div>
}

function desplazarA(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

// Flujo de planificación: elegir vuelo, elegir hotel y confirmar la reserva.
function PlanificadorViaje({ destino }) {
  const consultaVuelos = useConsulta((opciones) => obtenerVuelos(destino.id, opciones), [destino.id])
  const consultaHoteles = useConsulta((opciones) => obtenerHoteles(destino.id, opciones), [destino.id])

  const [vueloId, setVueloId] = useState(null)
  const [hotelId, setHotelId] = useState(null)
  const [reserva, setReserva] = useState(null)

  // Solo se consideran seleccionadas las opciones que siguen disponibles
  const vuelo = consultaVuelos.datos?.find((v) => v.id === vueloId && v.disponible) ?? null
  const hotel = consultaHoteles.datos?.find((h) => h.id === hotelId && h.disponible) ?? null

  function seleccionarVuelo(id) {
    const nuevo = id === vueloId ? null : id
    setVueloId(nuevo)
    if (nuevo && !hotel) desplazarA('hoteles')
  }

  function seleccionarHotel(id) {
    const nuevo = id === hotelId ? null : id
    setHotelId(nuevo)
    if (nuevo) desplazarA(vuelo ? 'reserva' : 'vuelos')
  }

  function confirmarReserva(nuevaReserva) {
    setReserva(nuevaReserva)
    setVueloId(null)
    setHotelId(null)
    // Actualiza la disponibilidad con lo recién reservado
    consultaVuelos.recargar()
    consultaHoteles.recargar()
    desplazarA('reserva')
  }

  return (
    <>
      <section id="vuelos" className="scroll-mt-20 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <EncabezadoPaso paso={1} titulo="Elige tu vuelo" descripcion="Tarifas por pasajero, ida y vuelta." />
          <div className="mt-6">
            <ListaOpciones
              consulta={consultaVuelos}
              cargandoTexto="Buscando vuelos..."
              errorTitulo="No pudimos cargar los vuelos"
              vacio={{ titulo: 'No hay vuelos disponibles', texto: 'Por ahora no hay vuelos programados para este destino.' }}
              columnas="md:grid-cols-2 lg:grid-cols-3"
            >
              {(v) => <TarjetaVuelo key={v.id} vuelo={v} seleccionado={v.id === vuelo?.id} onSeleccionar={seleccionarVuelo} />}
            </ListaOpciones>
          </div>
        </div>
      </section>

      <section id="hoteles" className="scroll-mt-20 bg-arena">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <EncabezadoPaso paso={2} titulo="Elige tu hotel" descripcion="Tres alternativas para distintos estilos y presupuestos." />
          <div className="mt-6">
            <ListaOpciones
              consulta={consultaHoteles}
              cargandoTexto="Buscando hoteles..."
              errorTitulo="No pudimos cargar los hoteles"
              vacio={{ titulo: 'No hay hoteles disponibles', texto: 'Por ahora no hay hoteles registrados para este destino.' }}
              columnas="md:grid-cols-3"
            >
              {(h) => <TarjetaHotel key={h.id} hotel={h} seleccionado={h.id === hotel?.id} onSeleccionar={seleccionarHotel} />}
            </ListaOpciones>
          </div>
        </div>
      </section>

      <section id="reserva" className="scroll-mt-20 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <EncabezadoPaso paso={3} titulo="Confirma tu reserva" descripcion={`Revisa tu selección para ${destino.nombre} e ingresa los datos del titular.`} />
          <div className="mt-6">
            {reserva ? (
              <ConfirmacionReserva reserva={reserva} destino={destino} onNuevaReserva={() => { setReserva(null); desplazarA('vuelos') }} />
            ) : (
              <ResumenReserva destino={destino} vuelo={vuelo} hotel={hotel} onConfirmada={confirmarReserva} />
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default PlanificadorViaje
