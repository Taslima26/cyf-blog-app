import React, { Fragment, useEffect, useState } from "react";
import "./App.css";
import AddNewPost from "./components/AddNewPost";
import ShowAllPost from "./components/ShowAllPost";
import Navbar from "./components/NavBar";
import AboutUs from "./Pages/About";
import TopTenBlog from "./Pages/TopTenBlog";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { BlogsContextProvider } from "./Contex/BlogsContext"
import EditNewPost from "./components/EditNewPost";
import DetailBlog from "./components/DetailBlog";
import Home from "./components/Home";
import Login from "./components/Login";
import { initialState, reducer } from "./store/reducer/"
import { createContext, useReducer } from 'react';




export const AuthContext = createContext();
const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (

   
   <AuthContext.Provider
      value={{
        state,
        dispatch
      }}
    > 
   <BlogsContextProvider>
        <Navbar />
        <Route path="/login" component={Login}/>
        <Route path="/" component={Home}/>
        <Route exact path="/ShowAllPost" component={ShowAllPost}/>
        <Route exact path="/about" component={AboutUs} />
        <Route exact path="/ShowAllPost/:id/EditNewPost"
              component={EditNewPost}
        />
        <Route exact path="/AddNewPost" component={AddNewPost}/>
        <Route exact path="/top-ten-blogs" component={TopTenBlog} />
        <Route exact path="/ShowAllPost/:id" component={DetailBlog}/>
      </BlogsContextProvider>
      </AuthContext.Provider> 
   
      
	);
}

export default App;
