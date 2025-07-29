import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CrealysisApp from './components/CrealysisApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CrealysisApp />
    </>
  )
}

export default App
