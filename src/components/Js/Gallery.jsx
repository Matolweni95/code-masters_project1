import React, { useEffect, useState } from 'react';
import '../css/Gallery.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { storage } from '../Config/Firebase-config';
import { db } from '../Config/Firebase-config';


// const imagePaths = [

//   '../images/IMG_1.JPG',
//   '../images/IMG_2.JPG',
//   '../images/IMG_3.JPG',
//   '../images/IMG_4.JPG',
//   '../images/IMG_5.JPG',
//   '../images/IMG_6.JPG',
//   '../images/IMG_7.JPG',
//   '../images/IMG_8.JPG',
//   '../images/IMG_8375.JPG'

// ];

const Gallerys = () => {

  const [gallery, setGallery] = useState(null);

    useEffect(() => {
      axios
        .get('http://localhost:8080/api/v1/gallery/all')
        .then((response) => {
          console.log('Fetched gallery:', response.data);
          setGallery(response.data);
        })
        .catch((error) => {
          console.error('Error fetching gallery data:', error);
        });
    }, []);

const navigate = useNavigate();
  return (
    <section className='gallery' id='gallery'>
      <div className='gallery-container'>
        <div className='gallery-heading d-flex align-items-center justify-content-center flex-column'>
          <h1 className='gallery-header'>Gallery</h1>
          <div className='gallery-line'></div>
        </div>

        <div className="image-container  d-flex justify-content-center flex-wrap">
  {gallery ? (
    gallery.map((galleries, index) => (
      <div className='image-cont col-lg-3' key={index}>
        <img className='gallery-image' src={galleries.imageUrl} alt={`Image ${index}`} />
      </div>
    ))
  ) : (
    <p>Loading...</p>
  )}
</div>
<button onClick={() => navigate('/gallery')} className='gallery-btn mt-4'>Show More</button>
</div>
    </section>
  )
}

export default Gallerys