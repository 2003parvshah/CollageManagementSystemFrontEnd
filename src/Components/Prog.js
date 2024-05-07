import React from 'react'
import './Programmes.css'
import Programmes from '../Components/Programmes';
import ProgCardData from '../Components/ProgData'
const Prog = () => {
  return (
    <div className='prog-container'>
      
      <h1 className="prog-heading">
      <h3 className='chead'>Course Details</h3>
        <div className="programe-container">
          {ProgCardData.map((val,ind)=>{
            return(
                <Programmes
                key={ind}
                imgsrc={val.imgsrc}
                title={val.title}
                text={val.text}
                view={val.view} 
                />
            )
          })}
        </div>
      </h1>
    </div>
  )
}

export default Prog
