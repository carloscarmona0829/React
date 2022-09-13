import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //cuando activo el StrictMode la aplicación se renderiza 2 veces y los msj de la consola salen dobles por eso los comenté y mas bien metí el App dentro de un fragmento.
  //<React.StrictMode>
  <>
  <App />
  </>    
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
