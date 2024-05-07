

// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ show, onPageSelect }) => {
  const handleLinkClick = (page, event) => {
    event.preventDefault(); // Prevent the default navigation behavior
    onPageSelect(page);
  };

  return (
    <div className={show ? 'sidenav active' : 'sidenav'}>
      <ul>
        <li>
          <Link to='/tprof' onClick={(e) => handleLinkClick('tprof', e)}>
            Personal Information
          </Link>
        </li>
        <li>
          <Link to='/res' onClick={(e) => handleLinkClick('res', e)}>
            Student Information
          </Link>
        </li>
        <li>
          <Link to='/tmarks' onClick={(e) => handleLinkClick('tmarks', e)}>
            Add Result
          </Link>
        </li>
        <li>
          <Link to='/tatt' onClick={(e) => handleLinkClick('tatt', e)}>
            Add Attendance
          </Link>
        </li>
        <li>
          <Link to='/' >
            Log Out
          </Link>
        </li>
        {/* Add more links as needed */}
      </ul>
    </div>
  );
};

export default Navbar;
