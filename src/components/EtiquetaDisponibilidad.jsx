function EtiquetaDisponibilidad({ disponible, texto }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${
        disponible ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-700'
      }`}
    >
      {texto ?? (disponible ? 'Disponible' : 'Agotado')}
    </span>
  )
}

export default EtiquetaDisponibilidad
