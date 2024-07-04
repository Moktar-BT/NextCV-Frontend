import React, { useState, useEffect } from 'react';
import NavbarEmployeur from '../NavbarEmployeur/NavbarEmployeur';
import OffreEmploi from '../OffreEmploi/OffreEmploi';
import styles from './Postes.module.css';
import axios from 'axios';
import Modal from 'react-modal';

// Configurer le modal pour se fixer sur l'élément root
Modal.setAppElement('#root');

function Postes() {
  const [offres, setOffres] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [titre, setTitre] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8085/recruteurs/offres')
      .then(response => {
        setOffres(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleDescriptionChange = (event) => {
    const { value } = event.target;
    if (value.length <= 150) {
      setDescription(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newOffreEmploi = { titre, description };
    const recruteurId = '6683bf8e5f0651114060d46a'; 

    axios.post(`http://localhost:8085/recruteurs/${recruteurId}/offre`, newOffreEmploi)
      .then(response => {
        setOffres([...offres, response.data]);
        closeModal();
      })
      .catch(error => {
        console.error('Error creating new job offer:', error);
      });
  };

  const handleDelete = (offreId) => {
    axios.delete(`http://localhost:8085/recruteurs/offres/${offreId}`)
      .then(() => {
        setOffres(offres.filter(offre => offre.id !== offreId));
      })
      .catch(error => {
        console.error('Error deleting job offer:', error);
      });
  };

  const handleUpdate = (updatedOffre) => {
    const updatedOffres = offres.map(offre =>
      offre.id === updatedOffre.id ? updatedOffre : offre
    );
    setOffres(updatedOffres);
    closeModal();
  };

  return (
    <>
      <NavbarEmployeur />
      <div className={styles.container}>
        {offres.map(offre => (
          <OffreEmploi
            key={offre.id}
            offre={offre}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
          />
        ))}
      </div>
      <button className={styles.ajoutOffreEmploi} onClick={openModal}>+</button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Ajout Offre Emploi"
        className={styles.modal}
        overlayClassName={styles.overlay}
      >
        <h2>Ajouter une Offre d'Emploi</h2>
        <form className={styles.formContainer} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="titre">Titre:</label>
            <input
              type="text"
              id="titre"
              name="titre"
              value={titre}
              onChange={(e) => setTitre(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              value={description}
              onChange={handleDescriptionChange}
              maxLength="150"
              required
            ></textarea>
            <div className={styles.charCount}>
              {description.length}/150
            </div>
          </div>
          <div className={styles.formButtons}>
            <button type="submit">Enregistrer</button>
            <button type="button" onClick={closeModal}>Annuler</button>
          </div>
        </form>
      </Modal>
    </>
  );
}

export default Postes;
