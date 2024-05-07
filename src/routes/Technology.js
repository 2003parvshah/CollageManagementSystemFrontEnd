import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Heroimg3 from '../Components/Heroimg3'
import tech from '../assets/tech.jpg'
import TechDept from '../Components/TechDept'
const Technology = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg3 imgs={tech} heading="Technology" text="Explore the dynamic world of technology at our college, where innovation meets education. Our cutting-edge programs are designed to equip students with the skills and knowledge needed to thrive in the rapidly evolving tech landscape. From coding and artificial intelligence to cybersecurity and data analytics, our curriculum is tailored to meet the demands of the digital age. Join us on a journey of discovery, where you'll be guided by expert faculty, collaborate on exciting projects, and gain hands-on experience with the latest tools and technologies. Unleash your potential in the realm of technology and shape the future with us."/>
      <TechDept/>
      <Footer/>
    </div>
  )
}

export default Technology
