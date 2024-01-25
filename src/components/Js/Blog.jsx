import React, { useEffect, useState, useRef } from 'react';
import db from "../Config/Firebase-config";
import '../css/Blog.css';
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import axios from 'axios';
import placeholder from '../images/IMG_8206.JPG';
import { useNavigate } from 'react-router-dom';

const Blog = () => {

  const [stories, setStories] = useState([]);
  const containerRef = useRef(null);
  

  const fetchStories = async () => {


    const result =await axios.get("http://localhost:8080/api/v1/posts/posts");
    setStories(result.data);
    console.log(result.data);
   


};
useEffect(() => {

  fetchStories();
}, []);

  
  const navigate = useNavigate();

  const currentStories = stories.slice(0, 3);
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

          <div className='card-section__conatiner d-flex justify-center gap-[100px] flex-wrap'>
          {currentStories.map((story) => (
            <div key={story.id} className='cards'>
            
             
                <img className='card-image' src={story.picture}/><div className='card-text d-flex flex-column align-items-center'>
                <p className='cards-header'>
                {story.title}
                </p>
                <div className='card-line'></div>
                <p className='card-desc p-2'>
                {story.body}
                </p>
                <button className='card-btn' onClick={()=>navigate('/blog')}>READ MORE</button>
              </div>
              
            </div>
  ))}
          
          </div>
          <button className='more' onClick={()=>navigate('/blog')}>READ MORE</button>
        </div>
      </div>
    </section>
  )
}

export default Blog