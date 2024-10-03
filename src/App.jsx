// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Education from './components/Education'
import Services from './components/Services'
import Footer from './components/Footer'
import { Contact } from './components/Contact'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
   <>
   <div>
     <Navbar/>
    <Home/>
    <About/>
    <Education/>
    <Services/>
    <Contact/>
    <Footer/>
   </div>
   <Toaster/>
   </>
  )
}

export default App
