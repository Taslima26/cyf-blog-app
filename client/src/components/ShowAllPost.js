import React, { useState, useEffect ,useRef,Fragment, useContext} from 'react';
import AddNewPost from './AddNewPost';
import Post from './Post';
import EditNewPost from './EditNewPost';
import './ShowAllPost.css';
import { useHistory } from 'react-router-dom';
import client from '../api';
import { BlogsContext } from '../Contex/BlogsContext';


const ShowAllPost = (props) => {
    const [title, setTitle] = useState("");
    const [subTitle, setSubTitle] = useState("");
    const [content, setContent] = useState("");
    const [allPost, setAllPost] = useState([]);
    const [isCreateNewPost, setIsCreateNewPost] = useState(false);
    const [isModifyPost, setIsModifyPost] = useState(false);
    const [editPostId, setEditPostId] = useState("");


    const getTitle = useRef();
    const getsubTitle = useRef();
    const getContent = useRef();
    let history = useHistory();
    const { blogs, setBlogs,addBlogs } = useContext(BlogsContext);
    //const { addBlogs } = useContext(BlogsContext);
    
    
     const savePostTitle = event => {
          setTitle(event.target.value);
       
    };
    const savePostSubTitle = event => {
        setSubTitle(event.target.value);
    };
  const savePostContent = event => {
      setContent(event.target.value);
    };
    
    const toggleCreateNewPostComponent = () => {
        setIsCreateNewPost(!isCreateNewPost);
    }

    const toggleModifyPostComponent = () => {
        setIsModifyPost(!isModifyPost);
    }

    
    const editPost = id => {
        setEditPostId(id);
        console.log(id);
        toggleModifyPostComponent();
    }
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
    
    
    const savePost = async(event)=>{
        event.preventDefault();
        try {
           const response= await client.post("/addblog", {
                title: title,
                sub_title: subTitle,
                main_content: content
            })
            console.log(response);
            addBlogs(response.data.data.blog);
             history.push("/");
        } catch (error) {
            console.log(error.message);
        }
        
     }
    console.log("all post before else if edit", allPost);
    
    const deletePost = async(id) => {
        try {
            const deletedata = await fetch(`http://localhost:3100/api/deleteblog/${id}`,{
                method:"DELETE"
            })
           // console.log(allPost.filter(blog=>blog.id));
            setAllPost(allPost.filter(blog => blog.id !== id));
            console.log(deletedata);
           
            
        } catch (error) {
            console.error(error.message);
        }
    }
    
    if (isCreateNewPost) {
        return (
            <>
                <AddNewPost
                    savePostTitle={savePostTitle}
                    savePostSubTitle={savePostSubTitle}
                    savePostContent={savePostContent}
                    getTitle={getTitle}
                    getsubTitle={getsubTitle}
                    getContent={getContent}
                    savePost={savePost} />
                </>

        )
    }
    

    else if (isModifyPost) {
        console.log("from else if")
        const post = allPost.find(post => {
        
            return post.id === editPostId;
        })
      
        return (<EditNewPost
                title={post.title}
                subTitle={post.sub_title}
                content={post.main_content}
                updatePost={updatePost}
                savePostTitle={savePostTitle}
                savePostSubTitle={savePostSubTitle}
                savePostContent={savePostContent}
                    handleUpadte={handleUpadte}
            id={post.id}
                
      />
    );
    }

    return (<div className="container-frontpage">
        <Fragment>
            
            <h2 className='all-blogs-header h2 '>Latest Blogs</h2>
             <button  className="btn btn-sm main-button"  style={{backgroundColor:'rgb(237,67,67)',color:'white'}} onClick={toggleCreateNewPostComponent}>Create New Post</button>
           
            {!blogs.length ?
                
                 (null) :
                blogs.map(eachPost => {
                    return (
                        <Post
                            
                            key={eachPost.id}
                            title={eachPost.title}
                            subTitle={eachPost.sub_title}
                            mainContent={eachPost.main_content}
                            id={eachPost.id}
                            deletePost={deletePost}
                            editPost={editPost}
                            handleUpdate={handleUpadte}/>
                    )
                })
            }
           
        </Fragment>
        
    </div>  );
}
 
export default ShowAllPost;