
import Navbar from './components/Navbar1'
import './App.css'
import { Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  

  return (
    <>
    
      <Navbar/>
      
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      
    </>
  )
}

export default App
