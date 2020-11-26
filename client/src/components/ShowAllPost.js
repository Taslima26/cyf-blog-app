import React, { useState, useEffect ,useRef,Fragment, useContext} from 'react';
import AddNewPost from './AddNewPost';
import Post from './Post';
import EditNewPost from './EditNewPost';import './ShowAllPost.css';
import { useHistory } from 'react-router-dom';
import client from '../api';
import { BlogsContext } from '../Contex/BlogsContext';
import Card from './Card';



const ShowAllPost = (props) => {

    let history = useHistory();
    const { blogs, setBlogs,addBlogs } = useContext(BlogsContext);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await client.get("/getall");
                console.log(response);
                setBlogs(response.data.data.blogs);
            }
            catch (error) {
                console.log(error)
            }
            
        }
        fetchData();
    },[])

    const handleUpadte = (id) => {
        history.push(`/ShowAllPost/${id}/EditNewPost`)
    }
    const handleCreate = () => {
        history.push(`/AddNewPost`)
    }
    
    
    const deletePost = async (id) => {
        try {
            const response = await client.delete(`/deleteblog/${id}`)
            setBlogs(blogs.filter(blog=>blog.id!==id))
            console.log(response)
            
        } catch (error) {
            console.log(error.message);
        }
    }
    
    return (<div className="container-frontpage">
        <Fragment>
            
            <h2 className='all-blogs-header h2 '>Latest Blogs</h2>
             <button  className="btn btn-sm main-button"  style={{backgroundColor:'rgb(237,67,67)',color:'white'}} onClick={handleCreate}>Create New Post</button>
           
            {!blogs.length ?
                
                 (null) :
                blogs.map(eachPost => {
                    return (
                        <Card key={eachPost.id}
                             title={eachPost.title}
                                subTitle={eachPost.sub_title}
                            mainContent={eachPost.main_content}
                             id={eachPost.id}
                            deletePost={deletePost}
                            
                            handleUpdate={handleUpadte}/>
                            
                        
                        
                    )
                })
            }
           
        </Fragment>
        
    </div>  );
}
 
export default ShowAllPost;