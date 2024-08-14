import './App.css'
import Navigation from './components/Navigation'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import Login from './components/Login'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './components/Authentication'


function App() {

  return (
    <AuthProvider>
      <Router> 
        {/* <Navigation /> */}
        <Routes> 
        {/* Se isLoggedIn=false, em vez de ir pro Home vai pro Login. Se =true, vai pro Home */}
          <Route path='/' element={<Login />} /> 
          <Route path='/login' element={<Login />} /> 
          <Route path='/home' element={<ProtectedRoute isLoggedIn={false}><Home /></ProtectedRoute>} />

          
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App

