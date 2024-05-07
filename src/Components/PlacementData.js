import React from 'react'
import Placement from '../assets/placement.jpg'
import Graph from '../assets/graph.png'
import './PlacementData.css'
const PlacementData = () => {
  return (
    <div className='container'>
      <h1 className='det'>Top Hiring Companies</h1>
      <img className="pimg" src={Placement} alt="placement" />
      <h1 className='det'>There is a placement cell, which helps in organising campus selections.</h1>
      <p className='pdesc'>Major Recruiters are – Google, Amazon, Byjus, Infosys, TCS, Crest Data System, Zeus Learning, Cognizant, Accenture, Cybage, Infostretch, Infocusp, HAA Exchange, Simform solutions, Streebo, TechMahindra, Capgemini, Shipment, Goldman sachs, einfochips, Cadence, Hitachi Hirel, Byju's think and learn, ATUL, Coromandel, GCPTCL, Nayara Energy, Cadila Healthcare, NIRMA Industries, Adani ports and SEZ, Tata Consulting Engineers, M G Motors, UOP Honeywell, DCM ShriRam, Adani Power, Worley, Reliance Industries, LnT Technology Service, GSFC, GNFC, GHCL, GSPL, Linde etc.</p>
      <h1  className='det'>Placement Statistics of Batch 2023</h1>
      <img className="pimg" src={Graph} alt="" />
      <h1  className='det'>#Batch 2023</h1>
      <div className="no-of-comp">
        <h1 className='comp'>59</h1>
        <p>No. of Companies</p>
      </div>
      <div className="offer">
        <h1 className='off'>931</h1>
        <p>Offers</p>
      </div>
      <div className="high-pkg">
        <h1 className='high'>43 LPA</h1>
        <p>Highest CTC</p>
      </div>
      <h1>Contact Details</h1>
      <h2 className='pl'>Placement Officer</h2>
      <p>EduFord Placement Cell  | Email : edufordPlacement@gmail.com</p>
      
    </div>
  )
}

export default PlacementData
