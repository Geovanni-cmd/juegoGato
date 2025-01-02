import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CajaP from './Componentes/CajaPrincipal'
import Tabla from './Componentes/Tabla'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p className='titulo'>Juego del Gato</p>
      <div className='tabla'>
        <Tabla></Tabla>
      </div>
    </>
  )
}

export default App
