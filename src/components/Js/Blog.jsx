import React from 'react';
import '../css/Blog.css';
import placeholder from '../images/IMG_8206.JPG';
import { useNavigate } from 'react-router-dom';

const Blog = () => {
  
  const navigate = useNavigate();

  return (
    <section className='blog' id='blog'>
      <div className='blog-container d-flex flex-column'>
        <div className='blog-heading d-flex justify-content-center flex-column align-items-center'>
          <h1 className='blog-header'>Blog</h1>
          <div className='blog-line'></div>
        </div>

        <div className='blog-desc d-flex justify-content-center'>
          <p className='blog-summary'>
          Lorem ipsum dolor sit amet consectetur. Lorem donec interdum elit sit porttitor et consequat. 
          Urna ullamcorper suspendisse auctor lorem diam quis. Adipiscing donec ultrices at et non sed.  
          </p>
        </div>

        <div className='card-section'>
          <div className='card-section__conatiner d-flex justify-content-around flex-wrap'>

            <div className='cards'>
              <img className='card-image' src={placeholder}/>
              <div className='card-text d-flex flex-column align-items-center'>
                <p className='cards-header'>
                How I retain and remember what I study
                </p>
                <div className='card-line'></div>
                <p className='card-desc'>
                Lorem ipsum dolor sit amet consectetur. Tincidunt sit et urna sit malesuada.Lorem 
                ipsum dolor sit amet consectetur. Tincidunt sit et urna sit malesuada.
                </p>
                <button className='card-btn'>READ MORE</button>
              </div>
            </div>

            <div className='cards'>
              <img className='card-image' src={placeholder}/>
              <div className='card-text d-flex flex-column align-items-center'>
                <p className='cards-header'>
                How I retain and remember what I study
                </p>
                <div className='card-line'></div>
                <p className='card-desc'>
                Lorem ipsum dolor sit amet consectetur. Tincidunt sit et urna sit malesuada.Lorem 
                ipsum dolor sit amet consectetur. Tincidunt sit et urna sit malesuada.
                </p>
                <button className='card-btn'>READ MORE</button>
              </div>
            </div>

            <div className='cards'>
              <img className='card-image' src={placeholder}/>
              <div className='card-text d-flex flex-column align-items-center'>
                <p className='cards-header'>
                How I retain and remember what I study
                </p>
                <div className='card-line'></div>
                <p className='card-desc'>
                Lorem ipsum dolor sit amet consectetur. Tincidunt sit et urna sit malesuada.Lorem 
                ipsum dolor sit amet consectetur. Tincidunt sit et urna sit malesuada.
                </p>
                <button className='card-btn'>READ MORE</button>
              </div>
            </div>
          </div>
          <button className='more' onClick={()=>navigate('/blog')}>READ MORE</button>
        </div>
      </div>
    </section>
  )
}

export default Blog