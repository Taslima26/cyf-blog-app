import React, { useState, useEffect } from 'react';

const Editpost = () => {
    return ( <div className='container'>
      <h3 className="h4 text-center">Update the post here </h3>
        <form>
  <div className="form-group">
    <label htmlFor="Subject">Subject</label>
    <input type="subject" className="form-control"/>
        </div>
        <div className="form-group">
    <label htmlFor="Subject">Summary</label>
    <input type="summary" className="form-control"/>
        </div>
        <div className="form-group">
    <label htmlFor="exampleFormControlTextarea1">Blog Content</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
        </div>
        <div className="form-group">
    <label htmlFor="Subject">Author</label>
    <input type="Author" className="form-control"/>
        </div>
        
        <button type="button" className="btn btn-secondary form-control ">Edit!</button>
          </form>
      </div> );
}
 
export default Editpost;