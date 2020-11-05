import React, { useState, useEffect ,useRef} from 'react';
import AddNewPost from './AddNewPost';
import Post from './Post';
import EditNewPost from './EditNewPost';
//import Header from './Header';
import './ShowAllPost.css';

const ShowAllPost = () => {
    const [subject, setSubject] = useState("");
    const [summary, setSummary] = useState("");
    const [content, setContent] = useState("");
    const [author, setAuthor] = useState("");
    const [allPost, setAllPost] = useState([]);
    const [isCreateNewPost, setIsCreateNewPost] = useState(false);
    const [isModifyPost, setIsModifyPost] = useState(false);
    const [editPostId, setEditPostId] = useState("");


    const getSubject = useRef();
    const getSummary = useRef();
    const getContent = useRef();
    const getAuthor = useRef();

     const savePostSubject = event => {
         setSubject(event.target.value);
         console.log(subject);
    };
    const savePostSummary = event => {
        setSummary(event.target.value);
        //console.log(event.target);
        console.log(summary);
  };
  const savePostContent = event => {
      setContent(event.target.value);
      console.log(content);
    };
    
    const savePostAuthor = event => {
        setAuthor(event.target.value);
        console.log(author);
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
            subject: subject || post.subject,
            summary: summary || post.summary,
            content: content || post.content,
             author: author || post.author
        };
      }
      console.log(post)
      return post;
    });
    setAllPost(updatedPost);
    toggleEditPostComponent();
  };
    const savePost = event => {
        event.preventDefault();
        const id = Date.now();
        setAllPost([...allPost, { subject, summary, content, author,id }]);
       
        setSubject("");
        setSummary("");
        setContent("");
        setAuthor("");
         getSubject.current.value = "";
         getSummary.current.value = "";
         getContent.current.value = "";
         getAuthor.current.value = "";
        toggleCreateNewPostComponent();

    }
    if (isCreateNewPost) {
        return (
            <>
                <AddNewPost
                    savePostSubject={savePostSubject}
                    savePostSummary={savePostSummary}
                    savePostAuthor={savePostAuthor}
                    savePostContent={savePostContent}
                    getSubject={getSubject}
                    getSummary={getSummary}
                    getContent={getContent}
                    getAuthor={getAuthor}
                    savePost={savePost} />
                </>

        )
    }

    else if (isModifyPost) {
        const post = allPost.find(post => {
            return post.id === editPostId;
        })
        return (<EditNewPost
                subject={post.subject}
                summary={post.summary}
                content={post.content}
                author={post.author}
                updatePost={updatePost}
                savePostSubject={savePostSubject}
                savePostSummary={savePostSummary}
                savePostAuthor={savePostAuthor}
                savePostContent={savePostContent}
                
      />
    );
    }

    return (<div className="container-frontpage">
        <>
            
            <h2 className='all-blogs-header h2 '>Latest Blogs</h2>
             <button  className="btn btn-info btn-sm main-button"  onClick={toggleCreateNewPostComponent}>Create New Post</button>
            
            {!allPost.length ?
                
                 (null) :
                allPost.map(eachPost => {
                    return (
                        <Post
                            id={eachPost.id}
                            key={eachPost.key}
                            subject={eachPost.subject}
                            summary={eachPost.summary}
                            content={eachPost.content}
                            author={eachPost.author}
                            editPost={editPost}/>
                    )
                })
            }
           
        </>
        
    </div>  );
}
 
export default ShowAllPost;