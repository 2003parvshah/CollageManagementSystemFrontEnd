import React,{useEffect} from 'react'

import StudentResult from '../StudentModule/StudentResult'
import StudentNavbar from './StudentNavbar'
import { useParams,useNavigate } from 'react-router-dom';
const Result = () => {
  const navigate = useNavigate();
  useEffect(()=>{
    if(!localStorage.getItem("user")){
      navigate("/login")
    }
  },[])
  return (
    <div>
      <StudentNavbar/>
      <StudentResult/>
    </div>
  )
}

export default Result
