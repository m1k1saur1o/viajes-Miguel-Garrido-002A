
import { useState } from 'react'
import { REGEX_CORREO } from '../utils/validaciones'

const valoresIniciales = { nombre: '', correo: '', asunto: '', mensaje: '' }
const MAX_MENSAJE = 500

function validarCampo(campo, valor) {
  const texto = valor.trim()

  switch (campo) {
    case 'nombre':
      if (!texto) return 'Ingresa tu nombre completo.'
      if (texto.length < 3) return 'El nombre debe tener al menos 3 caracteres.'
      return ''
    case 'correo':
      if (!texto) return 'Ingresa tu correo electrónico.'
      if (!REGEX_CORREO.test(texto)) return 'Ingresa un correo válido, por ejemplo nombre@correo.cl.'
      return ''
    case 'asunto':
      if (!texto) return 'Indica el asunto de tu mensaje.'
      if (texto.length < 4) return 'El asunto debe tener al menos 4 caracteres.'
      return ''
    case 'mensaje':
      if (!texto) return 'Escribe tu mensaje.'
      if (texto.length < 10) return 'El mensaje debe tener al menos 10 caracteres.'
      if (texto.length > MAX_MENSAJE) return `El mensaje no puede superar los ${MAX_MENSAJE} caracteres.`
      return ''
    default:
      return ''
  }
}

function validarFormulario(valores) {
  return Object.fromEntries(
    Object.keys(valores).map((campo) => [campo, validarCampo(campo, valores[campo])]),
  )
}

function claseCampo(error) {
  return [
    'w-full rounded-lg border bg-white p-3 text-gray-800 placeholder-gray-400 transition focus:outline-none focus:ring-2',
    error
      ? 'border-red-400 focus:border-red-500 focus:ring-red-200'
      : 'border-gray-300 focus:border-oceano focus:ring-oceano/30',
  ].join(' ')
}

function Campo({ id, etiqueta, error, children, ayuda }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-gray-700">
        {etiqueta} <span className="text-coral" aria-hidden="true">*</span>
      </label>
      {children}
      <div className="mt-1 flex justify-between gap-2 text-sm">
        {error ? (
          <p id={`${id}-error`} className="text-red-600">{error}</p>
        ) : (
          <span />
        )}
        {ayuda}
      </div>
    </div>
  )
}

function FormularioContacto() {
  const [valores, setValores] = useState(valoresIniciales)
  const [errores, setErrores] = useState({})
  const [tocados, setTocados] = useState({})
  const [enviando, setEnviando] = useState(false)
  const [enviado, setEnviado] = useState(false)

  function manejarCambio(evento) {
    const { name, value } = evento.target
    setValores((prev) => ({ ...prev, [name]: value }))
    if (tocados[name]) {
      setErrores((prev) => ({ ...prev, [name]: validarCampo(name, value) }))
    }
  }

  function manejarBlur(evento) {
    const { name, value } = evento.target
    setTocados((prev) => ({ ...prev, [name]: true }))
    setErrores((prev) => ({ ...prev, [name]: validarCampo(name, value) }))
  }

  function manejarEnvio(evento) {
    evento.preventDefault()
    const nuevosErrores = validarFormulario(valores)
    setErrores(nuevosErrores)
    setTocados({ nombre: true, correo: true, asunto: true, mensaje: true })

    const primerError = Object.keys(nuevosErrores).find((campo) => nuevosErrores[campo])
    if (primerError) {
      document.getElementById(primerError)?.focus()
      return
    }

    // Envío simulado: no existe un servicio real de correo.
    setEnviando(true)
    setTimeout(() => {
      setEnviando(false)
      setEnviado(true)
    }, 900)
  }

  function reiniciar() {
    setValores(valoresIniciales)
    setErrores({})
    setTocados({})
    setEnviado(false)
  }

  if (enviado) {
    return (
      <div role="status" className="rounded-xl border border-emerald-200 bg-emerald-50 p-8 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-2xl text-white" aria-hidden="true">
          ✓
        </div>
        <h2 className="mt-4 text-2xl font-bold text-emerald-900">¡Mensaje enviado!</h2>
        <p className="mt-2 text-emerald-800">
          Gracias, {valores.nombre.trim().split(' ')[0]}. Te responderemos a <strong>{valores.correo.trim()}</strong> dentro
          de las próximas 24 horas hábiles.
        </p>
        <button
          type="button"
          onClick={reiniciar}
          className="mt-6 cursor-pointer rounded-lg bg-emerald-700 px-5 py-2.5 font-semibold text-white transition-colors hover:bg-emerald-800"
        >
          Enviar otro mensaje
        </button>
      </div>
    )
  }

  const propsCampo = (nombre) => ({
    id: nombre,
    name: nombre,
    value: valores[nombre],
    onChange: manejarCambio,
    onBlur: manejarBlur,
    'aria-invalid': Boolean(errores[nombre]),
    'aria-describedby': errores[nombre] ? `${nombre}-error` : undefined,
    className: claseCampo(errores[nombre]),
  })

  return (
    <form onSubmit={manejarEnvio} noValidate className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <Campo id="nombre" etiqueta="Nombre completo" error={errores.nombre}>
          <input type="text" autoComplete="name" placeholder="Ej.: Camila Rojas" {...propsCampo('nombre')} />
        </Campo>

        <Campo id="correo" etiqueta="Correo electrónico" error={errores.correo}>
          <input type="email" autoComplete="email" placeholder="nombre@correo.cl" {...propsCampo('correo')} />
        </Campo>
      </div>

      <Campo id="asunto" etiqueta="Asunto" error={errores.asunto}>
        <input type="text" placeholder="Ej.: Cotización viaje a Chiloé en febrero" {...propsCampo('asunto')} />
      </Campo>

      <Campo
        id="mensaje"
        etiqueta="Mensaje"
        error={errores.mensaje}
        ayuda={
          <span className={`shrink-0 ${valores.mensaje.length > MAX_MENSAJE ? 'text-red-600' : 'text-gray-400'}`}>
            {valores.mensaje.length}/{MAX_MENSAJE}
          </span>
        }
      >
        <textarea rows={5} placeholder="Cuéntanos fechas, cantidad de pasajeros y qué te gustaría hacer..." {...propsCampo('mensaje')} />
      </Campo>

      <div className="flex flex-col-reverse items-stretch justify-between gap-4 sm:flex-row sm:items-center">
        <p className="text-xs text-gray-500">Los campos marcados con * son obligatorios.</p>
        <button
          type="submit"
          disabled={enviando}
          className="cursor-pointer rounded-lg bg-coral px-8 py-3 font-semibold text-white shadow-sm transition duration-200 hover:bg-coral-oscuro hover:shadow-md focus:outline-none focus:ring-2 focus:ring-coral/40 focus:ring-offset-2 active:scale-[0.98] disabled:cursor-not-allowed disabled:bg-gray-400"
        >
          {enviando ? 'Enviando...' : 'Enviar mensaje'}
        </button>
      </div>
    </form>
  )
}

export default FormularioContacto
