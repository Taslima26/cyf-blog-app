import React, { Fragment, useEffect, useState } from "react";

import "./App.css";
import AddNewPost from "./components/AddNewPost";
import Header from "./components/header";
import Post from "./components/Post";
import ShowAllPost from "./components/ShowAllPost";



export function App() {
	

	useEffect(() => {
		
	}, []);

	return (
		<div>
			<Header />
			<ShowAllPost />
			</div>
		
	);
}

export default App;
