import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import ITP from '../assets/it.jpg'
import Heroimg3 from '../Components/Heroimg3'
const IT = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg3 imgs={ITP} heading="Information Technology"/>
      <Footer/>
    </div>
  )
}

export default IT
