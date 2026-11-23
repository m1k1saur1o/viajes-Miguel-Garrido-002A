import { http, HttpResponse, delay } from 'msw'
import { destinos } from '../data/destinos'

// API REST simulada de destinos turísticos
export const restHandlers = [
  http.get('/api/destinations', async () => {
    await delay(700)
    return HttpResponse.json(destinos)
  }),

  http.get('/api/destinations/:id', async ({ params }) => {
    await delay(400)
    const destino = destinos.find((d) => d.id === params.id)

    if (!destino) {
      return HttpResponse.json({ message: 'Destino no encontrado' }, { status: 404 })
    }

    return HttpResponse.json(destino)
  }),
]
