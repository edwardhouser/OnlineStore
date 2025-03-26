import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Catalog from './pages/Catalog'
import About from './pages/about'
import Admin from './pages/admin'


// load bootstrap and icons
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";

import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Cart from './pages/Cart'


function App() {


  return (
    <BrowserRouter> {/* this is called a wrapper */}
      <Navbar></Navbar>
      <Routes> {/* routes shows only the selected component, and hides everything else */}
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/catalog' element={<Catalog></Catalog>} />
        <Route path='/about' element={<About></About>} />
        <Route path='/admin' element={<Admin></Admin>} />
        <Route path='/cart' element={<Cart />} />
        
      </Routes>
      
      
      
      <Footer></Footer>
    </BrowserRouter>
  )
}

export default App;
