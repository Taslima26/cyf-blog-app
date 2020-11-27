import React, { Fragment, useEffect, useState } from "react";
import "./App.css";
import AddNewPost from "./components/AddNewPost";


import ShowAllPost from "./components/ShowAllPost";
import Navbar from "./components/NavBar";
import AboutUs from "./Pages/About";
import TopTenBlog from "./Pages/TopTenBlog";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { AuthProvider } from "./components/Auth";
import { BlogsContextProvider } from "./Contex/BlogsContext"
import EditNewPost from "./components/EditNewPost";
import DetailBlog from "./components/DetailBlog";


const App = () => {
  return (

   
     //<div className="logo" style={{backgroundImage: `url(${HeaderImage}` }}>
   <BlogsContextProvider>
    <AuthProvider>
      
      <Navbar/>
     <Route exact path="/" component={ShowAllPost} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/login" component={Login} />
        <Route exact path="/about" component={AboutUs} />
        <Route exact path="/ShowAllPost/:id/EditNewPost"
              component={EditNewPost}
        />
        <Route exact path="/AddNewPost" component={AddNewPost}/>
        <Route exact path="/top-ten-blogs" component={TopTenBlog} />
        <Route exact path="/ShowAllPost/:id" component={DetailBlog}/>
   
    
      </AuthProvider>
      </BlogsContextProvider>
   
      
	);
}

export default App;
