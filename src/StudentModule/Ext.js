import React, { useRef,useEffect, useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import StudentNavbar from './StudentNavbar';
import {useReactToPrint} from "react-to-print";
import weburl from '../AdminModule/weburl';

const Ext = () => {
  const navigate = useNavigate();
  
  const componentPDF = useRef();
  // Access the batch year parameter from the URL
  const { batchYear } = useParams();

  // State to store external results data
  const [externalResults, setExternalResults] = useState([]);
  const [data, setdata] = useState([]);
  const [sem, setSem] = useState("1");
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : {};
  });
  const [sid, setid] = useState(user.id);

  const loaddata = async () => {
    try {
      console.log("sem  inext    : " , sem);
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
        console.log("Data:", responseData);
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  useEffect(() => {
    if(!localStorage.getItem("user")){
      navigate("/login")
    }
    loaddata();
  }, []);

  const generatePDF = useReactToPrint({
    content:()=>componentPDF.current,
    documentTitle:"ExpenseData",
    onAfterPrint:()=>alert("Data saved in PDF")
  })

  return (
    <>
    <StudentNavbar/>
    <div className='e-cont'>
      {/* <h1>{External Results - Batch Year: ${batchYear}}</h1> */}
      <h1 className='shead'>External Result</h1>
      <div ref={componentPDF} style={{width:'100%'}}>
      <table border="1">
        <thead>
          <tr>
            <th>Subject Code</th>
            <th>Subject Name</th>
            <th>External Status</th>
            <th>Sessional Status</th>
            <th>Practical Status</th>
            <th>Termwork Status</th>
            <th>Subject Points</th>
            <th>Subject Grade</th>
            <th>Subject Credit</th>
            <th>Subject Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((result , index) => (
            <tr key={index}>
              <td>{result.branch + result.sem + result.subject}</td>
              <td>{result.subject}</td>
              <td>{result.external}</td>
              <td>{result.sessionalStatus}</td>
              <td>{result.practical}</td>
              <td>{result.termwork}</td>
              <td>{result.viva}</td>

              {/* <td>{result.subjectPoints}</td> */}
              <td>{result.sub_gread}</td>
              <td>{result.sub_cradit}</td>
              <td>{result.subjectStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      <div className='d-grid d-md-flex justify-content-md-end mb-3'>
     <button className='btn btn-success' onClick={generatePDF}>Print</button>
</div>
      {/* <div className='final'>
        <h4>Result: Pass</h4>
      </div> */}
      {/* <div className='btn'>
        <Link to="">Print</Link>
      </div> */}
    </div>
    </>
  );
};

export default Ext;