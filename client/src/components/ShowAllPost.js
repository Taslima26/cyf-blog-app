import React, { useState, useEffect ,useRef} from 'react';
import AddNewPost from './AddNewPost';
import Post from './Post';

const ShowAllPost = () => {
    const [subject, setSubject] = useState("");
    const [summary, setSummary] = useState("");
    const [content, setContent] = useState("");
    const [author, setAuthor] = useState("");
    const [allpost, setAllPost] = useState([]);
    const [isCreateNewPost, setIsCreateNewPost] = useState(false);

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
    
    const toggleCreateNewPost = () => {
        setIsCreateNewPost(!isCreateNewPost);
    }
    const savePost = event => {
        event.preventDefault();
        const id = Date.now();
        setAllPost([...allpost, { subject, summary, content, author,id }]);
        console.log(allpost);
        setSubject("");
        setSummary("");
        setContent("");
        setAuthor("");
         getSubject.current.value = "";
         getSummary.current.value = "";
         getContent.current.value = "";
         getAuthor.current.value = "";
        toggleCreateNewPost();

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

    return (<div>
        <>
             <button  className="btn btn-info" onClick={toggleCreateNewPost}>Create New Post</button>
            <h2>All Blogs</h2>
            {!allpost.length ?
                
                (<div><h3>There is no blogs yet!</h3></div>) :
                allpost.map(eachPost => {
                    return (
                        <Post
                            id={eachPost.id}
                            key={eachPost.key}
                            subject={eachPost.subject}
                            summary={eachPost.summary}
                            content={eachPost.content}
                            author={eachPost.author}/>
                    )
                })
            }
           
        </>
        
    </div>  );
}
 
export default ShowAllPost;