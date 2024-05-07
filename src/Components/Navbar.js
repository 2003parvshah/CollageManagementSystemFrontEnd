import React ,{useState} from 'react'
import logo_dark from '../assets/logo-white.png'
import {FaBars , FaTimes} from "react-icons/fa"
import './Navbar.css';
import { Link } from 'react-router-dom'

const Navbar = () => {

  const[click,setClick] =useState(false);

  const handleClick = () =>setClick(!click);
  const[color,setColor] = useState(false);
  const changeColor = () =>{
    if(window.scrollY>=100)
    {
      setColor(true);
    }
    else{
      setColor(false);
    }
  };
  window.addEventListener("scroll",changeColor)

    // const toggle_mode = () => {
    //     theme == 'light' ? setTheme('dark') : setTheme('light');
    // }

    
  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
      <img src={logo_dark} alt="" className='logo'/>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
       <li className='nl'>
          <Link to="/apply">apply for Addmission</Link>
        </li> 
        <li className='nl'>
          <Link to="/">Home</Link>
        </li>
        <li className='nl'>
          <Link to="/about">About</Link>
        </li>
        <li className='nl'>
          <Link to="/facilities">Facilities</Link>
        </li>
        <li className='nl'>
          <Link to="/placements">Placements</Link>
        </li>
        <li className='nl'>
          <Link to="/admission">Admission</Link>
        </li>
        <li className='nl'>
          <Link to="/contact">Contact Us</Link>
        </li>
        <li className='nl'>
          <Link to="/login">Log In</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        { click ? <FaTimes size={20} style={{color:"#fff"}}/> : <FaBars size={20} style={{color:"#fff"}}/>}
        
        
      </div>
    </div>












    // <div className='navbar' >
    //   <img src={theme == 'light' ? logo_light : logo_dark} alt="" className='logo'/>
    //   <ul >
    //     <li >Home</li>
    //     <li >About</li>
    //     <li >Facilities</li>
    //     <li >Placements</li>
    //     <li >Admission</li>
    //     <li >Contact Us</li>
    //   </ul>

    //   <div className='search-box'  >
    //     <input type="text" placeholder='Search'/>
    //     <img src={theme == 'light' ? search_icon_light : search_icon_dark} alt="" />
    //   </div>

    //   <img src={theme == 'light' ?  toggle_light : toggle_dark} alt="" onClick={()=>{toggle_mode()}}className='toggle' />
    //   <h3 className='login'>Login</h3>
    // </div>
  )
}

export default Navbar
