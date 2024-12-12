import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CajaP from './Componentes/CajaPrincipal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='Menu box'>
        <div className='logo'>

        </div>
        <div className='Selection'>
          <h1>Elige tu figura</h1>

          <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer" />
            <div class="group 
              peer ring-0 bg-gradient-to-tr from-rose-100 via-rose-400 to-rose-500  
              rounded-full outline-none duration-300 after:duration-300 
              w-24 h-12  shadow-md 
              peer-checked:bg-emerald-500  
              peer-focus:outline-none  
              after:content-['❌']  after:rounded-full after:absolute after:bg-gray-50 
              after:outline-none after:h-10 after:w-10 after:top-1 after:left-1 
              after:-rotate-180 after:flex after:justify-center after:items-center 
              peer-checked:after:translate-x-12 peer-checked:after:content-['⭕'] peer-hover:after:scale-95 
              peer-checked:after:rotate-0 peer-checked:bg-gradient-to-tr peer-checked:from-green-100 
              peer-checked:via-lime-400 peer-checked:to-lime-500">
            </div>
          </label>
        </div>
        <div className='botones'>
          <button>Nuevo juego contra maquina</button>
          <button>Nuevo juego contra un jugador</button>
        </div>

      </div>
    </>
  )
}

export default App
