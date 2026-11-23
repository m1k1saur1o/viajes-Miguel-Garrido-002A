const formatoMoneda = new Intl.NumberFormat('es-CL', {
  style: 'currency',
  currency: 'CLP',
  maximumFractionDigits: 0,
})

const formatoFecha = new Intl.DateTimeFormat('es-CL', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
  timeZone: 'UTC',
})

export function formatearPrecio(valor) {
  return formatoMoneda.format(valor)
}

export function formatearFecha(fechaIso) {
  return formatoFecha.format(new Date(`${fechaIso}T00:00:00Z`))
}
