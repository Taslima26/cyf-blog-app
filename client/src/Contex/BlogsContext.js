import React, { useState, createContext } from 'react';

export const BlogsContext = createContext();

export const BlogsContextProvider = props => {
    const [blogs, setBlogs] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [blog, setBlog] = useState([]);
    const addBlogs = (blog) => {
        setBlogs([...blog,blog])
    }
    const addReviews = (review) => {
        setReview([...reviews,review])
    }
    return (

        <BlogsContext.Provider value={{ blogs,setBlogs,addBlogs,blog,setBlog,reviews,setReviews,addReviews}}>
            {props.children}
        </BlogsContext.Provider>
    )
}