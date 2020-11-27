import React, { useState, createContext } from 'react';

export const BlogsContext = createContext();

export const BlogsContextProvider = props => {
    const [blogs, setBlogs] = useState([]);
    const [blog, setBlog] = useState([]);
    const addBlogs = (blog) => {
        setBlogs([...blog,blog])
    }
    return (

        <BlogsContext.Provider value={{ blogs,setBlogs,addBlogs,blog,setBlog}}>
            {props.children}
        </BlogsContext.Provider>
    )
}