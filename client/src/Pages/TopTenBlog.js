import React, { useState, useEffect ,useRef,Fragment, useContext} from 'react';
import AddNewPost from '../components/AddNewPost';
import EditNewPost from '../components//EditNewPost';
// import './ShowAllPost.css';
import { useHistory } from 'react-router-dom';
import client from '../api';
import { BlogsContext } from '../Contex/BlogsContext';
import Card from '../components/Card'
import GridList from '@material-ui/core/GridList';
import Grid from '@material-ui/core/Grid';
import GridListTile from '@material-ui/core/GridListTile';
import { makeStyles } from '@material-ui/core/styles';
import container from '@material-ui/core/Container';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import Button from '@material-ui/core/Button';




const TopTenBlog = (props) => {

    let history = useHistory();
    const { blogs, setBlogs, addBlogs } = useContext(BlogsContext);
    
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                const response = await client.get("/gettopten");
                response.data.data.blogs.forEach(p => p.create_on_date!=null ?p.create_on_date=new  Date(p.create_on_date).toLocaleDateString("en-GB",options) :p.create_on_date= 'no date')
                setBlogs(response.data.data.blogs);
            }
            catch (error) {
                console.log(error)
            }
            
        }
        fetchData();
    }, [])
    
    const handleShowAllPost = () => {
        history.push(`ShowAllPost`)
    }

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
            color: '#ed4343',
            marginTop: "2rem",
            marginBottom:"2rem",
            // marginLeft: "10rem",
            // display: "flex",
            // justifyContent: "center",
            // alignSelf: "center",
            // alignItems:"center",
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
            <Card
              id={tile.id}
              title={tile.title}
              subTitle={tile.sub_title}
              mainContent={tile.main_content}
              createdOnDate={tile.create_on_date}
              createdOnDate={tile.create_on_date}
              averageRating={tile.average_rating}
              count={tile.count}
              deletePost={deletePost}
              handleUpdate={handleUpadte}
              handleGoToDetailsPage={handleGoToDetailsPage}
            />
          ))}
        </div>
        <div>
          <Button
            variant='outlined'
            className={classes.buttonColor}
            onClick={handleShowAllPost}
          >
            Show All Post
          </Button>
        </div>
      </Container>
    );
}
 
export default TopTenBlog;