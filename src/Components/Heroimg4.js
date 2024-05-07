import "./Heroimg4.css";
import React from 'react';

const Heroimg3 = (props) => {
  const {  imgs, heading, text } = props;

  return (
    <div className="hero">
      <div className="mask">
        <img src={imgs} alt="HomeImage" className="home-img" />
      </div>
      <div className="content">
        <h1>{heading}</h1>
        <p>{text}</p>
      </div>
    
    </div>
  );
};

export default Heroimg3;
