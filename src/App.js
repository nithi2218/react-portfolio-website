import React from "react"
import Home from "./pages/Home"
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Navbar from "./components/Navbar";


function App() {
  return (
  <>
  <Navbar />
<div>
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/skills' element={<Skills />} />
    <Route path='/contact' element={<Contact />} />
    
  </Routes>
  </div>
  </>
  )
}

export default App;
