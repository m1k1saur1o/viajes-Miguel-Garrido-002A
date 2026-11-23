import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import AppRoutes from './routes/AppRoutes'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <div className="flex-1">
        <AppRoutes />
      </div>
      <Footer />
    </Router>
  )
}

export default App
