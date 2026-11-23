import { HttpResponse, delay } from 'msw'
import { graphql as mswGraphql } from 'msw/graphql'
import { graphql } from 'graphql'
import { schema, rootValue } from '../schema'

const apiGraphQL = mswGraphql.link('/graphql')

// Ejecuta la operación recibida contra el esquema real, respetando
// los campos solicitados y las variables enviadas por el cliente.
async function ejecutarOperacion({ query, variables, operationName }) {
  await delay(600)
  const resultado = await graphql({
    schema,
    source: query,
    rootValue,
    variableValues: variables,
    operationName,
  })
  return HttpResponse.json(resultado)
}

export const graphqlHandlers = [
  apiGraphQL.query('ObtenerVuelos', ejecutarOperacion),
  apiGraphQL.query('ObtenerHoteles', ejecutarOperacion),
  apiGraphQL.query('ObtenerReserva', ejecutarOperacion),
  apiGraphQL.mutation('CrearReserva', ejecutarOperacion),
]
