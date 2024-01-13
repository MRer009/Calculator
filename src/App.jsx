import { useState } from 'react'

import './App.css'
import Calc from "./Componants/Calc"

function App() {
  const [count, setCount] = useState(0)

  return (
    <Calc/>
  )
}

export default App
