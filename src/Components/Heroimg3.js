import "./Heroimg4.css";
import React from 'react';

const Heroimg3 = (props) => {
  const { ach, imgs, heading, text, achievements1, achievements2, achievements3, achievements4 , comp,offer , pkg} = props;

  return (
    <div className="hero">
      <div className="mask">
        <img src={imgs} alt="HomeImage" className="home-img" />
      </div>
      <div className="content">
        <h1>{heading}</h1>
        <p>{text}</p>
      </div>
      <h1 className="chead">{ach}</h1>
      <div className="ach">
       
        <p className="achievement1">{achievements1}</p>
        <p className="achievement2">{achievements2}</p>
        <p className="achievement3">{achievements3}</p>
        <p className="achievement4">{achievements4}</p>
      </div>

      <h1>Placement Information of 2023</h1>
      <div className="cmp">
        <h1 className='comp'>{comp}</h1>
        <p>No. of Companies</p>
      </div>
      <div className="ofr">
        <h1 className='off'>{offer}</h1>
        <p>Offers</p>
      </div>
      <div className="hipkg">
        <h1 className='high'>{pkg}</h1>
        <p>Highest CTC</p>
      </div>
     
      
    </div>
  );
};

export default Heroimg3;
