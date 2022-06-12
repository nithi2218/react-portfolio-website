import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Copyright from "./Copyright";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";

function App() {
  return (
    
      <>
      <Navbar />
      <div className="pt-10">
        <Routes>
          <Route path="/"  element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />

          
        </Routes>
      </div>
      <Copyright />
      </>
  );
}

export default App;