import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // <<— esto es clave
import App from './App';
import './utils/i18n'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
