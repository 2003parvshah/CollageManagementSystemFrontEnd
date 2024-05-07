import './Apply.css';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import Navbar from '../Components/Navbar'
import weburl from '../AdminModule/weburl';


export default function Apply() {

const CustomPopup = ({ onClose }) => {
  const [Email, setEmail] = useState('');
  const [newpassword, setnewpassword] = useState('');
  const [OTP, setOTP] = useState('false');
  const [isOTPTrue, setisOTPTrue] = useState('');
  const [isOTPSend, setisOTPSend] = useState(false);
  const [shownewpass, setshownewpass] = useState(false);
  const [invalidOTP, setInvalidOTP] = useState(false);
  const [otp , setotp] = useState();
  const navigate = useNavigate();
 

  const updatepassword = async (e) => {
    e.preventDefault();
    try 
    {
      const apiUrl = `${weburl}sdp/login/newstudent.php`; 
      // console.log(Email , OTP);
      const response2 = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Email , newpassword }),
      });
      if (response2.ok)
       {
        const data = await response2.json(); 
        console.log(data);
        setFormData((prevData) => ({
          ...prevData,
          sid: data.sid,
        }));
        localStorage.setItem("new" , data.sid);
        if(data['newpasswordstatus'] == "true")
        {
          // data2[succe]
      console.log("updated");

          // setshownewpass(true);
        }
     }
    // console.log(data);     
      }
    
     catch (error)
    {
      console.error('Error during login:', error);
    }
    onClose();
  };
  const checkotp = async (e) => {
    e.preventDefault();

    if(otp == OTP){
      console.log("right otp");
          setInvalidOTP(false)
          setshownewpass(true);
    }
    else{
          console.log("wrong otp");
          setInvalidOTP(true);
    }
  };
  const handleForgot = async (e) => {
    e.preventDefault();
    try 
    {
      const apiUrl = `${weburl}/sdp/login/addemail.php`; 

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Email }),
      });
      if (response.ok)
       {
        const data = await response.json();   
        setisOTPSend(true);
        console.log(data);
        setotp(data.otp);
        if(data['ans' == "success"])
        {
          setisOTPSend(true);
        }
      }
    }
     catch (error)
    {
      console.error('Error during login:', error);
    }
  };
  return (
    <div className="custom-popup">
  <div className="popup-content">
  {  (!localStorage.getItem("new")) ?
    <><button className="close-btn" onClick={onClose}>X</button></> : <></>}

    {/* <h1>Forgot password</h1> */}
    <h1>enter registered email</h1>
    <input placeholder="Enter your registered email"type="Email" value={Email} onChange={(e) => setEmail(e.target.value)} />
    <p>new Email is sent to you at your registered email address.</p>
    <button className='btn' onClick={handleForgot}>send otp</button>
    {isOTPSend && <>
      <label>enter otp</label>
      <input
  placeholder='Enter valid OTP'
  type="text"
  onChange={(e) => {
    setOTP(e.target.value);
    setInvalidOTP(false);  // Reset invalidOTP state when OTP changes
  }}
  className={invalidOTP ? 'invalid-otp' : ''}
/><br></br>
      <button className='btn' onClick={checkotp}>verify</button>
    </>}
    {shownewpass && <>
      <label>enter new password</label>
      <input type="password" onChange={(e) => setnewpassword(e.target.value)} /><br></br>
      <button className='btn' onClick={updatepassword}>update password</button>
    </>}
  </div>
</div>

  );
};




  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [re , setre] = useState(false);
  const handleForgot = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  useEffect(()=>{
    if(!localStorage.getItem("user") ){
      console.log("pleas register");
      setShowPopup(true);
      handleForgot();
    }
  },[])

  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    birthdate: '',
    birthplace: '',
    enrollmentyear: '',
    branch: '',
    acpc_rank: '',
    cast_category: '',
    subcast: '',
    motherTongue: '',
    nationality: '',
    after: '12th',
    degree: 'B.Tech',
    gujcat: '' ,
    sid: ''
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleSubmit = async () => {
    try {
      console.log(formData , "before url");
      const response = await fetch(`${weburl}sdp/student/addstudentinfo.php`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const responseData = await response.json();
        // setFormData(responseData);
        console.log(responseData.sid , "output");
       
        console.log("Data:", responseData);
setre(true);

      } else {
        console.error("Login failed");
      }

    } catch (error) {
      // Handle any errors that occur during the request
      console.error('Error registering:', error.message);
    }
  };

  

  return (
<>

<div className="pop-up">
    {showPopup && <CustomPopup onClose={closePopup} />}
    </div>
    <Navbar/>



    <div className="container">
      <div className="space-y-2">
        <div className="space-y-8 bg-green-200 dark:bg-green-800 p-8 rounded-lg">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-green-600 dark:text-green-400">College Registration</h2>
            <p className="text-gray-500 dark:text-gray-400">Enter your information to register for college.</p>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={formData.name}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="gender">Gender</label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                placeholder={formData.gender}

              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="space-y-2">
              <label htmlFor="birthdate">Birthdate</label>
              <input
                type="date"
                id="birthdate"
                name="birthdate"
                value={formData.birthdate}
                onChange={handleChange}
                placeholder={formData.birthdate}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="birthplace">Birthplace</label>
              <input
                type="text"
                id="birthplace"
                name="birthplace"
                value={formData.birthplace}
                onChange={handleChange}
                placeholder={formData.birthplace}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="enrollmentyear">Enrollment Year</label>
              <input
                type="text"
                id="enrollmentyear"
                name="enrollmentyear"
                value={formData.enrollmentyear}
                onChange={handleChange}
                placeholder={formData.enrollmentyear}

              />
            </div>
            <div className="space-y-2">
              <label htmlFor="branch">Branch</label>
              <input
                type="text"
                id="branch"
                name="branch"
                value={formData.branch}
                onChange={handleChange}
                placeholder={formData.branch}

              />
            </div>
            <div className="space-y-2">
              <label htmlFor="acpc_rank">ACPC Rank</label>
              <input
                type="text"
                id="acpc_rank"
                name="acpc_rank"
                value={formData.acpc_rank}
                onChange={handleChange}
                placeholder={formData.acpc_rank}

              />
            </div>
            <div className="space-y-2">
              <label htmlFor="gujcat">gujcat marks</label>
              <input
                type="text"
                id="gujcat"
                name="gujcat"
                value={formData.gujcat}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="cast_category">Cast Category</label>
              <input
                type="text"
                id="cast_category"
                name="cast_category"
                value={formData.cast_category}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="subcast">Subcast</label>
              <input
                type="text"
                id="subcast"
                name="subcast"
                value={formData.subcast}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="motherTongue">Mother Tongue</label>
              <input
                type="text"
                id="motherTongue"
                name="motherTongue"
                value={formData.motherTongue}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="nationality">Nationality</label>
              <input
                type="text"
                id="nationality"
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="after">After</label>
              <input
                type="text"
                id="after"
                name="after"
                value={formData.after}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="degree">Degree</label>
              <input
                type="text"
                id="degree"
                name="degree"
                value={formData.degree}
                onChange={handleChange}
              />
            </div>

        
           

            <button className="button" onClick={handleSubmit}>Register</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
