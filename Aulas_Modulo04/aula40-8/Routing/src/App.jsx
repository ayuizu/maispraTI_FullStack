import './App.css'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Clock from './components/Clock'
import Timer from './components/Timer'


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
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
        <Route path='/contact' Component={Contact} /> 
        <Route path='/clock' Component={Clock} /> 
        <Route path='/timer' Component={Timer} /> 
          
      </Routes>
    </Router>
    </>
  )
}

export default App
