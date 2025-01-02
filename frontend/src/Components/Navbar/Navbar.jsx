import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom';
import img_portal from "../../assets/portal.gif"

const Navbar = () => {
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
            <button>Logout</button>
        </div>

          {/* <a href="#" class="hbtn hb-fill-bottom hpill">Logout</a> */}
    </div>
  )
};

export default Navbar;