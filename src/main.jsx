import React from 'react'
import ReactDOM from 'react-dom/client'
<<<<<<< HEAD:src/main.tsx
=======
import App from './App.jsx'
>>>>>>> main:src/main.jsx
import './index.css'
//import { RouterProvider } from 'react-router-dom'
//import { router } from './Router.tsx'
import { App } from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*<RouterProvider router={router} />*/} 
    <App />
  </React.StrictMode>,
)
