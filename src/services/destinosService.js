// Servicio para consumir la API REST de destinos (simulada con MSW).

const API_URL = '/api/destinations'

export async function obtenerDestinos({ signal } = {}) {
  const respuesta = await fetch(API_URL, { signal })

  if (!respuesta.ok) {
    throw new Error('No se pudieron cargar los destinos.')
  }

  return respuesta.json()
}

export async function obtenerDestinoPorId(id, { signal } = {}) {
  const respuesta = await fetch(`${API_URL}/${encodeURIComponent(id)}`, { signal })

  if (respuesta.status === 404) {
    return null
  }

  if (!respuesta.ok) {
    throw new Error('No se pudo cargar la información del destino.')
  }

  return respuesta.json()
}
