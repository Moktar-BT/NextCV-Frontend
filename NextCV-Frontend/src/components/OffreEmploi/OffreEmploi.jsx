import React, { useState } from 'react';
import styles from './OffreEmploi.module.css';
import personne from '../../assets/personne.png';
import axios from 'axios';
import Modal from 'react-modal';

// Configurer le modal pour se fixer sur l'élément root
Modal.setAppElement('#root');

function OffreEmploi({ offre, onDelete, onUpdate }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [titre, setTitre] = useState(offre.titre);
  const [description, setDescription] = useState(offre.description);

  const nombreCandidatures = offre.candidaturesRecues ? offre.candidaturesRecues.length : 0;

  // Function to format the date to YYYY-MM-DD with leading zeros
  const formatDate = (date) => {
    const dateObject = new Date(date);
    const year = dateObject.getFullYear();
    const month = (dateObject.getMonth() + 1).toString().padStart(2, '0');
    const day = dateObject.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const formattedDate = formatDate(offre.dateCreation);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleDelete = () => {
    axios.delete(`http://localhost:8085/recruteurs/offres/${offre.id}`)
      .then(() => {
        onDelete(offre.id);
      })
      .catch(error => {
        console.error('Error deleting job offer:', error);
      });
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    const updatedOffreEmploi = { ...offre, titre, description };

    axios.put(`http://localhost:8085/recruteurs/offres/${offre.id}`, updatedOffreEmploi)
      .then(response => {
        onUpdate(response.data);
        closeModal();
      })
      .catch(error => {
        console.error('Error updating job offer:', error);
      });
  };

  const handleDescriptionChange = (event) => {
    const { value } = event.target;
    if (value.length <= 150) {
      setDescription(value);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.titre}>{offre.titre}</div>
      <span className={styles.date}>{formattedDate}</span>
      <div className={styles.description}>{offre.description}</div>
      <div className={styles.personne}>{nombreCandidatures}</div>
      <img src={personne} className={styles.personneimg} alt="Personne" />
      <button className={styles.btn1} onClick={handleDelete}>Supprimer</button>
      <button className={styles.btn2} onClick={openModal}>Modifier</button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Modifier Offre d'Emploi"
        className={styles.modal}
        overlayClassName={styles.overlay}
      >
        <h2>Modifier une Offre d'Emploi</h2>
        <form className={styles.formContainer} onSubmit={handleUpdate}>
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
    </div>
  );
}

export default OffreEmploi;
