import React from 'react'
import './NavBar.css';
import logo from '../../assets/images/logo02.png';
import { AiOutlineMenu } from "react-icons/ai";
function NavBar() {
  return (
    <div className="navbar">
      <img src={logo} alt="Logo" />
      <div className="nav-links">
        <ul>
          <li>About</li>
          <li>Meet Characters</li>
          <li>Vampire</li>
          <li>Frankenstein</li>
          <li>Pumpkin King</li>
          <li>Witch</li>
          <button className="btnPrimary">Enter the Haunted tales</button>
        </ul>
          <AiOutlineMenu className='ham-menu'/>
      </div>
    </div>
  )
}

export default NavBar