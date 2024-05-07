import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Heroimg2 from '../Components/Heroimg2'
import  Form from '../Components/Form'
const Contact = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="Contact Us" text="Let's have a conversation about unlocking potential, fostering innovation, and shaping the future of education together. Reach out to us, and let your inquiries, ideas, and collaborations find a welcoming home." />
      <Form/>
       <Footer/>
    </div>
  )
}

export default Contact
