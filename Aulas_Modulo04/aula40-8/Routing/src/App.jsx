import './App.css'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Clock from './components/Clock'
import Timer from './components/Timer'


import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Navigation from './components/Navigation'

function App() {

  return (
    <>
    <Router> {/* Router envolve toda aplicação e vai habilitar roteamento*/}
      <Navigation />
      <Routes> {/* Routes ou Switch garante que uma rota vai ser renderizada por vez */}
        {/* Route define um componente específico a ser renderizado e o path especídico */}
        <Route path='/' Component={Home} /> 
        <Route path='/about' Component={About} /> 
        <Route path='/contact' element={<Navigate to="/"/>} /> 
        {/* REDIRECT/NAVIGATE - Pq usar element? O Component era mais usado na v5. RouterDOM v6 substituiu por element */}
                {/* Pq usar element? O Component era mais usado na v5. RouterDOM v6 substituiu por element */}
        <Route path='/clock' Component={Clock} /> 
        <Route path='/timer' element={<Navigate to="/"/>} />
          
      </Routes>
    </Router>
    </>
  )
}

export default App
