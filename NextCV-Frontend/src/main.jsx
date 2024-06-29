import React from 'react';
import ReactDOM from 'react-dom/client'; // Notez l'importation de 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root')); // Utilisez 'createRoot' au lieu de 'ReactDOM.render'

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
