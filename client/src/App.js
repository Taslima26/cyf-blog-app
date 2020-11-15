import React, { Fragment, useEffect, useState } from "react";


import "./App.css";
import AddNewPost from "./components/AddNewPost";
import Header from "./components/header";
import Post from "./components/Post";
import ShowAllPost from "./components/ShowAllPost";
import Navbar from "./components/NavBar";
import About from "./Pages/About";
import TopTenBlog from "./Pages/TopTenBlog";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./components/Home";
import Login from './components/Login';
import SignUp from "./components/SignUp";
import { AuthProvider } from "./components/Auth";
import PrivateRoute from "./components/PrivateRoute";



function App() {
    
	useEffect(() => {
		
	}, []);

  return (
    <AuthProvider>
      <BrowserRouter>
        <main>
            
        <Navbar />
        <Switch>
                     
            <Route path="/" component={ShowAllPost} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route path="/about" component={About} />
              <Route path="/TopTenBlog" component={TopTenBlog} />
             </Switch>
            </main>
      </BrowserRouter>
      </AuthProvider>
		
	);
}

export default App;
