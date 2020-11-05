import React, { Fragment, useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import "./App.css";
import AddNewPost from "./components/AddNewPost";
import Header from "./components/header";
import Post from "./components/Post";
import ShowAllPost from "./components/ShowAllPost";
import Navbar from "./components/Navbar";
import About from "../Pages/About";
import TopTenBlog from "../Pages/TopTenBlog";




export function App() {
	

	useEffect(() => {
		
	}, []);

	return (
		<main>
            <Navbar />
            <Switch>
                <Route path="/" component={ShowAllPost} exact />
                <Route path="/about" component={About} />
                <Route path="/TopTenBlog" component={TopTenBlog} />
                <Route component={Error} />
            </Switch>
        </main>
		
	);
}

export default App;
