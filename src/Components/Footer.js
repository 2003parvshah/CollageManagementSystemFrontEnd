import React from 'react'
import "./Footer.css"
import { FaFacebook, FaGithub, FaLinkedin, FaMailBulk, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-container">
        <div className="left">
            <div className="location">
              <h4 className='text'>  <FaMapMarkerAlt size={20} style={{color:"#fff",marginRight:"2rem"}}/>
               
               EduFord. College Road,
               Nadiad 387 001, Gujarat, 
               India.</h4>
               
            </div>
            <div className="phone">
                <h4 className='text'> <FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/>
            +91 7016930858 </h4>
           
            </div>
            <div className="email">
                <h4 className='text'> <FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/>
            abc@edf.ac.in </h4>
           
            </div>
        </div>
        <div className="right">
            <h4 className='text'>About the College</h4>
            <p className='text'>"Empowering minds and shaping futures, EduFord is a beacon of academic excellence, innovation, and holistic development."</p>
            <div className="social">
            <FaFacebook size={20} style={{color:"#fff",marginRight:"2rem"}}/>
            <FaLinkedin size={20} style={{color:"#fff",marginRight:"2rem"}}/>
            <FaGithub size={20} style={{color:"#fff",marginRight:"2rem"}}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
