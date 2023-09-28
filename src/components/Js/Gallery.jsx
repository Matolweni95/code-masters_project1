import React from 'react';
import '../css/Gallery.css'


const imagePaths = [

  '../images/IMG_1.JPG',
  '../images/IMG_2.JPG',
  '../images/IMG_3.JPG',
  '../images/IMG_4.JPG',
  '../images/IMG_5.JPG',
  '../images/IMG_6.JPG',
  '../images/IMG_7.JPG',
  '../images/IMG_8.JPG',
  '../images/IMG_8375.JPG'

];

const Gallery = () => {
  return (
    <div className='gallery'>
      <div className='gallery-container'>
        <div className='gallery-heading d-flex align-items-center justify-content-center flex-column'>
          <h1 className='gallery-header'>Gallery</h1>
          <div className='gallery-line'></div>
        </div>

        <div className="image-container  d-flex justify-content-center flex-wrap">
        {imagePaths.map((imagePath, index) => (
          <div className='image-cont col-lg-3' key={index}>
            <img className='gallery-image' src={imagePath} alt={`Image ${index}`} />
          </div>
        ))}
      </div>
      </div>
    </div>
  )
}

export default Gallery