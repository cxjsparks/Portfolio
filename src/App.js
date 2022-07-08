import React from "react"
import './App.css';
import { Link, Routes, Route } from "react-router-dom"
import { useState, useEffect } from 'react'
import Navbar from "./Components/Navbar"
import About from "./Components/About"
import Home from "./Components/Home"


function App() {
  return (
    <div className="App">

      <Navbar />
        <Routes>
          <Route path="/about" element={ <About />} />
          <Route path="/home" element={ <Home />} />
        </Routes>
    
    
    </div>
  )
}


export default App;
