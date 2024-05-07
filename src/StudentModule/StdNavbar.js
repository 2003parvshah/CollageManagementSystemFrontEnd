import React ,{useState} from 'react'
import {FaBars , FaTimes} from "react-icons/fa"
import './Navbar.css';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';



const StdNavbar = () => {
  const navigate = useNavigate();
  const[click,setClick] =useState(false);

  const handleClick = () =>setClick(!click);
  const[color,setColor] = useState(false);
  const changeColor = () =>{
    if(window.scrollY >= 100)
    {
      setColor(true);
    }
    else{
      setColor(false);
    }
  };
  window.addEventListener("scroll",changeColor)



  
  const handllogout = async (e) => {
    e.preventDefault();
    
    console.log("logout");
    localStorage.removeItem('user');
    navigate('/');
  };









  function check() {
  const user = localStorage.getItem('user');
  if (user) {
    console.log('User is logged in:', user);
    // Continue with your logic if the 'user' item is present
  } else {
    console.log('User is not logged in');
    navigate('/');
    // Handle the case when the 'user' item is not present
  }
}
check();

  return (
    <div className={color ? "header header-bg" : "header"}>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/result">Exam Result</Link>
        </li>
        <li>
          {/* <Link to="/">Log Out</Link> */}
          <button className='btn' onClick={handllogout}>log out</button>
        </li>
        
      </ul>
      <div className="hamburger" onClick={handleClick}>
        { click ? <FaTimes size={20} style={{color:"#fff"}}/> : <FaBars size={20} style={{color:"#fff"}}/>}
        
        
      </div>
    </div>












  )
}

export default StdNavbar;
