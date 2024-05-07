// //Dashboard.js
// import React from 'react';
// import { Link, Route } from 'react-router-dom';

// const FacultyDashboard = () => {
//   return (
//     <div>
//       <h1>Faculty Dashboard</h1>
//       <nav>
//         <ul>
//           <li><Link to="/mark">Upload Marks</Link></li>
//           <li><Link to="/att">Upload Attendance</Link></li>
//         </ul>
//       </nav>
      
//     </div>
//   );
// };

// export default FacultyDashboard;




// Dashboard.js
import React, { useState } from 'react';

// import PersonalInfo from '../Components/PersonalInfo'; // Replace with your actual PersonalInfo component
// import ExamResult from '../Components/StudentResult'; // Replace with your actual ExamResult component
//  import Logout from '../Components/Login'; // Replace with your actual Logout component
import TNavbar from '../TeacherModule/TNavbar';
import { FaBars } from 'react-icons/fa';
import Tprof from '../TeacherModule/TProfile'
import Tmark from '../TeacherModule/AddRes'
import Tatt from '../TeacherModule/Att'
const Dashboard = () => {
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

      <TNavbar show={showNav} onPageSelect={handlePageSelect} />

      <div className='content-container'>
       
         {selectedPage === 'tprof' && <Tprof />}
         {selectedPage === 'tmarks' && <Tmark />}
         {selectedPage === 'tatt' && <Tatt />}
      </div>
    </>
  );
};

export default Dashboard;
