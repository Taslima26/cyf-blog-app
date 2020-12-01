import React, { Fragment, useEffect, useState } from "react";
import "./App.css";
import AddNewPost from "./components/AddNewPost";
import ShowAllPost from "./components/ShowAllPost";
import Navbar from "./components/NavBar";
import AboutUs from "./Pages/About";
import TopTenBlog from "./Pages/TopTenBlog";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch,Link } from 'react-router-dom';
import { BlogsContext, BlogsContextProvider } from "./Contex/BlogsContext"
import EditNewPost from "./components/EditNewPost";
import DetailBlog from "./components/DetailBlog";
import { initialState, reducer } from "./store/reducer/"
import { createContext, useReducer } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { styles } from "./components/css-common";
import { AppBar, Toolbar, Typography, withStyles } from '@material-ui/core';
import { propTypes } from "react-bootstrap/esm/Image";
import logo from './public/cyf_brand.png';
import { Container } from '@material-ui/core';
import CreateBlogButton from "./components/CreateBlogButton";
//import blog from "../src/public/download";

export const AuthContext = createContext();
const App = (props) => {
  const useStyles = makeStyles({
    appBar: {
        backgroundColor: "#343A40",
        height: "50px",
        '& .MuiToolbar-regular': {
            minHeight: "50px"
      },
        justifyContent: "flex-end",
      flexDirection:"row",
     
    },
    name: {
      marginRight: "630px",
      
      
    },
    link: {
        textTransform: "unset",
        color: "#a5a5a5",
        margin: "0 20px",
      textDecoration: "unset",
       display: "flex",
      
        
    },
    linkname: {
      display: "flex",
      
    },

  })
  const classes = useStyles();
  return ( <BlogsContextProvider>
    <>
      
    <Container>
        <div>
           <div style={{
        backgroundImage: `url('/client/src/public/whiteImage.jpg')` ,height:'380px' ,width :'100%'}}
    >
            <img src={logo} style={{ width: 250, marginTop: -7 }} />
            </div>
        <AppBar className={classes.appBar} position="static">
          <Toolbar>
            <Typography className={classes.name} variant="h6">
                CYF-BLOG-APP
            </Typography>
              <Link to={"/home"} className={classes.link}>
              <Typography variant="body2" className={classes.linkname} >
                Home
              </Typography>
            </Link>
            <Link to={"/about"} className={classes.link}>
              <Typography variant="body2" className={classes.linkname}>
                About Us
              </Typography>
            </Link>
            <Link to={"/login"} className={classes.link}>
              <Typography variant="body2" className={classes.linkname}>
                  Login
            </Typography>
                </Link>
           </Toolbar>
          </AppBar>
          
           < CreateBlogButton/>
          <Switch>
            <Route exact path="/" component={ShowAllPost} />
            <Route exact path="/home" component={ShowAllPost}/>
         <Route exact path="/about" component={AboutUs} />
            <Route exact path="/top-ten-blogs" component={TopTenBlog} />
            <Route exact path="/addnewpost" component={AddNewPost}/>
        
            </Switch>
          
      
      <Route exact path="/ShowAllPost/:id/EditNewPost"
              component={EditNewPost}
        />
        
        <Route exact path="/ShowAllPost/:id" component={DetailBlog} />
         
      </div>
         
    </Container>
   </>
      </BlogsContextProvider>
	);
}

export default App;
