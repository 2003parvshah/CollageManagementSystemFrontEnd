import './tprofile.css'
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import TeacherNavbar from './TeacherNavbar';
import weburl from '../AdminModule/weburl';
const TProfile = () => {
  const navigate = useNavigate();
  useEffect(()=>{
    if(!localStorage.getItem("user")){
      navigate("/login")
    }
  },[])

  const [data, setdata] = useState("");
  const [user, setUser] = useState(() => {
  const storedUser = localStorage.getItem("user");
  return storedUser ? JSON.parse(storedUser) : {};
  });
  const [id, setid] = useState(user.id);






  const loaddata = async () => {
    // e.preventDefault();
    try {
      console.log(id);
      const apiUrl = `${weburl}sdp/teacher/showteacherbasicinfo.php`; 
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });
      if (response.ok) {
        const data2 = await response.json();
        console.log(data2.name);
        setdata(data2);
        // return data ;
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
 // The empty dependency array ensures it only runs once when the component mounts
 useEffect(() => {
 loaddata();
}, []); 

  return (
    <>
<TeacherNavbar/>
    <div className="f-det-container">
        <div className='f-det'>
          <div className="f-details">
            <div className="f-heading">
              <h1>Faculty Profile</h1>
            </div>
            {/* Add the actual data from the 'list' variable */}
         
        
        {/* <p><strong>First Name :</strong> {data ? data.name : "Loading..."}  </p> */}
        {/* <p><strong>Middle Name :</strong>{data ? data. : "Loading..."}  </p> */}
        {/* <p><strong>Last Name :</strong>  {data ? data. : "Loading..."} </p> */}
        {/* <p><strong>Name Format :</strong> {data ? data. : "Loading..."} </p> */}
        <p><strong>Full Name :</strong>  {data ? data.name : "Loading..."} </p>
        <p> <strong>Gender :</strong>  {data ? data.gender : "Loading..."} </p>
        <p><strong>Birthdate :</strong> {data ? data.birthdate : "Loading..."}  </p>
        <p><strong>Birth Place :</strong> {data ? data.birthplace : "Loading..."} </p>
        <p><strong>Joining Date :</strong> {data ? data.joiningdate : "Loading..."}  </p>
        <p><strong>B.Tech Info :</strong> {data ? data.btechinfo : "Loading..."} </p>
        <p><strong>M.Tech Info :</strong> {data ? data.mtechinfo : "Loading..."} </p>
        <p><strong>PhD Info :</strong> {data ? data.phdinfo : "Loading..."} </p>
        <p> <strong>Contact Number :</strong> {data ? data.contactnumber : "Loading..."} </p>
        {/* <p><strong>Email :</strong>  </p> */}
        <p><strong>Faculty Id :</strong> {data ? data.facultyid : "Loading..."}  </p>
        <p><strong>Department :</strong> {data ? data.department : "Loading..."}  </p>

       
          </div>
</div>
    </div>
    </> 
  )
}

export default TProfile
