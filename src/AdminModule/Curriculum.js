import React, { useState , useEffect} from 'react';
import AdminNavbar from './AdminNavbar';
import './si.css'
import { useNavigate } from 'react-router-dom';
import weburl from './weburl';

const Curriculum = () => {
  const navigate = useNavigate();
  useEffect(()=>{
    if(!localStorage.getItem("user")){
      navigate("/login")
    }
  },[])
  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };
  const [message, setMessage] = useState(''); // For success/error messages
  const messageStyle = {
    color: 'yellow', // Set the text color to yellow
    fontWeight: 'bold', // Optional: make the text bold
    padding: '30px', // Optional: add some padding
  };
    const [curriculum, setcurriculum] = useState(null);
    const [sem, setsem] = useState(null);
    const [branch, setbranch] = useState(null);
    const [newSubject, setNewSubject] = useState('');
    const [sub_credit, setNewCredit] = useState('');
    const addSubject = () => {
      setcurriculum([...curriculum, { subject: newSubject, sub_credit: sub_credit }]);
      setNewSubject('');
      setNewCredit('');
  };
    const deleteSubject = (index) => {
      const updatedCurriculum = [...curriculum];
      updatedCurriculum.splice(index, 1);
      setcurriculum(updatedCurriculum);
  };
  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const updatedMarks = [...curriculum];
    updatedMarks[index][name] = value;  
    setcurriculum(updatedMarks);
    // console.log(marks);
  };
    const handleSemesterChange = (e) => {
      setsem(e.target.value);
    };
    const handleBranchChange = (e) => {
      setbranch(e.target.value);
    };
    const loadsem = async () => {
      try {
        // console.log("befor url ",sem,branch);
        const apiUrl = `${weburl}sdp/admin/loadsem.php`; 
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ sem , branch }),
        });
        if (response.ok) {
          const data = await response.json();
          setcurriculum(data);
        } else {
          console.error("Login failed");
        }
      } catch (error) {
        console.error("Error during login:", error);
      }
    };
  const uploadnewCurriculum = async () => {
    try {
      console.log("befor url ", sem , branch  , curriculum );
      // setcurriculum(JSON.stringify(curriculum));
      const apiUrl = `${weburl}/sdp/admin/updatesem.php`;
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ sem , branch ,  curriculum }),
      });
      if (response.ok) {
        setcurriculum(null);
        setMessage("curriculum updeted successfully ")
        await sleep(2000); 
        loadsem();
        setMessage(null);
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  }
  useEffect(() => {
      if (sem && branch) {
        loadsem();
      }
    }, [sem, branch ]); 
    return (
      <>

      <AdminNavbar/>
      

      <h1 className='sihead'>Change Curriculum</h1>
       {message && <div style={messageStyle}>{message}</div>}
      <div className='res-container'>
      
        <label   htmlFor="semester" className='opt'>Select Semester: </label><br />
        <select id="semester" value={sem} onChange={handleSemesterChange}>
          <option value="" >Select Semester</option>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
            <option key={sem} value={sem}>
              Semester {sem}
            </option>
          ))}
        </select><br />
        <label className='opt' htmlFor="branch">Select branch:  </label> <br />
        <select id="branch" value={branch} onChange={handleBranchChange}>
          <option value="">Select branch</option>
          <option value="IT">IT</option>
          <option value="CS">CS</option>
          <option value="EC">EC</option>   
        </select>
        <br />
        <td>
                            <button onClick={addSubject}>Add</button>
                        </td>
     { curriculum  && <> <button onClick={uploadnewCurriculum}>Upload New Curriculum</button></>}
        <table>
                  <thead>
                      <tr>
                          <th>subject</th>
                          <th>creadit</th>
                      </tr>
                  </thead>
                  <tbody>
                      {curriculum?.map((att, index) => (
                          <tr key={index}>
                              <td>
                                      <input
                                            type="text"
                                            value={att[Object.keys(att)[0]]}
                                            name={Object.keys(att)[0]}
                                            onChange={(e) => handleInputChange(index, e)}/>
                              </td>
                              <td>
                                      <input
                                            type="text"
                                            value={att[Object.keys(att)[1]]}
                                            name={Object.keys(att)[1]}
                                            onChange={(e) => handleInputChange(index, e)}/>
                              </td>
                              <td>
                                <button onClick={() => deleteSubject(index)}>Delete</button>
                            </td>
                          </tr>
                      ))}
                  </tbody>
              </table>
      </div>
      </>
    );
  };
  

export default Curriculum;