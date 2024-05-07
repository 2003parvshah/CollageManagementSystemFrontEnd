import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const TeacherNavbar = () => {
  const navigate = useNavigate();
  const [click, setClick] = useState(false);
  const [color, setColor] = useState(false);

  const handleLogout = () => {
    // Remove user from localStorage or perform any other logout-related tasks
    localStorage.removeItem('user');

    // Delay the navigation slightly to ensure localStorage changes take effect
    setTimeout(() => {
      // Redirect to the login page
      navigate('/');
    }, 100);
  };

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div className="header">
      <ul className="nav">
        <li>
          <Link to="/tmod">Personal Information</Link>
        </li>
        <li>
          <Link to="/tmarks">Upload Marks</Link>
        </li>
        <li>
          <Link to="/tatt">Upload Attendance</Link>
        </li>
        <li>
          <div onClick={handleLogout}>
            <Link to="/">Logout</Link>
          </div>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? <FaTimes size={20} style={{ color: '#fff' }} /> : <FaBars size={20} style={{ color: '#fff' }} />}
      </div>
    </div>
  );
};

export default TeacherNavbar;
