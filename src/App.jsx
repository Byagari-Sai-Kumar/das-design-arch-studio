import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './components/navigationBar/navbar'
import ScrollToSection from './components/navigationBar/scrollToSection'
import ContactUs from "./components/contactUs/contactUs";
import './App.css'

function App() {
  return(
    <BrowserRouter>
      <Navbar/>
      <Routes>
  <Route path="/*" element={<ScrollToSection />} />
  <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App