// MarkUpload.js
import React, { useState , useEffect} from 'react';
import './res.css'
import TeacherNavbar from './TeacherNavbar';
import { useNavigate } from 'react-router-dom';
import weburl from '../AdminModule/weburl';
const MarkUpload = () => {
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
  const [marks, setmarks] = useState(null);
  const [sem, setsem] = useState(null);
  const [subjects, setsubjects] = useState();
  const [subject, setsubject] = useState(null);
  const [branch, setbranch] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedOption, setselectedOption] = useState(null);
const handleInputChange = (index, event) => {
  const { name, value } = event.target;
  const updatedMarks = [...marks];
  updatedMarks[index][name] = value;  
  setmarks(updatedMarks);
  // console.log(marks);
};
  const handleSemesterChange = (e) => {
    setsem(e.target.value);
  };
  const handleOptionChange = (event) => {
    setselectedOption(event.target.value);
  };
  const handleSubjectChange = (e) => {
    setsubject(e.target.value);
  };
  const handleBranchChange = (e) => {
    setbranch(e.target.value);
  };
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
};
  const loadsem = async () => {
    try {
      // console.log("befor url ",sem,branch);
      const apiUrl = `${weburl}sdp/teacher/forsubject.php`; 
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ sem , branch }),
      });
        if (response.ok) {
          const data = await response.json();
          setsubjects(data);
        } else {
          console.error("Login failed");
        }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  const loadmarks = async () => {
    try {
      // console.log("befor url ",subject,selectedOption , sem , branch);
      const apiUrl = `${weburl}sdp/teacher/forsubjectmarks.php`; 
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ selectedOption , subject , sem , branch}),
      });
      if (response.ok) {
        const data = await response.json();
        // console.log(  "in url ",data);
        setmarks(data);
        // console.log(  "after url ",marks);
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

const uploadmarks = async () => {
  try {
    console.log("befor url ", sem , branch , subject , selectedOption , marks );
    const apiUrl = `${weburl}sdp/teacher/updatemarks.php`;
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ sem , branch , subject , selectedOption , marks }),
    });
    if (response.ok) {
      setmarks(null);
      setMessage("result added succesfully ...")
      await sleep(2000); 
      setMessage(null);
      loadmarks();
    } else {
      console.error("Login failed");
    }
  } catch (error) {
    console.error("Error during login:", error);
  }
}
const handleSubmitfile = async (event) => {
  event.preventDefault();
  
  if (!selectedFile) {
    alert('Please select a file');
    return;
  }
  
  const formData = new FormData();
  formData.append('fileToUpload', selectedFile);
  formData.append('sem', sem);
  formData.append('branch', branch);
  formData.append('subject', subject);  
  formData.append('selectedOption', selectedOption);
  
  console.log("before url ",formData);
  const apiUrl = `${weburl}sdp/teacher/updatemarksusingexcel.php`;
  
  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      body: formData,
    });
    
    if (response.ok) {
      const data = await response.json();
      console.log("in url ", data);
      loadmarks();
      // handle success
    } else {
      console.error("Failed to upload file");
      // handle error
    }
  } catch (error) {
    console.error('Error during file upload:', error);
    loadmarks();

    // handle error
  }
};


  useEffect(() => {
    if (sem && branch) {
      loadsem();
    }
    if (selectedOption && subject) {
      loadmarks();
    }
    // return () => {
    //   // This code runs when the component unmounts
    //   uploadmarks();
    // };
  }, [sem, branch , subject , selectedOption]); 
  return (
    <>
   <TeacherNavbar/>
   <h1 className='rhead'>Upload Marks</h1>
   {message && <div style={messageStyle}>{message}</div>}
    <div className='res-container'>
     
      <label  htmlFor="semester">Select Semester: </label><br />
      <select id="semester" value={sem} onChange={handleSemesterChange}>
        <option value="">Select Semester</option>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
          <option key={sem} value={sem}>
            Semester {sem}
          </option>
        ))}
      </select><br />
      <label   htmlFor="branch">Select branch:  </label> <br />
      <select id="branch" value={branch} onChange={handleBranchChange}>
        <option value="">Select branch</option>
        <option value="IT">IT</option>
        <option value="CS">CS</option>
        <option value="EC">EC</option>   
      </select>
      <br />
      <label   htmlFor="subject">Select Subject: </label> <br />
      <select id="subject" value={subjects} onChange={handleSubjectChange}>
        <option value="">Select Subject</option>
        {
          subjects?.map((sub ,index) => (
        <option value={sub.subject} key={index}>{sub.subject}</option>
       
        ))
        }
      </select>
      <br />

      <form onSubmit={handleSubmitfile} encType="multipart/form-data">
            <label>
                Select Excel file to upload:
                <input type="file" name="fileToUpload" id="fileToUpload" onChange={handleFileChange} />
            </label>
            <button type="submit">Upload File</button>
        </form>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div>
        <input
        className='radiobtn'
          type="radio"
          id="option1"
          name="options"
          value="sess1"
          checked={selectedOption === "sess1"}
          onChange={handleOptionChange}
        />
        <label  htmlFor="option1">Sessional 1</label>
      </div>
      
      <div>
        <input
         className='radiobtn'
          type="radio"
          id="option2"
          name="options"
          value="sess2"
          checked={selectedOption === "sess2"}
          onChange={handleOptionChange}
        />
        <label  htmlFor="option2">Sessional 2</label>
      </div>

      <div>
        <input
         className='radiobtn'
          type="radio"
          id="option3"
          name="options"
          value="sess3"
          checked={selectedOption === "sess3"}
          onChange={handleOptionChange}
        />
        <label htmlFor="option3">Sessional 3</label>
      </div>

      <div>
        <input
         className='radiobtn'
          type="radio"
          id="option4"
          name="options"
          value="viva"
          checked={selectedOption === "viva"}
          onChange={handleOptionChange}
        />
        <label  htmlFor="option4">Viva</label>
      </div>
      <div>
        <input
         className='radiobtn'
          type="radio"
          id="option5"
          name="options"
          value="external"
          checked={selectedOption === "external"}
          onChange={handleOptionChange}
        />
        <label  htmlFor="option5">External</label>
      </div>

      <div>
        <input
         className='radiobtn'
          type="radio"
          id="option5"
          name="options"
          value="termwork"
          checked={selectedOption === "termwork"}
          onChange={handleOptionChange}
        />
        <label   htmlFor="option5">termwork</label>
      </div>
    </div>
    {/* <br/><br/> */}




    
   { marks   && <> <button onClick={uploadmarks}>Upload Marks</button></>}
      <table>
                <thead>
                    <tr>
                        <th>Roll No</th>
                        <th>Marks</th>
                    </tr>
                </thead>
                <tbody>
                    {marks?.map((mark, index) => (
                        <tr key={index}>
                            <td>{mark.semrollno}<br/></td>
                            <td>
                                    <input
                                          type="text"
                                          value={mark[Object.keys(mark)[1]]}
                                          name={Object.keys(mark)[1]}
                                          onChange={(e) => handleInputChange(index, e)}/>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
    </div>
    </>
  );
};

export default MarkUpload;
