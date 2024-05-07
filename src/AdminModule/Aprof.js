import React,{useEffect} from 'react'
import './aprof.css'
import AdminNavbar from './AdminNavbar';
import { useNavigate } from 'react-router-dom';
const TProfile = () => {
  const navigate = useNavigate();
  useEffect(()=>{
    if(!localStorage.getItem("user")){
      navigate("/login")
    }
  },[])
  const employeeData = {
    firstName: 'Rajesh',
    middleName: 'Kumar',
    lastName: 'Sharma',
    nameFormat: 'First Middle Last',
    fullName: 'Rajesh Kumar Sharma',
    gender: 'Male',
    birthdate: 'January 15, 1985',
    birthPlace: 'Delhi, India',
    joiningDate: 'June 10, 2010',
    mobileNo: '+91 98765 43210',
    designation: 'Senior Software Engineer',
    adminId: 'EMP123',
    email: 'rajesh.sharma@example.com',
  };


  return (
    <>
    <AdminNavbar/>
    <div className="a-det-container">
        <div className='a-det'>
          <div className="a-details">
            <div className="a-heading">
              <h1>Admin Profile</h1>
            </div>
            {/* Add the actual data from the 'list' variable */}
         
        
            <p>
        <strong>First Name :</strong> {employeeData.firstName}
      </p>
      <p>
        <strong>Middle Name :</strong> {employeeData.middleName}
      </p>
      <p>
        <strong>Last Name :</strong> {employeeData.lastName}
      </p>
      <p>
        <strong>Name Format :</strong> {employeeData.nameFormat}
      </p>
      <p>
        <strong>Full Name :</strong> {employeeData.fullName}
      </p>
      <p>
        <strong>Gender :</strong> {employeeData.gender}
      </p>
      <p>
        <strong>Birthdate :</strong> {employeeData.birthdate}
      </p>
      <p>
        <strong>Birth Place :</strong> {employeeData.birthPlace}
      </p>
      <p>
        <strong>Joining Date :</strong> {employeeData.joiningDate}
      </p>
      <p>
        <strong>Mobile No :</strong> {employeeData.mobileNo}
      </p>
      <p>
        <strong>Designation :</strong> {employeeData.designation}
      </p>
      <p>
        <strong>Admin Id :</strong> {employeeData.adminId}
      </p>
      <p>
        <strong>Email :</strong> {employeeData.email}
      </p>
       
          </div>
</div>
    </div>
    </>
  )
}

export default TProfile
