// Botón para seleccionar una opción (vuelo u hotel) de la reserva.
function BotonSeleccion({ disponible, seleccionado, onClick, texto }) {
  if (!disponible) {
    return (
      <button type="button" disabled className="w-full cursor-not-allowed rounded-lg bg-gray-100 px-4 py-2.5 text-sm font-semibold text-gray-400">
        No disponible
      </button>
    )
  }

  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={seleccionado}
      className={`w-full cursor-pointer rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors duration-200 ${
        seleccionado
          ? 'bg-coral text-white hover:bg-coral-oscuro'
          : 'border border-marino text-marino hover:bg-marino hover:text-white'
      }`}
    >
      {seleccionado ? '✓ Seleccionado' : texto}
    </button>
  )
}

export default BotonSeleccion
