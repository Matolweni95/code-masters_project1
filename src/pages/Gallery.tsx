import React from 'react'
import Banner from '../components/Js/Banner';
import Navi from '../components/Js/Nav';
import '../components/css/GalleryPage.css';
import card from '../components/images/imageOne.png';


const Gallery = () => {
  return (
    <>
    <div className='memories'>
      <div className='gallerypage-container'>
        <Banner />
        <Navi />
        <div className='d-flex align-items-center justify-content-center'>
          <h1 className='memory-header'>Our Memories</h1>
        </div>
      </div>

      <section className = ''>
        <h1 className='photo mt-5'>Photo Gallery</h1>
        <div className='gallery-card col-lg-3'>
          <img className='card-image' src={card}/>
          <div className='gallery-card_content'>
             <h3>Description</h3>
          </div>
        </div>
      </section>
    </div>
    </>
   
  )
}

export default Gallery