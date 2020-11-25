import React, { useState, useEffect ,useRef,Fragment} from 'react';
import AddNewPost from './AddNewPost';
import Post from './Post';
import EditNewPost from './EditNewPost';
//import Header from './Header';
import './ShowAllPost.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const ShowAllPost = () => {
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
    

    
    //POST request using fetch inside useEffect React hook
    // useEffect(()=>{
    //  const requestOptions = {
    //         method: 'GET',
    //         headers: { 'Content-Type': 'application/json' },
        
    //     };
    //     fetch('http://localhost:3100/api/getall', requestOptions)
    //         .then(response => response.json())
    //         .then(data => setAllPost(data));

    // }, [])
    // console.log(allPost);

    useEffect(() => {
    const fetchData = async () => {
      const response = await axios(`http://localhost:3100/api/getall`,)
      setAllPost(response.data.data.blogs)
    }
    fetchData();
    
  },
  [])
     
     const savePostTitle = event => {
          setTitle(event.target.value);
       //  console.log(title);
    };
    const savePostSubTitle = event => {
        setSubTitle(event.target.value);
        //console.log(event.target);
        //console.log(subTitle);
  };
  const savePostContent = event => {
      setContent(event.target.value);
     // console.log(content);
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

    const handleUpadte = (id) => {
        history.push(`/ShowAllPost/${id}/EditNewPost`)
    }
    const updatePost = async (event) => {
        event.preventDefault();
        try {
            
        const response = await fetch(`http://localhost:3100/api/updateblog/${event.currentTarget.id}`, {
                        method: "PUT",
                        headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                           
                            title:title,
                            sub_title:subTitle,
                            main_content: content
                        })
                       
        // }).then(response => response.json())
        //     .then(result => {
        //         console.log("result", result),
        //             setAllPost({result})
            })
             console.log(response);
            console.log(Post); 
            // const updatedPost = allPost.map(post => {
    //   if (post.id === editPostId) {
       
    //     return {
    //       ...post,
    //         title: title || post.title,
    //         summary: subTitle || post.subTitle,
    //         content: content || post.content,
             
    //     };
            
                }

            
        // )
        // }
    
        catch (err) {
            console.error(`${err.code } ${err.message}`);
        }
    // const updatedPost = allPost.map(post => {
    //   if (post.id === editPostId) {
       
    //     return {
    //       ...post,
    //         title: title || post.title,
    //         summary: subTitle || post.subTitle,
    //         content: content || post.content,
             
    //     };
      }
    //   console.log(post)
    //   return post;
    // });
//    
//     
//   };
    const savePost =async  event => {
        event.preventDefault();
        try {
            console.log("from save post", title);
            console.log("allPost from savePost", subTitle);
            //const body=  setAllPost([...allPost, { title, sub_title,main_content }]);
           // console.log("body from save post", { body })
            const body={
                    title:  title ,
                    sub_title: subTitle ,
                    main_content:  content 

            }
            console.log("body before save post", body);
            const response = await fetch("http://localhost:3100/api/addblog", {
                method: "POST",
                headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
                 },
               body: JSON.stringify(body)
            })
             console.log("from save post",response);
        }
       
        catch (err) {
            console.error(err);
        }
   

      
       
        setTitle("");
        setSubTitle("");
        setContent("");
        
         getTitle.current.value = "";
         getsubTitle.current.value = "";
         getContent.current.value = "";
         
        toggleCreateNewPostComponent();

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

      console.log(allPost.blogs);
    return (<div className="container-frontpage">
        <Fragment>
            
            <h2 className='all-blogs-header h2 '>Latest Blogs</h2>
             <button  className="btn btn-sm main-button"  style={{backgroundColor:'rgb(237,67,67)',color:'white'}} onClick={toggleCreateNewPostComponent}>Create New Post</button>
           
            {!allPost.length ?
                
                 (null) :
                allPost.map(eachPost => {
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