import React, { useState, useContext } from 'react';
import { BlogsContext } from '../Contex/BlogsContext';
import Rating from '@material-ui/lab/Rating';
  
const { blogs, setBlogs, addBlogs } = useContext(BlogsContext);

const DisplayAverageRating = () => {
    return (<div>
        
    </div> );
}
 
export default DisplayAverageRating;