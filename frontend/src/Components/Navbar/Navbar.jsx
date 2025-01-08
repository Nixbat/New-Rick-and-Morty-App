import React from 'react'
import "./Navbar.css"
import { Link, useNavigate } from 'react-router-dom';
import img_portal from "../../assets/portal.gif"

const Navbar = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  }

  return (
    <div className='navbar-content'>
      <div className="nav-logo">
        <img src={img_portal} alt="logo" />
      </div>
      
        <ul className='nav-menu'>
          <li><Link to="/home">Home</Link> </li>
          <li><Link to="/favorites">Favorites</Link></li>
          <li><Link to="/about">About</Link></li>                 
        </ul>

        <div className="nav-logout">
            <button onClick={handleLogout}>Logout</button>
        </div>          
    </div>
  )
};

export default Navbar;