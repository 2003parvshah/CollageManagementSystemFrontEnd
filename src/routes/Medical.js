import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Heroimg3 from '../Components/Heroimg3'
import med from '../assets/med.jpg'
const Medical = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg3 imgs={med} heading="Medical Science" text="Explore the convergence of compassion and cutting-edge healthcare in Medical Science at EduFord." />

      <Footer/>
    </div>
  )
}

export default Medical
