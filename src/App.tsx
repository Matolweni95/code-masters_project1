import React from 'react';
import Footer from './components/Js/Footer';
import './App.css'
import Landing from './pages/Landing';
import Aboutupdate from './components/Js/AboutUpdate';
import About from './components/Js/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BlogCards from './components/Js/BlogCards';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Aboutupdate />} />
        <Route path="/about" element={<About />} />
      </Routes>
  </BrowserRouter>
  );
  
}

export default App;
