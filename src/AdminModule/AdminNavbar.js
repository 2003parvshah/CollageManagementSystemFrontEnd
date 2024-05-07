import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {FaBars , FaTimes} from "react-icons/fa"

const AdminNavbar = () => {
  const navigate = useNavigate()
   
    const handleLogout = () => {
      // Remove user from localStorage or perform any other logout-related tasks
      localStorage.removeItem('user');
  
      // Delay the navigation slightly to ensure localStorage changes take effect
      setTimeout(() => {
        // Redirect to the login page
        navigate('/login');
      }, 100);
    };
    return (
        <div className="header">
         
          <ul className="nav">
            <li>
              <Link to="/admin">Personal Information</Link>
            </li>
            <li>
              <Link to="/si">Semester Information</Link>
            </li>

            <li>
              <Link to="/addstudent">add new students</Link>
            </li>


            <li>
                <Link to="/Curriculum">Curriculum</Link>
            </li>
            <li>
          <div onClick={handleLogout}>
            <Link to="/login">Logout</Link>
          </div>
        </li>
            
          </ul>
        
        </div>
    
      )
}

export default AdminNavbar
