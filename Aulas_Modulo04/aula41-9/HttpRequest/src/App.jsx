import './App.css'
import DeleteBook from './components/DeleteBook'


import GetBook from './components/GetBook'
import PutBook from './components/PutBook'
import Forms from './components/Forms'

function App() {

  return (
    <>
    <Forms />
    <hr />
    <GetBook />
    <hr />
    <PutBook />
    <hr />
    <DeleteBook />
    <hr />

    </>
  )
}

export default App
