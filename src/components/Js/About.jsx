import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import '../css/About.css';
import vision from '../images/no-image.png';



const About = () => {

  const [values, setValues] = useState({})
  const [value, setValue]= useState(true)
  const [blankImg, setBlankImg] = useState(vision)
  const [image, setImage]= useState(true)
  const [images, setImages] = useState(true)
  const [imageData, setImageData] = useState([]);
  const [visionImg,setVisionImg] = useState()
  const [missionImg,setMissionImg] = useState()
  
  useEffect(() => {
    fetch()
    console.log('Fetching data...');
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/about/getImage');
  
        if (!response) {
          throw new Error('No response received from the server');
        }
  
      
        const data = response.data;
        setImageData(data);
        

        const firstMissionImg = data.find(item => item.category === 'mission');
        const firstVisionImg = data.find(item => item.category === 'vision');
  
        if (firstMissionImg) {
          setMissionImg(firstMissionImg);
          setImages(false)
        }
  
        if (firstVisionImg) {
          setVisionImg(firstVisionImg);
          setImage(false)
          console.log(visionImg)
          console.log(imageData)
        }
  
        console.log('Data fetched:', data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };
  
    fetchData();
    console.log('Fetch request initiated...');
  }, []);
  
  useEffect(() => {
   
    if ((missionImg === null || visionImg === null) && imageData.length > 0) {
      
      const firstMissionImg = imageData.find(item => item.category === 'mission');
      const firstVisionImg = imageData.find(item => item.category === 'vision');
  
      if (firstMissionImg) {
        setMissionImg(firstMissionImg);
        
      }
  
      if (firstVisionImg) {
        setVisionImg(firstVisionImg);
        
        console.log("hgdhf" + visionImg)
      }
    }
  }, [imageData, missionImg, visionImg]);
   
     const fetch= async () =>{ 
      const data = await axios.get(`http://localhost:8080/api/v1/about/getAbout`)
      console.log(data)
   if(data.data && data.data.length > 0){
      setValues(data.data[0])
      setValue(false)
   }
    }

  return (
    
    <section className='about' id='about'>


      <div className='about-container d-flex flex-column'>
        <div className='about-heading d-flex flex-column align-items-center justify-content-center'>
          <h1 className='about-header'>About</h1>
          <div className='about-line'></div>
        </div>

        <div className='about-desc d-flex justify-content-center'>
          
          {value? <p className='about-summary'>
         Lorem ipsum dolor sit amet consectetur. Sodales vestibulum integer nisl sodales id. Tellus est sit quis at suspendisse in massa egestas. Blandit aliquam sit rhoncus vitae est est justo pellentesque. Duis enim tincidunt proin urna gravida quam commodo malesuada rutrum. Est a nibh ut ac est pellentesque. Molestie tellus lobortis tortor ultricies in dignissim pellentesque proin mattis. Magna pulvinar non praesent at mattis senectus praesent tellus.
          </p>: 
          <p className='about-summary'>
         {values.mission}
          </p>
          }
        </div>
      </div>

      <div className='aim d-flex flex-wrap justify-content-center '>
        <div className='aim-container col-lg-5'>
        
          {image?
            <img className='aim-image' src={blankImg}/>:
            <img className='aim-image' src={visionImg.imageUrl}/>
            }
     
        </div>
        <div className='mission-text col-lg-5 d-flex flex-column justify-content-center align-items-center'>
          <h3>OUR MISSION</h3>
         {value? <p className='aim-paragraph'>
         Lorem ipsum dolor sit amet consectetur. Sodales vestibulum integer nisl sodales id. Tellus est sit quis at suspendisse in massa egestas. Blandit aliquam sit rhoncus vitae est est justo pellentesque. Duis enim tincidunt proin urna gravida quam commodo malesuada rutrum. Est a nibh ut ac est pellentesque. Molestie tellus lobortis tortor ultricies in dignissim pellentesque proin mattis. Magna pulvinar non praesent at mattis senectus praesent tellus.
          </p>: 
          <p className='aim-paragraph'>
         {values.mission}
          </p>
          }
        </div>
     
      
      <div className='vision-text col-lg-5  d-flex flex-column justify-content-center align-items-center'>
        <h3>OUR VISSION</h3>
        {value? <p className='aim-paragraph'>
         Lorem ipsum dolor sit amet consectetur. Sodales vestibulum integer nisl sodales id. Tellus est sit quis at suspendisse in massa egestas. Blandit aliquam sit rhoncus vitae est est justo pellentesque. Duis enim tincidunt proin urna gravida quam commodo malesuada rutrum. Est a nibh ut ac est pellentesque. Molestie tellus lobortis tortor ultricies in dignissim pellentesque proin mattis. Magna pulvinar non praesent at mattis senectus praesent tellus.
          </p>: 
          <p className='aim-paragraph'>
         {values.vision}
          </p>
          }
      </div>
      <div className='aim-container col-lg-5'>
      {images?
            <img className='aim-image' src={blankImg}/>:
            <img className='aim-image' src={missionImg.imageUrl}/>
            }
        </div>
      </div>
    </section>
    
  );
}

export default About;