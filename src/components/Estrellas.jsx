function Estrellas({ cantidad, maximo = 5 }) {
  return (
    <span className="inline-flex items-center gap-0.5" aria-label={`${cantidad} de ${maximo} estrellas`}>
      {Array.from({ length: maximo }, (_, i) => (
        <span key={i} aria-hidden="true" className={i < cantidad ? 'text-amber-500' : 'text-gray-300'}>
          ★
        </span>
      ))}
    </span>
  )
}

export default Estrellas
