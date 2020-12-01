import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "./NavBar.css";
import logo from '../public/cyf_brand.png';
import { Navbar, Header, Brand } from 'react-bootstrap';
import blog from "../public/download.jpg"
import { styles } from "./css-common";
import { withStyles } from '@material-ui/core';


const NavBar = (props) => {
  return (
    <div className="navbar">
   
    <div style={{
        backgroundImage: `url('/client/src/public/BLOG-4.jpg')` ,height:'380px' ,width :'100%'}}
    >
        <img src={logo} style={{ width: 250, marginTop: -7 }} />
        <AppBar className={props.appBar} position="static">
          <Toolbar>
            <Typography className={props.name} variant="h6">
              bezKoder
            </Typography>
            <Link to={"/tutorials"} className={classes.link}>
              <Typography variant="body2">
                Tutorials
              </Typography>
            </Link>
          </Toolbar>
        </AppBar>
        


      {/* <Link className="nav-tabs a" to="/">Home </Link>
      <Link className="nav-tabs a" to ="/SignUp">SignUp</Link> 
      <Link className="nav-tabs a" to="/about">About Us </Link>
      <Link className="nav-tabs a" to="/top-ten-blogs">Top 10 Blogs </Link> */}
    
      </div>
      </div>
   
      
      );
}
  export default withStyles(styles)(NavBar);