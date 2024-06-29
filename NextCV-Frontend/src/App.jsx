import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Employeur_home_page from './components/Employeur_home_page/Employeur_home_page'
import Postes from './components/Postes/Postes'


function App() {
 

  return (
    <>
      <Routes>
        <Route path="/employeur_home_page" element={<Employeur_home_page />} />
        <Route path="/postes" element={<Postes />}/>
      </Routes>
    </>
  )
}

export default App
