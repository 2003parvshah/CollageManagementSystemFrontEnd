import React from 'react'
import './Programmes.css'

import '../Components/ProgData'
const Facility = (props) => {

  return (
    <>
   
    <div className='faci-container'>
    
        <div className="facility-container">
          <div className="faci-card">
            <img className="faci-img" src={props.imgsrc} alt="" />
            <h2 className='faci-title'>{props.title}
            <div className="faci-details">
              <p>{props.text}</p>
              </div>
              </h2>
           
          </div>
        </div>
      
    </div>
    </>
  )
}

export default Facility
