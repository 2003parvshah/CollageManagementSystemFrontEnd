import React from 'react'
import './Facility.css'
import Facility from '../Components/Facility';
import FaciCardData from '../Components/FaciData'
const Faci = () => {
  return (
    <div className='faci-container'>
      
      <h1 className="faci-heading">
      <p></p>
        <div className="facility-container">
          {FaciCardData.map((val,ind)=>{
            return(
                <Facility
                key={ind}
                imgsrc={val.imgsrc}
                title={val.title}
                text={val.text}
              
                />
            )
          })}
        </div>
      </h1>
    </div>
  )
}

export default Faci
