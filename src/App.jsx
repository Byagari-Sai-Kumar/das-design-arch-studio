import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './components/navigationBar/navbar'
import ScrollToSection from './components/navigationBar/scrollToSection'
import './App.css'

function App() {
  return(
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/*' element={<ScrollToSection/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App