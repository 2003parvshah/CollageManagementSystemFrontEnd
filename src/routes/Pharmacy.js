import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Heroimg3 from '../Components/Heroimg3'
import Phar from '../assets/pharmacy.jpg'
const Pharmacy = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg3 imgs={Phar} heading="Pharmacy" text="Unlock the path to a fulfilling and impactful career in pharmacy at EduFord, where innovation, compassion, and cutting-edge education converge."/>


      <Footer/>
    </div>
  )
}

export default Pharmacy
