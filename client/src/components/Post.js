import React, { useState, useEffect } from 'react';
import './Post.css';

const Post = ({ title, subTitle, mainContent,  editPost, deletePost, id }) => {
    console.log(title);
    console.log(subTitle);
    console.log("id from post component",id);
    return ( 
    <div className="container">
    <section>
                <h3 className="h3 text-center">{title}</h3>
                <h4 className="h4 text-center">{subTitle}</h4>
                <p className="h6 text-center">{mainContent}</p>
               
    
    <button className="btn  mr-4  btn-info edit-button" onClick={()=>editPost(id)}>Edit</button>
    <button className="btn   btn-info delete-button" onClick={()=>deletePost(id)}>Delete</button>
    </section>
    </div>);
}
 
export default Post;