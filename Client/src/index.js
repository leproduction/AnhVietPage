import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import reportWebVitals from './reportWebVitals';
<<<<<<< HEAD

import { MyProvider } from './Component/MyContext';
=======
import { BrowserRouter } from 'react-router-dom';

>>>>>>> origin/main
const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <React.StrictMode>
<<<<<<< HEAD
    <MyProvider>
      <App />
      </MyProvider>
=======
      <App />

>>>>>>> origin/main
  </React.StrictMode>

);

reportWebVitals();
