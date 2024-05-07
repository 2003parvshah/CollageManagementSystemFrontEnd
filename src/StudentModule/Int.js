import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {useParams,useNavigate} from 'react-router-dom';
import StudentNavbar from './StudentNavbar';
import weburl from '../AdminModule/weburl';

const Int = () => {
  const navigate = useNavigate();
 
 const {semno} = useParams();
  // console.log("hi",semno);


  const [data, setdata] = useState([]);
  const [sem, setSem] = useState(semno);
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : {};
  });
  const [sid, setid] = useState(user.id);

  const loaddata = async () => {
    try {
      console.log(sid , sem);
      const apiUrl = `${weburl}sdp/student/showresult.php`;
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ sid, sem }),
        
      });
      if (response.ok) {
        const responseData = await response.json();
        setdata(responseData);
        // console.log("Data:", responseData);
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  useEffect(() => {
    loaddata();
    if(!localStorage.getItem("user")){
      navigate("/login")
    }
  }, []);

  return (
    <>
   <StudentNavbar/>
    <div>
      <h1 className='shead'>Internal Results</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Subject Name</th>
            <th>Sessional_1</th>
            <th>Sessional_2</th>
            <th>Sessional_3</th>
            <th>Viva</th>
            <th>External</th>
            <th>Attendance_1</th>
            <th>Attendance_2</th>
            <th>Attendance_3</th>
            <th>Total_attendance1</th>
            <th>Total_attendance2</th>
            <th>Total_attendance3</th>
            <th>block</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(data) && data.length > 0 ? (
            data.map((row, index) => (
              <tr key={index}>
                <td>{row.subject}</td>
                <td>{row.sess1}</td>
                <td>{row.att1}</td>
                <td>{row.sess2}</td>
                <td>{row.att2}</td>
                <td>{row.sess3}</td>
                <td>{row.att3}</td>
                <td>{row.block}</td>
                <td>{row.viva}</td>
                <td>{row.practical}</td>
                <td>{row.termwork}</td>
                <td>{row.external}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="13">No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default Int;
