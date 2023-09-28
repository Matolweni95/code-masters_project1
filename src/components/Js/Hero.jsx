import React from 'react'
import Topnav from './Topnav';
import Navi from './Nav';
import '../css/Hero.css';

const Hero = () => {
  return (
    <>
    <section className='hero'>
      <div className='hero-container'>
      <Topnav />
      <Navi />
      <div className='hero-content d-flex justify-content-center align-items-center'>
        <div className='hero-content__text d-flex flex-column justify-content-center align-items-center'>
        <h1 className='hero-heading col-sm-12 col-md-6 col-lg-7'>WELCOME TO SEBITJA SECONDARY SCHOOL</h1>
        <p className='hero-subheading'>
          Lorem ipsum dolor sit amet consectetur. Lectus scelerisque neque turpis vitae turpis sodales sed lectus.
        </p>
        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="130" viewBox="0 0 23 130" fill="none">
          <path d="M10.4393 129.061C11.0251 129.646 11.9749 129.646 12.5607 129.061L22.1066 119.515C22.6924 118.929 22.6924 117.979 22.1066 117.393C21.5208 116.808 20.5711 116.808 19.9853 117.393L11.5 125.879L3.01472 117.393C2.42894 116.808 1.47919 116.808 0.893403 117.393C0.307617 117.979 0.307617 118.929 0.893404 119.515L10.4393 129.061ZM10 6.55671e-08L10 128L13 128L13 -6.55671e-08L10 6.55671e-08Z" fill="#F5F5F5"/>
        </svg>
        </div>
      </div>
      </div>
    </section>
    </>
  )
}

export default Hero