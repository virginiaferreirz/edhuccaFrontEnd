import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
//import { RouterProvider } from 'react-router-dom'
//import { router } from './Router.tsx'
const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error('Elemento com ID "root" não encontrado.');
}
