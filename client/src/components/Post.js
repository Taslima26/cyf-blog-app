import React, { useState, useEffect } from 'react';

const Post = ({subject,summary,content,author}) => {
    return ( 
    <div className="container">
    <section>
                <h3 className="h3 text-center">{subject}</h3>
                <h4 className="h4 text-center">{summary}</h4>
                <h6 className="h6 text-center">{author}</h6>
                <p className="text-center"> {content}</p>
    
    <button className="btn btn-warning mr-4 ">Edit</button>
    <button className="btn btn-danger ">Delete</button>
    </section>
    </div>
            

     );
}
 
export default Post;