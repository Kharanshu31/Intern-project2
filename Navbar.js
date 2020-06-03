import React from 'react';
import "./Navbar.css";
import logo from "../../assets/d2clogo.svg"

const Navbar = () =>{
  return (
    <div className="Navbarbody">
      <img src={logo} className="Navbarlogo" alt="Mainlogo"/>

      <div className="Navbartags">
      <a href="#" className="Navbaranchor">Browse</a>
      <a href="#" className="Navbaranchor">Diaries</a>
      <a href="#" className="Navbaranchor">Services</a>
      </div>

      <button className="Navbarbtn">Publish Oppurtunity</button>
    </div>
  )
}

export default Navbar;
