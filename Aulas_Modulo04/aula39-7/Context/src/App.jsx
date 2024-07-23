
import './App.css'
//Para renderizar precisamos do provedor e do filho
import MyChildren from './components/Filho'
import { MyProvider } from './components/Contexto'
//Context: cria objetos que podem ser compartilhados entre os componentes (em vez de fazer props drill)

//Toggle
import { useState, createContext, useContext } from 'react'
//const ThemeContext = createContext({})
//Definindo valores padrões: um objeto com 1 atributo e 1 função
const ThemeContext = createContext({ theme:'light', toggleTheme: ()=>{}})

function App() {

  const [theme, setTheme] = useState('light')
  
  const toggleTheme = () =>{
    setTheme(currentTheme => currentTheme === 'light' ? 'dark' : 'light')
  }

  return (
    <>
    {/* Envolvendo MyChildren e renderizando*/}
      {/* <MyProvider>
       <MyChildren />
      </MyProvider> */}
      <ThemeContext.Provider value ={{ theme, toggleTheme }}>
        <div>
          <Toolbar />
          <button onClick={toggleTheme}>Trocar tema</button>
        </div>
      </ThemeContext.Provider>
    </>
  )
}

function Toolbar(){
  const { theme } = useContext(ThemeContext)

  return(
    <div style={{background: theme === 'dark' ? 'grey' : 'whitesmoke', color: theme==='dark' ? 'white' : 'black'}}>
      Tema utilizado - {theme}
    </div>
  )
}

export default App
