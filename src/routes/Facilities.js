import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Heroimg2 from '../Components/Heroimg2'
import Faci from '../Components/Faci'
const Facilities = () => {
  return (
    <div>
       <Navbar/>
       <Heroimg2 heading="Facilities" text="Embark on a journey of academic excellence with state-of-the-art facilities designed to inspire, innovate, and elevate your learning experience. From modern classrooms to cutting-edge laboratories, discover a nurturing environment where your educational aspirations can thrive." />
       <Faci/>
       <Footer/>
    </div>
  )
}

export default Facilities
