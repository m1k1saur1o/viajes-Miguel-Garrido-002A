import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const enlaces = [
  { to: '/', texto: 'Inicio', end: true },
  { to: '/destinos', texto: 'Destinos' },
  { to: '/contacto', texto: 'Contacto' },
]

function claseEnlace({ isActive }) {
  return [
    'block rounded-md px-3 py-2 text-sm font-semibold transition-colors duration-200',
    isActive ? 'bg-white/15 text-white' : 'text-white/80 hover:bg-white/10 hover:text-white',
  ].join(' ')
}

function Header() {
  const [menuAbierto, setMenuAbierto] = useState(false)
  const cerrarMenu = () => setMenuAbierto(false)

  return (
    <header className="sticky top-0 z-50 bg-marino shadow-md">
      <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between px-4 py-3 sm:px-6">
        <Link to="/" onClick={cerrarMenu} className="text-xl font-extrabold tracking-tight text-white">
          Chile<span className="text-coral">Travel</span>
        </Link>

        <button
          type="button"
          onClick={() => setMenuAbierto((abierto) => !abierto)}
          className="rounded-md p-2 text-white hover:bg-white/10 md:hidden"
          aria-controls="menu-principal"
          aria-expanded={menuAbierto}
          aria-label="Abrir menú de navegación"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {menuAbierto ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>

        <ul
          id="menu-principal"
          className={`${menuAbierto ? 'flex' : 'hidden'} w-full flex-col gap-1 pt-3 md:flex md:w-auto md:flex-row md:items-center md:pt-0`}
        >
          {enlaces.map((enlace) => (
            <li key={enlace.to}>
              <NavLink to={enlace.to} end={enlace.end} className={claseEnlace} onClick={cerrarMenu}>
                {enlace.texto}
              </NavLink>
            </li>
          ))}
          <li className="md:ml-2">
            <Link
              to="/destinos"
              onClick={cerrarMenu}
              className="mt-2 block rounded-md bg-coral px-4 py-2 text-center text-sm font-semibold text-white transition-colors duration-200 hover:bg-coral-oscuro md:mt-0"
            >
              Reservar viaje
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
