import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Heroimg3 from '../Components/Heroimg3'
import MHP from '../assets/mh.jpg'
const MH = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg3 imgs={MHP} heading="Mechanical Engineering"/>
      <Footer/>
    </div>
  )
}

export default MH
