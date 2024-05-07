import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import CEP from '../assets/ce.jpg'
import Heroimg3 from '../Components/Heroimg3'
const CE = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg3 imgs={CEP} heading="Computer Engineering"/>
      <Footer/>
    </div>
  )
}

export default CE
