import "bootstrap/dist/css/bootstrap.css";
// css from components will take precedence over default styles as a result of placing bootstrap first
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

