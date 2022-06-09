import React from "react"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";

function App() {
  return (
    <>
   <Navbar />
   
    <Routes>
    <Route path='/home' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/skills' element={<Skills />} />
    <Route path='/contact' element={<Contact />} />
    
    </Routes>
   </>
  )
}

export default App;
