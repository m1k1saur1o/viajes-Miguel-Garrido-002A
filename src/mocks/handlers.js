import { restHandlers } from './handlers/rest'
import { graphqlHandlers } from './handlers/graphql'

export const handlers = [...restHandlers, ...graphqlHandlers]
