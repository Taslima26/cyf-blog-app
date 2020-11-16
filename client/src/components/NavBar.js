import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "./NavBar.css";
import logo from '../public/cyf_brand.png';
import { Navbar, Header, Brand } from 'react-bootstrap';
import app from "./base";


const NavBar = () => {
  return (
    <div className="navbar">
    
      {/* <a href="#">&#9776; React-Bootstrap */}
      
      <img src={logo} style={{ width: 250, marginTop: -7 }} />
      <button onClick={() => app.auth().signOut()}>Sign out</button>
      
            {/* </a> */}
     
      <Link className="nav-tabs a" to="/ShowAllPost">Home </Link>
      <Link className="nav-tabs a" to ="/SignUp">SignUp</Link> 
      <Link className="nav-tabs a" to="/about">About Us </Link>
      <Link className="nav-tabs a" to="/top-ten-blogs">Top 10 Blogs </Link>
    
    </div>
      
      );
}
 
export default NavBar;