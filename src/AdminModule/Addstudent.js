import React, { useState, useEffect } from 'react';
import AdminNavbar from './AdminNavbar';
import weburl from './weburl';


const Addstudent = () => {
  const [students, setStudents] = useState(null);
  
  const fetchData = async () => {
    try {
      const response = await fetch(`${weburl}sdp/admin/addstudent.php`);
      if (response.ok) {
        const data = await response.json();
        // Add a branch property to each student object
        // const studentsWithBranch = data.map(student => ({ ...student, branch: '' }));
        setStudents(data);
      } else {
        console.error('Failed to fetch students:', response.status);
      }
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  // Function to handle changes to the branch input
    const handleInputChange = (index, event) => {
        const { name, value } = event.target;
        const updatedMarks = [...students];
        updatedMarks[index][name] = value;  
        setStudents(updatedMarks);   
        // console.log(marks);
  };

  // Function to handle accept
  const handleAccept = async (sid , index) => {
    console.log('Accepted student with ID:', sid , "branch = " , students[index].branch );
    // Add your logic to handle acceptance
    try 
    {
     const apiUrl = `${weburl}sdp/admin/acceptstudent.php`;
      const response2 = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ sid , branch : students[index].branch }),
      });
      if (response2.ok)
       {
        const data = await response2.json(); 
        console.log(data);
        fetchData();
     }
      }
    
     catch (error)
    {
      console.error('Error during login:', error);
    }
  };

  // Function to handle reject
  const handleReject = async (sid , index) => {
    console.log('Rejected student with ID:', sid );
    // Add your logic to handle rejection
    
    try 
    {
      const apiUrl = `${weburl}sdp/admin/rejectstudent.php`;
      const response2 = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ sid }),
      });
      if (response2.ok)
       {
        const data = await response2.json(); 
        console.log(data);
        fetchData();

     }
      }
    
     catch (error)
    {
      console.error('Error during login:', error);
    }
  };

  // JSX to render the table
  return (
    <div>
    <AdminNavbar/><br/><br/><br/><br/><br/><br/>
      <h1>Student Applications</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Birthdate</th>
            <th>Birthplace</th>
            <th>Enrollment Year</th>
            <th>ACPC Rank</th>
            <th>Cast Category</th>
            <th>Nationality</th>
            <th>Degree</th>
            <th>GUJCET</th>
            <th>Branch</th> {/* New column for branch */}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students?.map((student , index) => (
            <tr key={student.sid}>
              <td>{student.name}</td>
              <td>{student.gender}</td>
              <td>{student.birthdate}</td>
              <td>{student.birthplace}</td>
              <td>{student.enrollmentyear}</td>
              <td>{student.acpc_rank}</td>
              <td>{student.cast_category}</td>
              <td>{student.nationality}</td>
              <td>{student.degree}</td>
              <td>{student.gujcat}</td>
              <td>
                {/* Input field for branch */}
                <input
                  type="text"
                  name = {Object.keys(student)[5]}
                  value={student[Object.keys(student)[5]]}
                  onChange={(e) => handleInputChange(index, e)}
                  placeholder="Enter branch"
                />
              </td>
              <td>
                <button onClick={() => handleAccept(student.sid , index)}>Accept</button>
                <button onClick={() => handleReject(student.sid , index)}>Reject</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Addstudent;
