import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import reportWebVitals from './reportWebVitals';

import { MyProvider } from './Component/MyContext';
const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <MyProvider>
      <App />
      </MyProvider>
  </React.StrictMode>

);

reportWebVitals();
