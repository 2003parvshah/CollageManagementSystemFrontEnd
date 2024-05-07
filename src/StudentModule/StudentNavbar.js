import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import logo_dark from '../assets/logo-white.png';
import './studentnav.css';

const StudentNavbar = () => {
  const navigate = useNavigate();


  

  const handleLogout = () => {
    // Remove user from localStorage or perform any other logout-related tasks
    localStorage.removeItem('user');

    // Redirect to the login page
   navigate("/")
  };

  return (
    <div className='header'>
      <ul className='nav'>
        <li>
          <Link to="/home">Personal Information</Link>
        </li>
        <li>
          <Link to="/result">Exam Result</Link>
        </li>
        <li>
          <div onClick={handleLogout}>
            <Link to="/">Logout</Link>
          </div>
        </li>
      </ul>
   
    </div>
  );
};

export default StudentNavbar;
