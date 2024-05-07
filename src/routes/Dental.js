import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Heroimg3 from '../Components/Heroimg3'
import dental from '../assets/dental.jpg'
const Dental = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg3 imgs={dental} heading="Dental Science" text="Ignite your passion for oral health and innovation in Dental Science at EduFord." />
      <Footer/>
    </div>
  )
}

export default Dental
