import React from 'react'
import { Link } from 'react-router-dom';
const Navbar = ({show ,onPageSelect }) => {
  const handleLinkClick = (page, event) => {
    event.preventDefault(); // Prevent the default navigation behavior
    onPageSelect(page);
  };
  
  return (
    <div className={show ? 'sidenav active' : 'sidenav'}>
      <ul>
        <li>
          <Link to='/aprof' onClick={(e) => handleLinkClick('aprof', e)}>
            Personal Information
            {/* in admin module */}
          </Link>
        </li>
        <li>
          <Link to='/si' onClick={(e) => handleLinkClick('si', e)}>
            Semester Information
          </Link>
        <li>
          <Link to='/Curriculum' onClick={(e) => handleLinkClick('Curriculum', e)}>
          curriculum  
          </Link>
        </li>
        </li>
        <li>
          <Link to='/tatt' onClick={(e) => handleLinkClick('tatt', e)}>
           Faculty Information
          </Link>
        </li>
        <li>
          <Link to='/login' >
            Log Out
          </Link>
        </li>
        {/* Add more links as needed */}
      </ul>
    </div>
  );
}

export default Navbar
