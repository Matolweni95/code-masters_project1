import React from 'react'
import '../css/SectionBanner.css'
import Navi from './Nav'

const SectionBanner = () => {
  return (
    <div className='sectionBanner'>
        <div className="sectionBanner__container">
            <Navi />
            <div className="sectionBanner__headerContainer d-flex justify-content-center align-items-center" >
                <h1 className='sectionBanner__header'>Our Stories</h1>
            </div>
        </div>
    </div>
  )
}

export default SectionBanner