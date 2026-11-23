import { Link } from 'react-router-dom'

const ANIO_ACTUAL = new Date().getFullYear()

function Footer() {
  return (
    <footer className="bg-marino-oscuro text-white/80">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3">
        <div>
          <p className="text-lg font-extrabold text-white">
            Chile<span className="text-coral">Travel</span>
          </p>
          <p className="mt-2 text-sm leading-relaxed">
            Agencia de viajes especializada en destinos de norte a sur de Chile. Vuelos, hoteles y
            experiencias en un solo lugar.
          </p>
        </div>

        <div>
          <p className="font-semibold text-white">Navegación</p>
          <ul className="mt-2 space-y-1 text-sm">
            <li><Link to="/" className="hover:text-white">Inicio</Link></li>
            <li><Link to="/destinos" className="hover:text-white">Destinos</Link></li>
            <li><Link to="/contacto" className="hover:text-white">Contacto</Link></li>
          </ul>
        </div>

        <div>
          <p className="font-semibold text-white">Contacto</p>
          <ul className="mt-2 space-y-1 text-sm">
            <li>Av. Providencia 1234, Santiago</li>
            <li>+56 2 2345 6789</li>
            <li>contacto@chiletravel.cl</li>
            <li>Lunes a viernes, 9:00 a 18:00 h</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/60">
        © {ANIO_ACTUAL} Chile Travel. Todos los derechos reservados.
      </div>
    </footer>
  )
}

export default Footer
