import React, { useState, useEffect } from 'react';

const EditNewPost = ({ subject, summary, content, author,
              savePostSubject, savePostSummary, savePostContent,
            savePostAuthor, updatePost }) =>
{
  return (
    <div className='container'>
      <h3 className="h4 text-center">Update the post here </h3>
        <form>
  <div className="form-group">
    <label htmlFor="Subject">Subject</label>
                <input type="subject" className="form-control" defaultValue={subject} onChange={savePostSubject}/>
        </div>
        <div className="form-group">
    <label htmlFor="Subject">Summary</label>
                <input type="summary" className="form-control" defaultValue={summary} onChange={savePostSummary}/>
        </div>
        <div className="form-group">
    <label htmlFor="exampleFormControlTextarea1">Blog Content</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="4" defaultValue={content} onChange={savePostContent}></textarea>
        </div>
        <div className="form-group">
    <label htmlFor="Subject">Author</label>
                <input type="Author" className="form-control" defaultValue={author} onChange={savePostAuthor}/>
        </div>
        
        <button type="button" className="btn btn-secondary form-control " onClick={updatePost}>Edit!</button>
          </form>
      </div> );
}
 
export default EditNewPost;