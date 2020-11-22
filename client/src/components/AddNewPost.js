import React, { useState, useEffect ,Fragment} from 'react';
import "./AddNewPost.css";
const AddNewPost = (props) => {
  
  
  return (
    <Fragment>
    <div className='container '>
     
      <form onSubmit={props.savePost} className="mt-5">
         <h3 className="h4 text-center main-header">Create new post here </h3>
  <div className="form-group">
    <label htmlFor="Subject">Subject</label>
    <input type="text" placeholder="subject"  onChange={props.savePostTitle} ref={props.getTitle} className="form-control"/>
        </div>
        <div className="form-group">
    <label htmlFor="Subject">Summary</label>
            <input type="text" placeholder="summary" onChange={props.savePostSubTitle} ref={props.getsubTitle} className="form-control"/>
        </div>
        <div className="form-group">
    <label htmlFor="exampleFormControlTextarea1">Blog Content</label>
    <textarea className="form-control" placeholder="content"input type="text" onChange={props.savePostContent} ref={props.getContent} id="exampleFormControlTextarea1" rows="4"></textarea>
        </div>
        
        <div className="form-group">
            <button style= {{backgroundColor:'rgb(237,67,67)' ,color:'white'}}type="button" className="save-button btn btn-large" onClick={props.savePost}>Save!</button>
            </div>
          </form>
      </div>
      </Fragment>
    ); 
}
 
export default AddNewPost;