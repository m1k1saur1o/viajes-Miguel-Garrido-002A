// Mensaje reutilizable para errores y resultados vacíos.
const estilos = {
  error: 'border-red-200 bg-red-50 text-red-800',
  vacio: 'border-gray-200 bg-gray-50 text-gray-600',
}

function MensajeEstado({ tipo = 'vacio', titulo, children }) {
  return (
    <div role={tipo === 'error' ? 'alert' : 'status'} className={`rounded-xl border p-6 text-center ${estilos[tipo]}`}>
      {titulo && <p className="font-semibold">{titulo}</p>}
      {children && <div className="mt-1 text-sm">{children}</div>}
    </div>
  )
}

export default MensajeEstado
