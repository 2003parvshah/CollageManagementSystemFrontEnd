import React from 'react'
import './Programmes.css'

import { Link } from 'react-router-dom'
import '../Components/ProgData'
const Programmes = (props) => {
  return (
    <div className='prog-container'>
      <h1 className="prog-heading">
        <div className="programe-container">
          <div className="prog-card">
            <img src={props.imgsrc} alt="" className='prog-img'/>
           
            <div className="prog-details">
            <h2 className='prog-title'>{props.title}</h2>
              <p className='text'>{props.text}</p>
              
              <div className="prog-btn">
                <Link to={props.view} className='btn'>View</Link>
              </div>
            </div>
          </div>
        </div>
      </h1>
    </div>
  )
}

export default Programmes
