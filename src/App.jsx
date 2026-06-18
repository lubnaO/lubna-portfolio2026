import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import Navbar from './components/sections/Navbar'
import Hero from './components/sections/Hero'
import Skills from './components/sections/Skills'
import Portfolio from './components/sections/Portfolio'
import Contact from './components/sections/Contact'
import Footer from './components/sections/Footer'
import "./styles.css"
function App() {

  return (
  <>
      <Navbar />
      <Hero />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  )
}

export default App
