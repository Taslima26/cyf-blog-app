import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
    return (<div className="navbar">
      <Link className="nav-tabs" to="/">Home </Link>
      <Link className="nav-tabs" to="/about">About Us </Link>
      <Link className="nav-tabs" to="/shop">Shop Now </Link>
    </div>
      );
}
 
export default NavBar;