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

import Registration from "./Pages/Registration";
import Login from "./Pages/Login";




export function App() {
	

	useEffect(() => {
		
	}, []);

    return (
        
        <BrowserRouter>
        <main>
            
                <Navbar />
                
           
            <Switch>
                <Route path="/registration" component={Registration} exact />
                <Route path="/" component={ShowAllPost}  />
                <Route path="/about" component={About} />
                <Route path="/TopTenBlog" component={TopTenBlog} />
                <Route component={Error} />
            </Switch>
            </main>
            </BrowserRouter>
		
	);
}

export default App;
