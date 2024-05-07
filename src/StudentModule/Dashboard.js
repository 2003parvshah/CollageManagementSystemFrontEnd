import React, { useEffect } from 'react';
import StudentHome from '../StudentModule/StudentHome'
import StudentNavbar from './StudentNavbar';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  useEffect(()=>{
    if(!localStorage.getItem("user")){
      navigate("/login")
    }
  },[])
  return (
   
    <>
    <StudentNavbar/>
    <StudentHome/>
    </>
  );
};

export default Dashboard;
