import React, { useState, useEffect ,useRef,Fragment, useContext} from 'react';
import AddNewPost from './AddNewPost';
import Post from './Post';
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
    const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
   // overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
   // flexDirection: 'row',
     alignContent: 'space-around',
    
  },
  gridList: {
    width: 4000,
    height: 2000,
        },
  buttonColor: {
      color:'#ed4343',
  },
    }));
    const classes = useStyles();
    return (
            <Container>
            <Typography className={classes.buttonColor} variant="h3" gutterBottom>
        All Blogs!!!
      </Typography>
             <Fab variant="extended" className={classes.buttonColor}>
        Create a Blog.
      </Fab>
        <div className={classes.root}>
            
            
                <Grid container spacing={4}>
          
                <Grid container justify="center">
             <GridList className={classes.gridList} cols={3}>
             {blogs.map((tile) => (
        
                 <Card id={tile.id}
                     title={tile.title}
                     subTitle={tile.sub_title}
                     mainContent={tile.main_content}
                     deletePost={deletePost}
                     handleUpdate={handleUpadte}
                />
        ))}
                    </GridList>
                        </Grid>
                        </Grid>
                    
                   
            </div>

   </Container>
                
           
       
        
  );
}
 
export default ShowAllPost;