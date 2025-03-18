import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Catalog from './pages/Catalog'
import Product from './components/product'


//loads bootstrap and icons

// load bootstrap and icons
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {


  return (
    <>
      <Navbar></Navbar>
      <Catalog></Catalog>
      <Footer></Footer>
    </>
  )
}

export default App;
