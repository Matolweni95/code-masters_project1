  import React, {useState, useEffect} from 'react';
  import '../css/About.css';
  import db from '../Config/Firebase-config';
  import vision from '../images/IMG_8375.JPG';
  import { collection, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom';

  const About = () => {
    const [documents, setDocuments] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        const myCollectionRef = collection(db, 'aboutus');
        const querySnapshot = await getDocs(myCollectionRef);
  
        const docs = [];
        querySnapshot.forEach((doc) => {
          docs.push({ id: doc.id, ...doc.data() });
        });
        
        setDocuments(docs);
      };
     
      fetchData();
      
    }, []);
  





    return (
      
      <section className='about' id='about'>
           {documents.map((doc) => (
            <div key={doc.id}>
        <div className='about-container d-flex flex-column'>
          <div className='about-heading d-flex flex-column align-items-center justify-content-center'>
            <h1 className='about-header'>About</h1>
            <div className='about-line'></div>
          </div>

          <div className='about-desc d-flex justify-content-center'>
            <p className='about-summary'>
            {JSON.stringify(doc.about)}
            
            </p>
          </div>
        </div>

        <div className='aim d-flex flex-wrap justify-content-center '>
          <div className='aim-container col-lg-5'>
            <img className='aim-image' src={vision}/>
          </div>
          <div className='mission-text col-lg-5 d-flex flex-column justify-content-center align-items-center'>
            <h3>OUR MISSION</h3>
            <p className='aim-paragraph'>
            {JSON.stringify(doc.mission)}
           
            </p>
          </div>
       
        
        <div className='vision-text col-lg-5  d-flex flex-column justify-content-center align-items-center'>
          <h3>OUR VISION</h3>
              <p className='mission-paragraph'>
              {JSON.stringify(doc.vision)}
              
              </p>
        </div>
        <div className='aim-container col-lg-5'>
            <img className='aim-image' src={vision}/>
          </div>
        </div>
        </div>
           ))}

      </section>
      
    );
  }

export default About;