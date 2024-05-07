import "./Heroimg4.css";
import React from 'react';

const Heroimg3 = (props) => {
  const {  imgs, heading, text} = props;

  return (
    <div className="hero">
      <div className="mask">
        <img src={imgs} alt="HomeImage" className="home-img" />
      </div>
      <div className="content">
        <h1>{heading}</h1>
        <p>{text}</p>
      </div>
      <h1 className="t">Our Services</h1>
      <div className="ser">

      
      <h3>Dental Check-ups and Examinations:</h3>
      <p>Routine oral health assessments to identify and address any potential issues.</p>
      <h3>Dental Cleanings:
</h3>
      <p>Professional teeth cleanings to remove plaque, tartar, and stains.
</p>
      <h3>X-rays and Imaging:
</h3>
      <p>Dental radiography services for diagnostic purposes and treatment planning.
</p>
      <h3>Preventive Services:
</h3>
      <p>Education on proper oral hygiene practices and preventive measures.
Application of fluoride treatments and dental sealants.
</p>
      <h3>Restorative Dentistry:
</h3>
      <p>Dental fillings for the treatment of cavities.
Crowns and bridges to restore damaged or missing teeth.
</p>
      <h3>Orthodontic Services:
</h3>
      <p>
Evaluation and consultation for orthodontic treatment.
Provision of braces or aligners for teeth alignment.
</p>
      <h3>Periodontal Services:
</h3>
      <p>
Diagnosis and treatment of gum diseases.
Scaling and root planing procedures.
</p>
     
</div>
    </div>
  );
};

export default Heroimg3;
