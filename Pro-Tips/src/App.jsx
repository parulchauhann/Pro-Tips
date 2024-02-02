import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Contacts from './Components/Contacts'
import Navbar from './Components/Navbar'
import Reg from './Components/Reg'
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contacts" element={<Contacts />} />
          <Route path="/Reg" element={<Reg />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App