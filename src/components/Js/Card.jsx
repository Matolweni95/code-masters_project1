import React from 'react'
import '../css/Card.css'

const Card = () => {
  return (
    <div className='cardContent-container'>
        <div className="card-container">
            <h1>Number of blogs owned</h1>
            <h1>5</h1>
            <button className='content-btn'>Go to blogs</button>
        </div>
    </div>
  )
}

export default Card