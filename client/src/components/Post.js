import React, { useState, useEffect } from 'react';
import './Post.css';

const Post = ({subject,summary,content,author,editPost,deletePost,id}) => {
    return ( 
    <div className="container">
    <section>
                <h3 className="h3 text-center">{subject}</h3>
                <h4 className="h4 text-center">{summary}</h4>
                <h6 className="h6 text-center">{author}</h6>
                <p className="text-center"> {content}</p>
    
    <button className="btn  mr-4  btn-info edit-button" onClick={()=>editPost(id)}>Edit</button>
    <button className="btn   btn-info delete-button" onClick={()=>deletePost(id)}>Delete</button>
    </section>
    </div>
            

     );
}
 
export default Post;