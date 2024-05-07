import {Routes, Route } from "react-router-dom";

import './index.css'
import Home from "./routes/Home";
import About from "./routes/About";
import Admission from "./routes/Admission";
import Contact from "./routes/Contact";
import Facilities from "./routes/Facilities";
import Placements from "./routes/Placements";
import Technology from "./routes/Technology";
import Apply from "./routes/Apply";
import ApplyLogin from "./routes/ApplyLogin";
import Dental from "./routes/Dental";
import Medical from "./routes/Medical";
import Journalism from "./routes/Journalism";
import Pharmacy from "./routes/Pharmacy";
import CE from './routes/CE'
import EC from "./routes/EC";
import IT from "./routes/IT";
import CH from "./routes/CH";
import MH from "./routes/MH";
import Login from './Components/Login'
import Register from './routes/Register'


import Sprofile from './StudentModule/StudentHome'
import Result from "./StudentModule/Result";
// import ApplicationForm from "./Components/ApplicationForm";
import Ext from './StudentModule/Ext'
import Int from './StudentModule/Int'

import Tmarks from './TeacherModule/AddRes'
import Tatt from './TeacherModule/Att'

import Tprofile from './TeacherModule/TProfile'
import Aprof from './AdminModule/Aprof'
import SemInfo from './AdminModule/Seminfo'
import Addstudent from './AdminModule/Addstudent'
import Curriculum from './AdminModule/Curriculum'

function App() {

  // const [theme,setTheme] =useState('light');
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/admission" element={<Admission/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/facilities" element={<Facilities/>}/>
        <Route path="/apply" element={<Apply/>}/> 
        <Route path="/applyLogin" element={<ApplyLogin/>}/>
        <Route path="/placements" element={<Placements/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/tech" element={<Technology/>}/>
        <Route path="/dental" element={<Dental/>}/>
        <Route path="/medical" element={<Medical/>}/>
        <Route path="/journalism" element={<Journalism/>}/>
        <Route path="/pharmacy" element={<Pharmacy/>}/>
        <Route path="/ced" element={<CE/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/ecd" element={<EC/>}/>
        <Route path="/itd" element={<IT/>}/>
        <Route path="/chd" element={<CH/>}/>
        <Route path="/mhd" element={<MH/>}/>
        <Route path="/login" element={<Login/>}/>
        {/* <Route path="/home" element={<Std/>}/> */}
        <Route path="/result" element={<Result/>}/>
        {/* <Route path="/appform" element={<ApplicationForm/>}/> */}
        <Route path="/ext" element={<Ext/>}/>
         <Route path="/int/:semno" element={<Int/>}/>
         
         <Route path="/tmarks" element={<Tmarks/>}/>
         <Route path="/tatt" element={<Tatt/>}/>
         {/* <Route path="/admin" element={<Admin/>}/> */}
         <Route path="/home" element={<Sprofile/>}/>
         {/* <Route path="/tmod" element={<Tmod/>}/> */}
         <Route path="/tmod" element={<Tprofile/>}/>
         <Route path="/admin" element={<Aprof/>}/>
         <Route path="/si" element={<SemInfo/>}/>
         <Route path="/addstudent" element={<Addstudent/>}/>
         <Route path="/Curriculum" element={<Curriculum/>}/>

      </Routes>
    </>
  
  );
}

export default App;


