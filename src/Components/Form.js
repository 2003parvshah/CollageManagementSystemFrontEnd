import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Form.css';

const Form = () => {
  const form = useRef();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_jnc49we', 'template_tsndtcg', form.current, 'fq8BSExmUXNHt-nMx')
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message Sent");
          setIsFormSubmitted(true);
          setTimeout(() => setIsFormSubmitted(false), 3000); // Reset form submission status after 3 seconds
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className='form'>
      <div className={`success-popup${isFormSubmitted ? ' show' : ''}`}>
        <p>Email sent successfully!</p>
      </div>
      <h1 className='fhead'>Any Queries ?</h1>
      <form ref={form} onSubmit={sendEmail} disabled={isFormSubmitted}>
        <label className='labl'>Name</label>
        <input type='text' placeholder='Your Name' name='user_name' />
        <label className='labl'>Email</label>
        <input type='email' placeholder='Email' name='user_email' />
        <label className='labl'>Subject</label>
        <input type='text' placeholder='Your Subject' name='user_subject' />
        <label className='labl'>Message</label>
        <textarea rows={6} placeholder='Type your message here' name='message'></textarea>
        <button className='btn' type='submit' disabled={isFormSubmitted}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
