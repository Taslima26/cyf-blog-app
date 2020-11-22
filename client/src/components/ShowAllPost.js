import React, { useState, useEffect ,useRef} from 'react';
import AddNewPost from './AddNewPost';
import Post from './Post';
import EditNewPost from './EditNewPost';
//import Header from './Header';
import './ShowAllPost.css';
import axios from 'axios';

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
    

    
    // POST request using fetch inside useEffect React hook
    useEffect(()=>{
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        
        };
        fetch('http://localhost:3100/api/getall', requestOptions)
            .then(response => response.json())
            .then(data => setAllPost(data));

    }, [])
     
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

    const toggleEditPostComponent = () => {
        setIsModifyPost(!isModifyPost);
    }
    const editPost = id => {
        setEditPostId(id);
        console.log(id);
        toggleEditPostComponent();
    }
    const updatePost = (event) => {
    event.preventDefault();
    const updatedPost = allPost.map(post => {
      if (post.id === editPostId) {
       
        return {
          ...post,
            title: title || post.title,
            summary: subTitle || post.subTitle,
            content: content || post.content,
             
        };
      }
      console.log(post)
      return post;
    });
    setAllPost(updatedPost);
    toggleEditPostComponent();
  };
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
        const post = allPost.find(post => {
            return post.id === editPostId;
        })
        return (<EditNewPost
                subject={post.title}
                summary={post.subTitle}
                content={post.content}
                updatePost={updatePost}
                savePostTitle={savePostTitle}
                savePostSubTitle={savePostSubTitle}
                savePostContent={savePostContent}
                
      />
    );
    }
    console.log(allPost);
    return (<div className="container-frontpage">
        <>
            
            <h2 className='all-blogs-header h2 '>Latest Blogs</h2>
             <button  className="btn btn-info btn-sm main-button"  onClick={toggleCreateNewPostComponent}>Create New Post</button>
           
            {!allPost.length ?
                
                 (null) :
                allPost.map(eachPost => {
                    return (
                        <Post
                            
                            key={eachPost.id}
                            title={eachPost.title}
                            subTitle={eachPost.sub_title}
                            mainContent={eachPost.main_content}

                            editPost={editPost}/>
                    )
                })
            }
           
        </>
        
    </div>  );
}
 
export default ShowAllPost;