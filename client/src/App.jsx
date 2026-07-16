import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>AskDocs AI</h1>
      
      <p>Welcome to AskDocs AI! This is a simple React app that connects to the AskDocs AI backend.</p>
      
    </>
  )
}

export default App
