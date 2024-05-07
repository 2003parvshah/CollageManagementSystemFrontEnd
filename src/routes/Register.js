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
const Register = () => {
   
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [showPopup, setShowPopup] = useState(false);
  const handleForgot = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };
  
  return (
    <>
      <div className='forgot-password'>
            <p className='forgot-password'>
              Forgot password?{' '}
              <span onClick={handleForgot}>Click Here</span>
            </p>
          </div>
    <div className="pop-up">
    {showPopup && <CustomPopup onClose={closePopup} />}
    </div>
     
     </>
  );
};

export default Register;
