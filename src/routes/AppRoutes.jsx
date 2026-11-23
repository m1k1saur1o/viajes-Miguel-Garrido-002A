import { Routes, Route } from 'react-router-dom'
import Inicio from '../components/pages/Inicio'
import Destinos from '../components/pages/Destinos'
import Destino from '../components/pages/Destino'
import Contacto from '../components/pages/Contacto'
import NoEncontrado from '../components/pages/NoEncontrado'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/destinos" element={<Destinos />} />
      <Route path="/destinos/:id" element={<Destino />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="*" element={<NoEncontrado />} />
    </Routes>
  )
}

export default AppRoutes
