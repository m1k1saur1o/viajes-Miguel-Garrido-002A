import { Link } from 'react-router-dom'

function NoEncontrado() {
  return (
    <main className="flex min-h-[60vh] items-center justify-center bg-arena px-4 py-16">
      <div className="text-center">
        <p className="text-7xl font-extrabold text-coral">404</p>
        <h1 className="mt-4 text-3xl font-bold text-marino">Página no encontrada</h1>
        <p className="mt-3 text-gray-600">Parece que este camino no lleva a ningún destino.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/" className="rounded-lg bg-marino px-5 py-2.5 font-semibold text-white transition-colors hover:bg-oceano">
            Ir al inicio
          </Link>
          <Link to="/destinos" className="rounded-lg border border-marino px-5 py-2.5 font-semibold text-marino transition-colors hover:bg-marino hover:text-white">
            Ver destinos
          </Link>
        </div>
      </div>
    </main>
  )
}

export default NoEncontrado
