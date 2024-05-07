import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Heroimg2 from '../Components/Heroimg2'
import PlacementData from '../Components/PlacementData'
const Placements = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="Placements" text="Forge your path to success with our dynamic placement programs. Explore exciting career opportunities, industry connections, and personalized guidance that empowers you to step confidently into the professional world. Your journey to a rewarding career starts here." />
      <PlacementData/>
       <Footer/>
    </div>
  )
}

export default Placements

