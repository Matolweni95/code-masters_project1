import React, { useState, useEffect } from 'react';
import '../css/Topnav.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Topnav = () => {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/v1/contact/1')
      .then((response) => {
        console.log('Fetched contact:', response.data);
        setContact(response.data);
      })
      .catch((error) => {
        console.error('Error fetching contact data:', error);
      });
  }, []);

  return (
    <>
      <div className='topnav d-flex flex-grow'>
        <div className='container d-flex'>
          {contact ? (
            <ul className='flex text-base'>
              <li className='topnav__text sm-col-3 p-4'>Phone: {contact.mobileNumber}</li>
              <li className='topnav__text email p-4'>Email: {contact.email}</li>
            </ul>
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <div className='container d-flex justify-content-end'>
          <Link to='/login'>
            <p className='topnav__text'>Portal</p>
          </Link>
          <button className='support-btn'>Support Us</button>
        </div>
      </div>
    </>
  );
};

export default Topnav;
