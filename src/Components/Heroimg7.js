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

    <h3>Diagnostic Services:
</h3>
    <p>Cutting-edge diagnostic procedures, including medical imaging, laboratory tests, and genetic screenings, to accurately identify and assess various medical conditions.
</p>
    <h3>Preventive Healthcare:
</h3>
    <p>Comprehensive preventive services such as vaccinations, health screenings, and wellness programs designed to detect and mitigate health risks before they become serious.
</p>
    <h3>Specialized Medical Care:

</h3>
    <p>Access to specialized medical care across various disciplines, including cardiology, neurology, oncology, and more, to address specific health concerns and conditions.
</p>
    <h3>Treatment and Therapies:
</h3>
    <p>State-of-the-art medical treatments and therapies, ranging from medication management to surgical interventions, tailored to meet individual patient needs and promote optimal health outcomes.
</p>
    <h3>Rehabilitation Services:
</h3>
    <p>
Rehabilitation programs and services, including physical therapy, occupational therapy, and speech therapy, aimed at restoring functionality and improving the quality of life for patients recovering from illness or injury.
</p>
    <h3>Telemedicine and Remote Consultations:
</h3>
    <p>Convenient virtual healthcare services, allowing patients to consult with healthcare professionals, receive medical advice, and access certain types of care from the comfort of their homes.</p>

     
</div>
    </div>
  );
};

export default Heroimg3;
