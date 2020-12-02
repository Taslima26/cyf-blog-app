import React, { useState, useEffect ,useRef,Fragment, useContext} from 'react';
import AddNewPost from './AddNewPost';
import EditNewPost from './EditNewPost';import './ShowAllPost.css';
import { useHistory } from 'react-router-dom';
import client from '../api';
import { BlogsContext } from '../Contex/BlogsContext';
import Card from './Card';
import GridList from '@material-ui/core/GridList';
import Grid from '@material-ui/core/Grid';
import GridListTile from '@material-ui/core/GridListTile';
import { makeStyles } from '@material-ui/core/styles';
import container from '@material-ui/core/Container';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import Button from '@material-ui/core/Button';




const ShowAllPost = (props) => {

    let history = useHistory();
    const { blogs, setBlogs, addBlogs } = useContext(BlogsContext);
  
    
    
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
    const handleGoToDetailsPage = (id) => {
        history.push(`/ShowAllPost/${id}`)
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
    const useStyles = makeStyles((theme) => ({
        buttonColor: {
      color:'#ed4343',
        },
        alignHeader: {
            display: "flex",
            alignContent:'space-evenly',
        },
         buttonMargin: {    
            margin: '30px',   
  },
    }));
    const classes = useStyles();
    return (
        <Container>
            {/* <Container className={classes.alignHeader}> */}
            {/* <Typography className={classes.buttonColor} variant="h3" gutterBottom>
        All Blogs!!!
      </Typography> */}
                {/* <Button className={classes.buttonColor} size="small"variant="contained"  onClick={handleCreate}>
  Create a blog!!
</Button> */}
            {/* </Container> */}
            
         <div className={classes.root}>
            
             {blogs.map((tile) => (
        
                 <Card id={tile.id}
                     title={tile.title}
                     subTitle={tile.sub_title}
                     mainContent={tile.main_content}
                     createdOnDate={tile.create_on_date}
                     deletePost={deletePost}
                     handleUpdate={handleUpadte}
                     handleGoToDetailsPage={handleGoToDetailsPage}
                />
        ))}
                    
                    
                   
            </div>

   </Container>
                
           
       
        
  );
}
 
export default ShowAllPost;