import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Signup.module.css';
import logo from '../../assets/logo.png';

function Signup() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulaire soumis avec :', { nom, prenom, email, password, cv });
    // Implémentez la logique pour envoyer les données au backend
  };

  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cv, setCV] = useState(null); // ou état initial approprié pour le CV

  return (
    <>
      <div className={styles.nav}>
        <img src={logo} className={styles.logo} alt="Logo" />
      </div>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.form_group}>
            <input
              type="text"
              placeholder="Nom"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              required
            />
          </div>
          <div className={styles.form_group}>
            <input
              type="text"
              placeholder="Prénom"
              value={prenom}
              onChange={(e) => setPrenom(e.target.value)}
              required
            />
          </div>
          <div className={styles.form_group}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={styles.form_group}>
            <input
              type="password"
              placeholder="Mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className={styles.form_group}>
            <input
              type="file"
              accept=".pdf"
              onChange={(e) => setCV(e.target.files[0])}
              required
            />
          </div>
          <div className={styles.form_group}>
            <input type="submit" value="S'inscrire" className={styles.submit_button} />
          </div>
          <div className={styles.signup_link}>
            <p>Vous avez déjà un compte ? <Link to="/se_connecter">Connectez-vous ici</Link></p>
          </div>
        </form>
      </div>
    </>
  );
}

export default Signup;
