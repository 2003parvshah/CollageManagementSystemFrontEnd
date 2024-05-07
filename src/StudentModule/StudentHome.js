import React, { useEffect, useState } from "react";
import "./StudentHome.css";

import { useNavigate } from "react-router-dom";
import StudentNavbar from "./StudentNavbar";
import weburl from "../AdminModule/weburl";

// import axios from 'axios';

const StudentHome = () => {
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
  function check() {
    const user = localStorage.getItem("user");
    if (user) { 
    } else {
      console.log("User is not logged in");
      // navigate("/home");
    }
  }
  check();
  
  const loaddata = async () => {
    // e.preventDefault();
    try {
      check();
      console.log(id);
      const apiUrl = `${weburl}sdp/student/showstudentinfo.php`; 
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });
      if (response.ok) {
        const data2 = await response.json();
        console.log(data2);
        setdata(data2);
        // return data ;
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  useEffect(() => {
    // Use useEffect to load data when the component mounts

    loaddata();
  }, []); // The empty dependency array ensures it only runs once when the component mounts

  return (
    <>
   <StudentNavbar/>
    <div className="std-det-container">
      {/* {student.map((list, index) => ( */}
      <div className="std-det">
        <div className="student-details">
          <div className="std-heading">
            <h1>Student Profile</h1>
            {/* <h1 style={{ color: "red" }}>hi</h1> */}

          </div>
          {/* Add the actual data from the 'list' variable */}
          {/* <p><strong>Reporting Date :</strong>  </p> */}
          <p>{/* <strong>Addmission Type :</strong>{" "} */}</p>
          <p>{/* <strong>First Name :</strong>{" "} */}</p>
          <p>{/* <strong>Middle Name :</strong>{" "} */}</p>
          <p>{/* <strong>Last Name :</strong>{" "} */}</p>
          <p>{/* <strong>Name Format :</strong>{" "} */}</p>
          <p>
            <strong>Full Name :</strong>
            {"  "} {data ? data.name : "Loading..."}
          </p>
          <p>
            {" "}
            
            <strong>Gender :</strong> {data ? data.gender : "Loading..."}{" "}
          </p>
          <p>
            <strong>Birthdate :</strong> {data ? data.birthdate : "Loading..."}{" "}
          </p>
          <p>
            <strong>Birth Place :</strong>{" "}
            {data ? data.birthplace : "Loading..."}{" "}
          </p>
          <p>
            <strong>Enrollment Year :</strong>{" "}
            {data ? data.enrollmentyear : "Loading..."}{" "}
          </p>
          <p>
            <strong>Degree :</strong> {data ? data.degree : "Loading..."}{" "}
          </p>
          {/* <p><strong>Student Id :</strong>  </p> */}
          <p>
            <strong>ACPC Merit Rank :</strong>{" "}
            {data ? data.acpc_rank : "Loading..."}{" "}
          </p>
          <p>
            <strong>Cast Category :</strong>{" "}
            {data ? data.cast_category : "Loading..."}{" "}
          </p>
          <p>
            {" "}
            <strong>Sub Cast :</strong> {data ? data.subcast : "Loading..."}{" "}
          </p>
          <p>
            <strong>Mother Tongue :</strong>{" "}
            {data ? data.motherTongue : "Loading..."}{" "}
          </p>
          <p>
            <strong>Nationality :</strong>{" "}
            {data ? data.nationality : "Loading..."}{" "}
          </p>
        </div>

        {/* <div className="gur-det"> */}
        {/* <div className="gur-heading"> */}
        {/* <h1>Guardian Profile</h1> */}
        {/* </div> */}
        {/* Add guardian details using 'list' variable */}
        {/* <p><strong>Relation Type :</strong> </p>
            <p><strong>Full Name :</strong> </p>
            <p><strong>Occupation :</strong> </p>
            <p><strong>Annual Income :</strong> </p> */}
        {/* </div> */}

        {/* <div className="cont-det"> */}
        {/* <div className="cont-heading"> */}
        {/* <h1>Contact Information</h1> */}
        {/* </div> */}
        {/* Add contact information using 'list' variable */}
        {/* <p><strong>Address :</strong> </p>
            <p><strong>City :</strong> </p>
            <p><strong>Pin Code :</strong> </p>
            <p><strong>State :</strong> </p>
            <p><strong>Country :</strong> </p>
            <p><strong>Mobile No :</strong> </p>
            <p><strong>Email :</strong> </p> */}
        {/* </div> */}

        <div className="std-btn">
          {/* <Link to="" className='btn'>Edit</Link> */}
        </div>
      </div>
      {/* ))} */}
    </div>
    </>
  );
};

export default StudentHome;
