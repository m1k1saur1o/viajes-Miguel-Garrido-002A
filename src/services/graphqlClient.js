// Cliente GraphQL mínimo basado en fetch.

const GRAPHQL_URL = '/graphql'

export async function ejecutarConsulta(query, variables = {}, { signal } = {}) {
  const respuesta = await fetch(GRAPHQL_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables }),
    signal,
  })

  if (!respuesta.ok) {
    throw new Error('Error de comunicación con el servicio de reservas.')
  }

  const resultado = await respuesta.json()

  if (resultado.errors?.length) {
    throw new Error(resultado.errors[0].message)
  }

  return resultado.data
}
