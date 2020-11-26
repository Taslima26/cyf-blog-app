import React, { useState, useEffect, Fragment } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import client from '../api';

const EditNewPost = (props) => {
  let history = useHistory();
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [content, setContent] = useState("");
  const {id} = useParams();
  console.log(id);
  console.log("id from edit new post", id);
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await client.get(`/getblog/${id}`,)
      console.log(response);
      console.log(response.data.data.blog.sub_title);
      console.log(response.data.data.blog.title);
      console.log(response.data.data.blog.main_content);
      setTitle(response.data.data.blog.title)
      setSubTitle(response.data.data.blog.sub_title)
      setContent(response.data.data.blog.main_content)
    }
    fetchData();
    
  },
    [])
  console.log(subTitle)

  const handleSubmit = async (event) => {
    event.preventDefault();
    const updatedBlogs = await client.put(`http://localhost:3100/api/updateblog/${id}`, {
      title: title,
      sub_title: subTitle,
      main_content:content
    })
    history.push("/");
  }
  

  return (
    <div>
    <div className='container'>
      <h3 className="h4 text-center">Update the post here </h3>
        <form action="">
  <div className="form-group">
    <label htmlFor="Subject">Subject</label>
            <input  id="name" type="text" className="form-control" value={title} onChange={(e)=>setTitle(e.target.value)}  />
        </div>
        <div className="form-group">
    <label htmlFor="Subject">Summary</label>
            <input id="sub_title" type="text" className="form-control" value={subTitle} onChange={(e)=>setSubTitle(e.target.value)} />
        </div>
        <div className="form-group">
    <label htmlFor="exampleFormControlTextarea1">Blog Content</label>
            <textarea id="main_content" className="form-control" id="exampleFormControlTextarea1" rows="4" value={content} onChange={(e)=>setContent(e.target.value)}  input type="text"></textarea>
        </div>
        
          <button onClick={handleSubmit} type="submit" id={id} className="btn btn-secondary form-control" >Update!</button>
          </form>
    </div> 
    </div>
);
}
 
export default EditNewPost;