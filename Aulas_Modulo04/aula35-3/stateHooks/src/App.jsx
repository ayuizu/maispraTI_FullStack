import { useState } from 'react'
import './App.css'
import NavTabs from './components/NavTabs'
import OutrosTabs from './components/OutrosTabs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavTabs />
    <OutrosTabs />
    </>
  )
}

export default App
