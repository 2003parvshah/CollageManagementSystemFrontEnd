// AdminDashboard.js
import React, { useState } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import {FaBars } from "react-icons/fa"
import Aprof from '../AdminModule/Aprof'
import SemInfo from '../AdminModule/Seminfo'
import Curriculum from '../AdminModule/Curriculum'

import './styles.css'
// import Curriculum from './curriculum';
const AdminDashboard = () => {
  const [showNav, setShowNav] = useState(true);
  const [selectedPage, setSelectedPage] = useState('sprof');

  const handlePageSelect = (page) => {
    setSelectedPage(page);
  };

  return (
    <>
      <header>
        <FaBars onClick={() => setShowNav(!showNav)} />
      </header>

      <Navbar show={showNav} onPageSelect={handlePageSelect} />

      <div className='content-container'>
       
         {selectedPage === 'aprof' && <Aprof />}
         {selectedPage === 'si' && <SemInfo />}
         {selectedPage === 'Curriculum' && <Curriculum />}

      </div>
    </>
  );
};

export default AdminDashboard;
