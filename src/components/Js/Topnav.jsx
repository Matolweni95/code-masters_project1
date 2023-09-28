import React from 'react';
import '../css/Topnav.css'

const Topnav = () => {
  return (
    <>
      <div className='topnav d-flex flex-grow'>
        <div className='container d-flex'>
          <p className='topnav__text  col-3'>Phone : 068 528 5764</p>
          <p className='topnav__text'>Email: sebitjasec7@gmail.com</p> 
        </div>
        <div className='container d-flex justify-content-end'>
          <p className='topnav__text'>Portal</p>
          <button className='support-btn'>Support Us</button>
        </div>
      </div>
    </>
  )
}

export default Topnav