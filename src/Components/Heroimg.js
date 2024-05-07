import "./HeroStyles.css"
import HomeImg from '../assets/home-img2.jpg'
import React from 'react'
import { Link } from "react-router-dom"

const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img src={HomeImg} alt="HomeImage" className="home-img" />
      </div>
      <div className="content">
        <h1>EduFord</h1>
        <p>"Empowering Minds, Enriching Futures: Where Knowledge Meets Innovation. Welcome to EduFord, where academic excellence and holistic development converge to shape the leaders of tomorrow. Join us on a transformative journey of learning, discovery, and personal growth. Together, let's build a brighter future at EduFord."</p>
        <div className="ebtn">
            <Link to="/about" className="btn ">Explore</Link>
        </div>
      </div>
    </div>
  )
}

export default Heroimg
