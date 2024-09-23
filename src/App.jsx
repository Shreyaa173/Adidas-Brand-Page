import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import ContactUs from './components/ContactUs/ContactUs'

const App = () => {
  return (
    <div>
        <Navbar />
        <Home />
        <ContactUs />
    </div>
  )
}

export default App;


