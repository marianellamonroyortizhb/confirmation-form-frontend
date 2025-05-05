import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import ConfirmationForm from './pages/ConfirmationForm'
import FinalStep from './pages/FinalStep'
import './i18n'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/ar/confirmacion" element={<ConfirmationForm lang="es" />} />
        <Route path="/co/confirmacion" element={<ConfirmationForm lang="es" />} />
        <Route path="/br/confirmacao" element={<ConfirmationForm lang="pt" />} />
        <Route path="/final-step" element={<FinalStep />} />
      </Routes>
    </BrowserRouter>
  )
}
