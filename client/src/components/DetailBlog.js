import React, { useState, useEffect, useContext } from 'react';
import { BlogsContext } from '../Contex/BlogsContext';
import client from '../api';
import { useParams,useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const DetailBlog = () => {
    const { id } = useParams();
    const history = useHistory();
    console.log("id from showDetails page", id);
    const { blog, setBlog } = useContext(BlogsContext);
    useEffect(() => {
    const fetchData = async () => {
      const response = await client.get(`/getblog/${id}`,)
        setBlog(response.data.data.blog)
        console.log(response);
        
    }
    fetchData();
    
  }, [])
    
    const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
        },
  buttonColor: {
      color:'#ed4343',
  },
    });
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    const goBack = () => {
        history.push("/")
    }
    
    return (
        <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
         {blog.title}
        </Typography>
        <Typography variant="h5" component="h2">
         {blog.sub_title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Created on {blog.create_on_date} by Taslima
        </Typography>
        <Typography variant="body2" component="p">
         
         {blog.main_content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={goBack} className={classes.buttonColor}>Go back to all blogs!</Button>
      </CardActions>
    </Card>
    )}

export default DetailBlog;