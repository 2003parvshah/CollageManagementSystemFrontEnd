import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import weburl from '../AdminModule/weburl';

const CustomPopup = ({ onClose }) => {
  const [Email, setEmail] = useState('');
  const [newpassword, setnewpassword] = useState('');
  const [OTP, setOTP] = useState('false');
  const [isOTPTrue, setisOTPTrue] = useState('');
  const [isOTPSend, setisOTPSend] = useState(false);
  const [shownewpass, setshownewpass] = useState(false);
  const [invalidOTP, setInvalidOTP] = useState(false);
  const navigate = useNavigate();
 
  const updatepassword = async (e) => {
    e.preventDefault();
    try 
    {
      const apiUrl = `${weburl}sdp/login/updatenewpassword.php`; 
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
    // veryfyotp();
  };
  const checkotp = async (e) => {
    e.preventDefault();
    try 
    {
      const apiUrl = `${weburl}sdp/login/checkOtp.php`; 
      // console.log(Email , OTP);
      const response2 = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Email , OTP }),
      });
      if (response2.ok)
       {
        const data = await response2.json(); 
        console.log(data);
        if(data['otpstatus'] == "true")
        {
          // data2[succe]
      console.log("right otp");
          setInvalidOTP(false)
          setshownewpass(true);
        }else {
          console.log("wrong otp");
          setInvalidOTP(true);   // Set invalidOTP state to true
        }
     }
    // console.log(data);     
      }
    
     catch (error)
    {
      console.error('Error during login:', error);
    }
    // onClose();
    // veryfyotp();
  };
  const handleForgot = async (e) => {
    e.preventDefault();
    try 
    {
      const apiUrl = `${weburl}sdp/login/sendotp.php`; 

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
        console.log(data['ans']);
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
    // onClose();
    // veryfyotp();
  };
  return (
    // <div className="custom-popup">
    //   <div className="popup-content">
    //     <h1>Forgot password</h1>
    //     <h1>enter registered email</h1>
    //     <input type="Email" value={Email} onChange={(e) => setEmail(e.target.value)} />
    //     <p>new Email is sent to you at your registered email address.</p>
    //     <button  className='btn'  onClick={handleForgot}>send otp</button>
    //     { isOTPSend  &&  <><label>enter otp</label><input type="text"  onChange={(e) => setOTP(e.target.value)}></input><br></br><button  className='btn'  onClick={checkotp}>veryfy</button></>}
    //     { shownewpass  &&  <><label>enter new password</label><input type="password" onChange={(e) => setnewpassword(e.target.value)}></input><br></br><button  className='btn'  onClick={updatepassword}>update password</button></>}

    //   </div>
    // </div>
    <div className="custom-popup">
  <div className="popup-content">
    <button className="close-btn" onClick={onClose}>X</button>
    <h1>Forgot password</h1>
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

const PopupComponent = () => {
  const veryfyotp = () => {
    // You can customize the URL and other properties of the new window
    const popupWindow = window.open('/popup-content', 'Popup Window', 'width=400,height=300');
    
    // Example: Sending data to the pop-up window
    if (popupWindow) {
      popupWindow.postMessage('Initial Data for Popup', '*');
    }
  };

  return (
    <div>
      {/* <button onClick={openPopupWindow}>Open Popup Window</button> */}
    </div>
  );
};



// const LoginForm = () => {
 
const Login = () => {


  const handleerror = () => {
    try {
      // Simulate an error
      throw new Error('This is a sample error.');
    } catch (error) {
      // setError(error.message);
      const er = "wrong email password" ;
      // Optionally, you can log the error or perform other tasks
      // console.error(error);
      // Show alert for the error
      window.alert(er);
    }
  };
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const express = require("express");
  // const app = express();
// const cors = require('cors');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
     const apiUrl = `${weburl}sdp/login/login.php`;
    // const apiUrl = 'https://collagemanagementsystemsdp.000webhostapp.com/sdp/login/login.php';
  // app.use(cors());
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      if (!response.ok) {
        throw  Error(`HTTP error! status: ${response.status}`);
      }
      if (response.ok) {
        const data = await response.json();
        const success = data.success;
        const message = data.message;
        console.log('Login successful:', data);
        localStorage.setItem('user', JSON.stringify(data));
        if(data.type === '2' && success===true){
        navigate('/home');}
        else if(data.type === '3' && success===true){
        navigate('/tmod');
      }
      else if(data.type === '1' && success===true){
        navigate('/admin');
      }
        
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };


  const [showPopup, setShowPopup] = useState(false);

  const handleForgot = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };
  
  return (
    <>
      <div className='background-container'>
    <div className='log'>
      <div className='form-log'>
        <h1 className='fhead'>Log In</h1>
        <form action="">
          <label className='la'>Email</label>
          {/* <input type="email" placeholder='Email' /> */}
          <input type="text" placeholder="Your email"value={username} onChange={(e) => setUsername(e.target.value)} />
        
          <label htmlFor="" className='la'>Password</label>
          {/* <input type="password" placeholder='Password' /> */}
          <input type="password" placeholder="Your password"value={password} onChange={(e) => setPassword(e.target.value)} />

          <div className='forgot-password'>
            <p className='forgot-password'>
              Forgot password?{' '}
              <span onClick={handleForgot}>Click Here</span>
            </p>
          </div>
          <button className='btn' onClick={handleLogin}>Submit</button>
        </form>
      </div>
     
    </div>
    </div>
    <div className="pop-up">
    {showPopup && <CustomPopup onClose={closePopup} />}
    </div>
     
     </>
  );
};

export default Login;
