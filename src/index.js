import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthContextProvider } from './context/authContext';
import { Toaster } from 'react-hot-toast';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <Toaster position='top-center' reverseOrder={false} />
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);
