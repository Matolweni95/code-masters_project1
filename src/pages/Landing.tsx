import React from 'react';
import Hero from '../components/Js/Hero';
import About from '../components/Js/About';
import Blog from '../components/Js/Blog';
import Gallery from '../components/Js/Gallery';
import Aps from '../components/Js/Aps';
import Footer from '../components/Js/Footer';

const Landing = () => {
  return (
    <>
      <div className='landing'>
        <Hero />
        <About />
        <Blog />
        <Gallery />
        <Aps />
        <Footer /> 
      </div>
    </>
  )
}

export default Landing