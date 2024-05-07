import './TechDept.css'

import React from 'react'
import { FaCog, FaDesktop, FaFlask, FaLaptop, FaMicrochip } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const TechDept = () => {
  return (
    <div className='dept'>
      <h1 className='title'>Departments</h1>
      <div className="dept-icons">
          <div className="ce">
          <Link to="/ced" className="ce">
            <FaDesktop size={50} style={{color:"#fff"}}/> 
            <h3>Computer Engineering</h3>
          </Link>
          </div>
          <div className="ec">
          <Link to="/ecd" className="ec">
            <FaMicrochip size={50} style={{color:"#fff"}}/> 
            <h3>Electronics And Communication</h3>
          </Link>
          </div>
          <div className="it">
          <Link to="/itd" className="it">
            <FaLaptop size={50} style={{color:"#fff"}}/> 
            <h3>Information Technology</h3>
          </Link>
          </div>
         
          <div className="ch">
          <Link to="/chd" className="ch">
            <FaFlask size={50} style={{color:"#fff"}}/> 
            <h3>Chemical Engineering</h3>
          </Link>
          </div>
          <div className="mh">
          <Link to="/mhd" className="mh">
            <FaCog size={50} style={{color:"#fff"}}/> 
            <h3>Mechanical Engineering</h3>
          </Link>
          </div>
         
      </div>
      
    </div>
  )
}

export default TechDept
