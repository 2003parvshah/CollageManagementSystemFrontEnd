import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Heroimg2 from '../Components/Heroimg2'
import Aboutcard from '../Components/aboutcard'
const About = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="About" text="With a rich legacy of 40 years in fostering world-class academic excellence and over 100,000 alumini across the globe, EduFord is one of the premier institution of higher learning in India offering Undergraduate,Postgraduate,Diploma and Ph.D programmes."/>
      <Aboutcard/>
      <Footer/>
    </div>
  )
}

export default About
