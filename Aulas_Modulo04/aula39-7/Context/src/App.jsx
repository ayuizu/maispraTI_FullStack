
import './App.css'
//Para renderizar precisamos do provedor e do filho
import MyChildren from './components/Filho'
import { MyProvider } from './components/Contexto'
//Context: cria objetos que podem ser compartilhados entre os componentes (em vez de fazer props drill)

function App() {

  return (
    <>
    {/* Envolvendo MyChildren e renderizando*/}
      <MyProvider>
       <MyChildren />
      </MyProvider>
    </>
  )
}

export default App
