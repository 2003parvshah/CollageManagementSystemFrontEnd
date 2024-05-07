import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import CHP from '../assets/ch.jpg'
import Heroimg3 from '../Components/Heroimg3'
const CH = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg3 imgs={CHP} heading="Chemical Engineering"/>
      <Footer/>
    </div>
  )
}

export default CH
