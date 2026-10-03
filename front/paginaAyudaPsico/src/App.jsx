import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import MenuNavegacion from './componets/MenuNavegacion.jsx'
import Contacto from './componets/Contacto.jsx'
import Ayuda from './componets/Ayuda.jsx'
import Inicio from './componets/Inicio.jsx'

import Layout from './componets/Layout.jsx'


import './App.css'


import { BrowserRouter, Routes, Route } from 'react-router-dom' // <-- Agrega Routes y Route aquí


function App() {
  const [count, setCount] = useState(0)

  return (
     <BrowserRouter>

            <MenuNavegacion />

            <Routes>

                <Route path="/" element={<Inicio />} />
                <Route path="/inicio" element={<Inicio />} />
                <Route path="/ayuda" element={<Ayuda />} />
                <Route path="/contacto" element={<Contacto />} />

            </Routes>

        </BrowserRouter>



  )
}

export default App
