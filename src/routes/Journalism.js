import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Heroimg3 from '../Components/Heroimg3'
import jour from '../assets/jour.jpg'
const Journalism = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg3 imgs={jour} heading="Journalism" text="Uncover the power of storytelling and media innovation in Journalism at EduFord." />

      <Footer/>
    </div>
  )
}

export default Journalism
