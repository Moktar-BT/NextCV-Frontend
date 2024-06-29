import React from 'react'
import styles from '../NavbarEmployeur/NavbarEmployeur.module.css'
import logo from '../../assets/logo.png'
import { Link, useLocation } from 'react-router-dom' 

function NavbarEmployeur() {
    const location = useLocation();
  return (
    <div className={styles.container} >
        <img src={logo} className={styles.logo} />
        <Link to="/employeur_home_page" className={`${styles.accueil} ${location.pathname === '/employeur_home_page' ? styles.active : ''}`}>Accueil</Link>
      <Link to="/postes" className={`${styles.paccueil} ${location.pathname === '/postes' ? styles.active : ''}`}>Postes</Link>
        <div className={styles.paccueil}>Candidats</div>
        <div className={styles.paccueil}>Entretiens</div>
        
    </div>
  )
}

export default NavbarEmployeur