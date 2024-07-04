import './App.css'
import { Routes,Route } from 'react-router-dom'
import Employeur_home_page from './components/Employeur_home_page/Employeur_home_page'
import Postes from './components/Postes/Postes'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'


function App() {
  return (
    <>
      <Routes>
        <Route path="/employeur_home_page" element={<Employeur_home_page />} />
        <Route path="/postes" element={<Postes />}/>
        <Route path="/se_connecter" element={<Login />}/>
        <Route path="/s'inscrire" element={<Signup />}/>
      </Routes>
    </>
  )
}

export default App
