import { useState } from 'react'
import './assets/css/app.css'

import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './views/Homepage'
import Contact from './views/ContactUs'
import Header from './components/Header'
import Footer from './components/Footer'


function App() {
  return (
    <BrowserRouter>
 <div className="wrapper">
  <Header/>
  <main>
  <Routes>
    <Route>
      <Route path="/" element={<Homepage />} />
      <Route path="/contact" element={<Contact />} />
    </Route>
  </Routes>
  </main>

  <Footer/>
 </div>
  
    </BrowserRouter>
  )
}

export default App
