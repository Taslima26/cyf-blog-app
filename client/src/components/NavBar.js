import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "./NavBar.css";
import logo from '../public/cyf_brand.png';
import { Navbar, Header, Brand } from 'react-bootstrap';
import app from "./base";
import blog from "../public/download.jpg"

const NavBar = () => {
  return (
    <div className="navbar">
   
    <div style={{
        backgroundImage: `url('/client/src/public/blog-3.jpg')`}}
    >
      <img src={logo} style={{ width: 250, marginTop: -7 }} />
      <button onClick={() => app.auth().signOut()}>Sign out</button>
      <Link className="nav-tabs a" to="/ShowAllPost">Home </Link>
      <Link className="nav-tabs a" to ="/SignUp">SignUp</Link> 
      <Link className="nav-tabs a" to="/about">About Us </Link>
      <Link className="nav-tabs a" to="/top-ten-blogs">Top 10 Blogs </Link>
    
      </div>
      </div>
   
      
      );
}
 
export default NavBar;