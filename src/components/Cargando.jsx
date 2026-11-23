function Cargando({ texto = 'Cargando...' }) {
  return (
    <div role="status" className="flex flex-col items-center justify-center gap-3 py-12 text-gray-500">
      <div className="spinner" aria-hidden="true"></div>
      <p className="text-sm font-medium">{texto}</p>
    </div>
  )
}

export default Cargando
