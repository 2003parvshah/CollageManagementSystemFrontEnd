import React, { useState } from 'react';
import {loadStripe} from '@stripe/stripe-js';
import {
  PaymentElement,
  Elements,
  ElementsConsumer,
} from '@stripe/react-stripe-js';
import InjectedCheckoutForm from './Payment';

const ApplicationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [obtained, setObtained] = useState(0);
  const [totalMarks, setTotalMarks] = useState(0);
  const [file, setFile] = useState(null); // State for the selected file
  const [password, setPassword] = useState('');
  const [competitiveMarks, setCompetitiveMarks] = useState(0);
  const [compTotalMarks, setCompTotalMarks] = useState(0);
  const [competitiveExam, setCompetitiveExam] = useState(''); // State for the selected competitive exam

  const [isUserRegistered, setIsUserRegistered] = useState(false);
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  const stripePromise = loadStripe('pk_test_51OqaRISGQ0fNvCby89RgUnqylEt0sBupdJdKaN0OnmiKBWS3LTRyYejce0WNOTVj6UslCe57FGtEZl9qo4qGsT0Z00PqeEAdgT');

const options = {
  mode: 'payment',
  amount: 1099,
  currency: 'usd',
  // Fully customizable with appearance API.
  appearance: {
  
  },
};



  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    // Check if a file is selected and its size is within the limit (100kb)
    if (selectedFile && selectedFile.size <= 500 * 1024) {
      setFile(selectedFile);
    } else {
      // Handle the case where the file exceeds the size limit
      alert('Please select a valid file within 500kb size limit.');
    }
  };

  const handleCompetitiveExamChange = (e) => {
    const selectedExam = e.target.value;
    setCompetitiveExam(selectedExam);

    // Set default values based on the selected competitive exam
    if (selectedExam === 'NEET') {
      setCompTotalMarks(720);
    } else if (selectedExam === 'JEE') {
      setCompTotalMarks(360);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, including file upload
    console.log('Form submitted with the following data:', {
      name,
      email,
      contactNumber,
      obtained,
      totalMarks,
      password,
      file,
      competitiveMarks,
      compTotalMarks,
      competitiveExam,
    });
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    // Handle sign-in logic here
    // You can check the entered email and password against your registered users
    // For demonstration purposes, always consider the user as signed in
    setIsUserRegistered(true);
    alert('Signed in successfully!');
  };

  return (
    <div className='form'>
      <h1 className='title'>Admission Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          placeholder='Your Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder='Your Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="contactNumber">Contact No.</label>
        <input
          type='number'
          value={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
          required
        />

        <p>Last Result Details:</p>
        <label>Obtained Mark:</label>
        <input
          type='number'
          placeholder='Enter Marks'
          value={obtained}
          onChange={(e)=>setObtained(e.target.value)}
          required
        />
        <label>Total Marks:</label>
        <input
          type='number'
          value={totalMarks}
          placeholder='Total marks'
          onChange={(e)=>setTotalMarks(e.target.value)}
          required
        />
        <label>Percentage:</label>
        <input
          type='number'
          value={obtained*100/totalMarks}
        />

      

        {/* Input for uploading marksheet */}
        <label htmlFor="marksheet">Upload Marksheet (PDF, max 500kb)</label>
        <input
          type="file"
          accept=".pdf"
          onChange={handleFileChange}
          required
        />
        {file && <p>Selected File: {file.name}</p>}

        <p>Competitive Result Details:</p>

        {/* Dropdown menu for selecting competitive exam */}
        <label htmlFor="competitiveExam">Select Competitive Exam:</label>
        <select
          id="competitiveExam"
          value={competitiveExam}
          onChange={handleCompetitiveExamChange}
          required
        >
          <option value="">Select Exam</option>
          <option value="NEET">NEET</option>
          <option value="JEE">JEE</option>
        </select>

        {/* Competitive result input fields */}
        {competitiveExam && (
          <>
            <label>Obtained Mark:</label>
            <input
              type='number'
              placeholder='Enter Marks'
              value={competitiveMarks}
              onChange={(e) => setCompetitiveMarks(e.target.value)}
              required
            />
            <label>Total Marks:</label>
            <input
              type='number'
              value={compTotalMarks}
              placeholder='Total marks'
              onChange={(e) => setCompTotalMarks(e.target.value)}
              readOnly
              required
            />
            <label>Percentage</label>
            <input
              type='number'
              value={competitiveMarks*100/compTotalMarks}
            />

            {/* Input for uploading competitive marksheet */}
            <label htmlFor="competitiveMarksheet">Upload Marksheet of {competitiveExam} Exam (PDF, max 500kb)</label>
            <input
              type="file"
              accept=".pdf"
              onChange={handleFileChange}
              required
            />

            {/* Display selected file name */}
            {file && <p>Selected File: {file.name}</p>}
          </>
        )}

        {/* <button type='submit' className='btn'>Submit</button> */}
        <Elements stripe={stripePromise} options={options}>
    <InjectedCheckoutForm />
  </Elements>
      </form>
    </div>
  );
};

export default ApplicationForm;