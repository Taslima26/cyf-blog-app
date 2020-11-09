import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "./NavBar.css";
import logo from '../public/cyf_brand.png';
import { Navbar, Header, Brand } from 'react-bootstrap';


const NavBar = () => {
  return (
    <div className="navbar">
    
      {/* <a href="#">&#9776; React-Bootstrap */}
      
          <img src={logo} style={{ width: 250, marginTop: -7 }} />
            {/* </a> */}
     
      <Link className="nav-tabs a" to="/">Home </Link>
      <Link className="nav-tabs a" to ="../Pages/Login.js">Login</Link> 
      <Link className="nav-tabs a" to="/about">About Us </Link>
      <Link className="nav-tabs a" to="/top-ten-blogs">Top 10 Blogs </Link>
    
    </div>
      
      );
}
 
export default NavBar;