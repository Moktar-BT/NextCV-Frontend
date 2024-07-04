import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Login.module.css';
import logo from '../../assets/logo.png';

function Login() {
  return (
    <>
      <div className={styles.nav}>
        <img src={logo} className={styles.logo} alt="Logo" />
      </div>
      <div className={styles.container}>
        <form className={styles.form}>
          <div className={styles.form_group}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
              title="Entrez un email valide au format exemple@exemple.exemple"
              required
            />
          </div>
          <div className={styles.form_group}>
            <label htmlFor="password">Mot de passe:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div className={styles.form_group}>
            <input type="submit" value="Se connecter" />
          </div>
          <div className={styles.signup_link}>
            <p>Vous n'avez pas de compte ? <Link to="/s'inscrire">Inscrivez-vous ici</Link></p>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
