import React, { useState, useEffect } from 'react';
import "./AddNewPost.css";
const AddNewPost = (props) => {
  
  
  return (
    <>
    <div className='container '>
     
      <form onSubmit={props.savePost}>
         <h3 className="h4 text-center main-header">Create new post here </h3>
  <div className="form-group">
    <label htmlFor="Subject">Subject</label>
    <input type="subject" placeholder="subject"  onChange={props.savePostSubject} ref={props.getSubject} className="form-control"/>
        </div>
        <div className="form-group">
    <label htmlFor="Subject">Summary</label>
            <input type="summary" placeholder="summary" onChange={props.savePostSummary} ref={props.getSummary}className="form-control"/>
        </div>
        <div className="form-group">
    <label htmlFor="exampleFormControlTextarea1">Blog Content</label>
    <textarea className="form-control" placeholder="content"input type="content" onChange={props.savePostContent} ref={props.getContent} id="exampleFormControlTextarea1" rows="4"></textarea>
        </div>
        <div className="form-group">
    <label htmlFor="Subject">Author</label>
    <input type="Author" placeholder="author" onChange={props.savePostAuthor} ref={props.getAuthor} className="form-control"/>
        </div>
        <div className="form-group">
            <button type="button" className="btn btn-info save-button btn-lg" onClick={props.savePost}>Save!</button>
            </div>
          </form>
      </div>
      </>
    );
}
 
export default AddNewPost;