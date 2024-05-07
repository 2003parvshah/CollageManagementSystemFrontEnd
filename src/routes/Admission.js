import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Heroimg2 from '../Components/Heroimg2'
import AdmissionData from '../Components/AdmissionData'
const Admission = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="Admission Open for Year 2024" text="Embark on a transformative academic journey! Seize the opportunity to join our vibrant community of learners. Explore innovative programs, world-class faculty, and a nurturing environment. Your future begins here – apply now and become a part of our legacy of excellence." />
      <AdmissionData/>
       <Footer/>
    </div>
  )
}

export default Admission
