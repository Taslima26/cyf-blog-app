import React, { useState, useEffect ,Fragment} from 'react';

const EditNewPost = ({ title, subTitle, content,
  savePostTitle, savePostSubTitle, savePostContent,
  updatePost, id }) => {

  // console.log("sub title from edit post", subTitle);
  // console.log("content from edit post", content);
  console.log("id from edit new post", id);
 
  return (
    <div>
    <div className='container'>
      <h3 className="h4 text-center">Update the post here </h3>
        <form >
  <div className="form-group">
    <label htmlFor="Subject">Subject</label>
                <input type="text" className="form-control" defaultValue={title} onLoad={savePostTitle} onChange={savePostTitle}/>
        </div>
        <div className="form-group">
    <label htmlFor="Subject">Summary</label>
                <input type="text" className="form-control" defaultValue={subTitle} onChange={savePostSubTitle}/>
        </div>
        <div className="form-group">
    <label htmlFor="exampleFormControlTextarea1">Blog Content</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="4" defaultValue={content} onChange={savePostContent} input type="text"></textarea>
        </div>
        
        <button type="button" id={id} className="btn btn-secondary form-control " onClick={updatePost}>Update!</button>
          </form>
    </div> 
    </div>
);
}
 
export default EditNewPost;