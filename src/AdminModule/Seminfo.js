import React, { useState,useEffect } from 'react';
import AdminNavbar from './AdminNavbar';
import './si.css'
import { useNavigate } from 'react-router-dom';
import weburl from './weburl';

const CourseInfo = () => {
  const navigate = useNavigate();
  useEffect(()=>{
    if(!localStorage.getItem("user")){
      navigate("/login")
    }
  },[])
  const [enrollmentyear, setBatchYear] = useState(2021);
  const [sem, setSessionNumber] = useState(1);
  const [branch, setSelectedDepartment] = useState('CS');

  const handleBatchYearChange = (e) => {
    setBatchYear(parseInt(e.target.value, 10));
  };

  const handleSessionNumberChange = (e) => {
    setSessionNumber(parseInt(e.target.value, 10));
  };

  const handleDepartmentChange = (e) => {
    setSelectedDepartment(e.target.value);
  };

  const handleClick =  async () => {
    // Perform any action you want when the button is clicked
    console.log('Button clicked!');
    console.log('Selected Batch Year:', enrollmentyear);
    console.log('Selected Session Number:', sem);
    console.log('Selected Department:', branch);


    try {
      const apiUrl = `${weburl}sdp/admin/addsem.php`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ branch , enrollmentyear , sem }),
      });

      if (response.ok) {
        // Handle successful response
        const data = await response.json();
        console.log('API response:', data);
      } else {
        // Handle error response
        console.error('API request failed');
      }
    } catch (error) {
      // Handle fetch error
      console.error('Error during API request:', error);
    }
  };



  return (
<>
<AdminNavbar/>
<h1 className='sihead'>Semester Information</h1>
    <div className='a-cont'>
     
      <label>
        Batch Year:
        <select value={enrollmentyear} onChange={handleBatchYearChange}>
          {Array.from({ length: 4 }, (_, index) => (
            <option key={index} value={2021 + index}>
              {2021 + index}
            </option>
          ))}
        </select>
      </label>

      <br />

      <label>
        Session Number:
        <select value={sem} onChange={handleSessionNumberChange}>
          {Array.from({ length: 8 }, (_, index) => (
            <option key={index} value={index + 1}>
              {index + 1}
            </option>
          ))}
        </select>
      </label>

      <br />

      <label>
        Department:
        <select value={branch} onChange={handleDepartmentChange}>
          <option value="CS">CS</option>
          <option value="IT">IT</option>
          <option value="EC">EC</option>
        </select>
      </label>

      <br />

      <button onClick={handleClick}>Add New Session</button>
    </div>
    </>
  );
};

export default CourseInfo;
