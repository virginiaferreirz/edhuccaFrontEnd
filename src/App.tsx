import './App.css'
import React from 'react'
import Footer from './components/Footer'
import Contact from './components/Contact'
import AppRoutes from './Routes'

const App = () => {
  return(
        <>
          <AppRoutes/>
          <Contact/>
          <Footer/>
        </>
  )
}
export default App
