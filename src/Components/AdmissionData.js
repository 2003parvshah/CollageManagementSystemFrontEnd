
import React from 'react';
import './Admission.css';
import { Link } from "react-router-dom"
const AdmissionData = () => {
  return (
    <div className="AdmissionData">
       <h1>UG Program Admission Process</h1>
      <div className='step' onClick={() => {}}>
      <p>Step 1</p>
             <p>NEW USER REGISTRATION</p>
        <p>1. Valid e-mail address and active mobile number are required.</p>

        <p>2. Enter all the relevant details carefully.</p>
       <p>3. An OTP will be sent to your Registered Indian Mobile Number for verification.</p>
         <p>4. Once OTP is validated, a password will be sent to your registered email address.</p>
        <p>5. All the correspondence shall be made to the registered email address and mobile number only.</p>
        
      </div>

      <div className='step' onClick={() => {}}>
        <p>Step 2</p>
        <p>SIGN IN FOR REGISTERED USER</p>
        <p>Valid e-mail address and active mobile number are required.</p>
       
      </div>


      <div className='step' onClick={() => {}}>
        <p>Step 3</p>
        <p>FILLING ONLINE APPLICATION FORM</p>
         <p>1. Fill in the relevant fields carefully. An Application Number will be generated after filling primary details.</p>
 <p>2. Refer this application number in all your future correspondence.</p>
      </div>
      <div className='step' onClick={() => {}}>
        <p>Step 4</p>
        <p>PAYMENT</p>
        <p>1.  Application cost of Rs.1350 should be paid through Net Banking Account/ Credit/ Debit Card/ Paytm</p>
         <p>2. Application cost is non-refundable.</p>
        
      </div>
      <div className='step' onClick={() => {}}>
      <p>Step 5</p>
      <p>PHOTO & SIGNATURE UPLOAD</p>
         <p>1. The photograph must be in color and should be taken professionally in a studio.</p>
        
      </div>
      <div className='step' onClick={() => {}}>
      <p>Step 6</p>
       <p>DOWNLOAD FILLED IN APPLICATION</p>
         <p>1. Download and save the filled-in application for your reference and further correspondence.</p>
       
      </div>

      <div className="apply-btn">
      <Link to="/appform" className="btn">Apply Now!!</Link>
      </div>
     
    </div>
  );
};

export default AdmissionData;
