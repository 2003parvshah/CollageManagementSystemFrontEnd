import "./Heroimg4.css";
import React from 'react';
import news from '../assets/news.jpg'
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
      <h1 className="t">Workshops By Leading News Channels</h1>
      <div className="ws">

   <h3>News Writing and Reporting:
</h3>
   <p>Learn the fundamentals of crafting compelling news stories, conducting interviews, and gathering information ethically.
</p>
   <h3>Digital Journalism and Multimedia Storytelling:
</h3>
   <p>
Explore the world of digital media with sessions on online journalism, social media reporting, and creating multimedia content to engage diverse audiences.
</p>
   <h3>Media Ethics and Responsible Reporting:
</h3>
   <p>
Understand the ethical considerations in journalism, including accuracy, fairness, and the responsible handling of sensitive topics.
</p>
   <h3>Data Journalism and Visualization:
</h3>
   <p>Delve into the role of data in journalism, exploring how to gather, analyze, and present data-driven stories effectively.
</p>
   <h3>Interview Techniques and Feature Writing:
</h3>
   <p>Enhance your interviewing skills and discover the art of feature writing to add depth and context to your storytelling.
</p>
   <h3>Pitching and Freelance Journalism:
</h3>
   <p>Gain insights into pitching story ideas to editors and explore opportunities in freelance journalism.</p>
     
</div>

<div className="rec">
    <h1>Our Top Recruiter/Partners</h1>

    <img className="n" src={news} alt="" />
</div>
    </div>
  );
};

export default Heroimg3;
