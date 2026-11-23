import { useEffect, useState } from 'react'

// Hook genérico para ejecutar una petición asíncrona y manejar
// los estados de carga, error y datos. `funcion` recibe { signal }.
// El resultado se asocia a una "clave" derivada de las dependencias:
// si las dependencias cambian, el estado vuelve a "cargando" automáticamente.
// `recargar()` vuelve a ejecutar la petición (por ejemplo, tras una reserva).
export function useConsulta(funcion, dependencias) {
  const [version, setVersion] = useState(0)
  const clave = JSON.stringify([...dependencias, version])
  const [resultado, setResultado] = useState({ clave: null, datos: null, error: null })

  useEffect(() => {
    const controlador = new AbortController()

    funcion({ signal: controlador.signal })
      .then((datos) => {
        if (!controlador.signal.aborted) setResultado({ clave, datos, error: null })
      })
      .catch((error) => {
        if (!controlador.signal.aborted) setResultado({ clave, datos: null, error: error.message })
      })

    return () => controlador.abort()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clave])

  const vigente = resultado.clave === clave
  return {
    datos: vigente ? resultado.datos : null,
    error: vigente ? resultado.error : null,
    cargando: !vigente,
    recargar: () => setVersion((v) => v + 1),
  }
}
