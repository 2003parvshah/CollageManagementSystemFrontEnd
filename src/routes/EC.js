import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Heroimg3 from '../Components/Heroimg3'
import ECP from '../assets/tech.jpg'
const EC = () => {
  return (
    <div>
      <Navbar/>

      <Heroimg3 imgs={ECP} heading="Electronics And Communication"/>
      <Footer/>
    </div>
  )
}

export default EC
