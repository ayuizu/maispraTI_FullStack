import './App.css'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Navigation from './components/Navigation'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'

// Redirect ou NAVITAGE - redireciona rota (exemplo em TIMER)
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {

  return (
    <>
    <Router> 
      <Navigation />
      <Routes> 
      {/* Se isLoggedIn=false, em vez de ir pro Home vai pro Login. Se =true, vai pro Home */}
        <Route path='/home' element={
            <ProtectedRoute isLoggedIn={false}>
              <Home />
            </ProtectedRoute>
          } /> 
        <Route path='/login' element={<Login />} /> 
        <Route path='/about' element={<About/>} /> 
        <Route path='/contact' element={<Contact />} /> 
        
      </Routes>
    </Router>
    </>
  )
}

export default App
