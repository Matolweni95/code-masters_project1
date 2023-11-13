import React from 'react';
import '../css/Topnav.css';
import { Link } from 'react-router-dom';

const Topnav = () => {
  return (
    <>
      <div className='topnav d-flex flex-grow'>
        <div className='container d-flex'>
          <p className='topnav__text  sm-col-3'>Phone : 068 528 5764</p>
          <p className='topnav__text email'>Email: sebitjasec7@gmail.com</p> 
        </div>
        <div className='container d-flex justify-content-end'>
          <Link to ="/login">
            <p className='topnav__text'>Portal</p>
          </Link>
            <button className='support-btn'>Support Us</button>
        </div>
      </div>
    </>
  )
}

export default Topnav