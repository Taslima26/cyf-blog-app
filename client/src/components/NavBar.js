import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
    return (<div className="navbar">
      <Link className="nav-tabs a" to="/">Home </Link>
      <Link className="nav-tabs a" to="/about">About Us </Link>
      <Link className="nav-tabs a" to="/shop">Shop Now </Link>
    </div>
      );
}
 
export default NavBar;