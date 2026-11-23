function TituloSeccion({ etiqueta, titulo, descripcion, centrado = false }) {
  return (
    <div className={`mb-8 ${centrado ? 'mx-auto max-w-2xl text-center' : ''}`}>
      {etiqueta && (
        <p className="text-sm font-bold uppercase tracking-widest text-coral">{etiqueta}</p>
      )}
      <h2 className="mt-1 text-3xl font-bold text-marino sm:text-4xl">{titulo}</h2>
      {descripcion && <p className="mt-3 text-gray-600">{descripcion}</p>}
    </div>
  )
}

export default TituloSeccion
