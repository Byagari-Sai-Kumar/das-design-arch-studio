import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './components/navigationBar/navbar'
import ScrollToSection from './components/navigationBar/scrollToSection'
import ContactUs from "./components/contactUs/contactUs";
import ConsultationPage from "./pages/consultation/ConsultationPage";
import InteriorsPage from "./pages/interiors/InteriorsPage";
import ProjectDetailPage from "./pages/interiors/ProjectDetailPage";
import './App.css'

function App() {
  return(
    <BrowserRouter>
  <Navbar />
  <Routes>
    <Route path="/*" element={<ScrollToSection />} />
    <Route path="/contact-us" element={<ContactUs />} />
    <Route path="/consultation" element={<ConsultationPage />} />
    <Route path="/our-works/interiors" element={<InteriorsPage />} />
    <Route path="/our-works/interiors/:slug" element={<ProjectDetailPage />} />
  </Routes>
    </BrowserRouter>

  )
}

export default App;