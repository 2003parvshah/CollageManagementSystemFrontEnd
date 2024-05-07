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
      <h1 className="t">Our Major Researches</h1>
      <div className="res">

      <h3>Pharmacogenomics:
</h3>
      <p>Explore research on how genetic variations influence individual responses to medications, leading to personalized treatment plans.
</p>
      <h3>Drug Development and Discovery:
</h3>
      <p>Showcase studies related to the development of new drugs, novel drug delivery systems, and innovative formulations.
</p>
      <h3>Clinical Trials:
</h3>
      <p>Provide information on ongoing clinical trials in the field of pharmacy, focusing on potential breakthroughs and advancements in patient care.
</p>
      <h3>Pharmaceutical Care and Patient Outcomes:
</h3>
      <p>Feature research that examines the impact of pharmacist-led interventions on patient outcomes and overall healthcare quality.
</p>
      <h3>Medication Safety and Adherence:
</h3>
      <p>Discuss studies addressing medication safety measures and interventions to improve patient adherence to prescribed drug regimens.
</p>
      <h3>Pharmacy Informatics:
</h3>
      <p>Highlight research on the integration of technology in pharmacy practice, including electronic health records, telepharmacy, and data analytics.
</p>
      <h3>Pharmacoeconomics:
</h3>
      <p>Explore studies on the economic aspects of drug therapy, including cost-effectiveness analyses and health economic evaluations.
</p>
      <h3>Pharmacy Education and Training:
</h3>
      <p>Share research related to innovative teaching methods, curriculum development, and assessments in pharmacy education.</p>
     </div>
    </div>
  );
};

export default Heroimg3;
