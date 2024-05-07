import React , {useRef,useState , useEffect} from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import './StudentResult.css'
import weburl from '../AdminModule/weburl';

const StudentResult = () => {
  const navigate = useNavigate();
 
  const [data , setdata] = useState(
    [
      {
        "External Result": "Pass",
        "Internal Result": "Pass",
        "Batch year": 2022,
        "Session No": 1,
        "Regular Exam No": 1,
        "Provisional Marksheet": "Yes"
      },
      {
        "External Result": "Fail",
        "Internal Result": "Pass",
        "Batch year": 2023,
        "Session No": 2,
        "Regular Exam No": 2,   
        "Provisional Marksheet": "No"
      },
      {
        "External Result": "Pass",
        "Internal Result": "Pass",
        "Batch year": 2022,
        "Session No": 3,
        "Regular Exam No": 3,
        "Provisional Marksheet": "Yes"
      }
    ]
  );

  const [sem, setSem] = useState("1");
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : {};
  });
  const [sid, setid] = useState(user.id);

  const loaddata = async () => {
    try {
      const apiUrl = `${weburl}sdp/student/forstudentsem.php`;
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ sid}),
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
    loaddata();
    if(!localStorage.getItem("user")){
      navigate("/login")
    }
  }, []);

  
  return (
    <div>
      <h1 className='shead'>Student Academic History</h1>
      
      <table border="1">
        <thead>
          <tr>
            <th >External Result</th>
            <th>Internal Result</th>
            <th>Batch year</th>
            <th>Session No</th>
            <th>Regular Exam No</th>
            <th>Provisional Marksheet</th>
          </tr>
        </thead>
        <tbody>
          {/* Add your table rows here */}

          {Array.isArray(data) && data.length > 0 ? (
          data.map((row, index) => (
              <tr key={index}>
            <td><Link to={{ pathname: '/ext', state: { sem: row.semno } }}>View External Result {row.semno}</Link></td>
            <td><Link to={`/int/${row.semno}`}>View Internal Result</Link>
</td>
            <td>{row.year}</td>
            <td>{row.semno}</td>
            <td>{row.semrollno}</td>
            <td></td>
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
  );
};

export default StudentResult;
