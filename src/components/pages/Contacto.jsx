import FormularioContacto from '../FormularioContacto'
import TituloSeccion from '../TituloSeccion'

const datosContacto = [
  { titulo: 'Oficina', detalle: 'Av. Providencia 1234, Of. 501, Santiago' },
  { titulo: 'Teléfono', detalle: '+56 2 2345 6789' },
  { titulo: 'Correo', detalle: 'contacto@chiletravel.cl' },
  { titulo: 'Horario', detalle: 'Lunes a viernes, 9:00 a 18:00 h' },
]

function Contacto() {
  return (
    <main className="bg-arena">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <TituloSeccion
          etiqueta="Contacto"
          titulo="Planifiquemos tu viaje"
          descripcion="¿Tienes dudas sobre un destino, quieres una cotización o necesitas ayuda con tu reserva? Escríbenos."
        />

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-sm md:p-10 lg:col-span-2">
            <FormularioContacto />
          </div>

          <aside className="space-y-4">
            {datosContacto.map((dato) => (
              <div key={dato.titulo} className="rounded-2xl bg-white p-5 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-widest text-oceano">{dato.titulo}</p>
                <p className="mt-1 font-medium text-gray-800">{dato.detalle}</p>
              </div>
            ))}
          </aside>
        </div>
      </div>
    </main>
  )
}

export default Contacto
