import React, { useState, useEffect, useContext } from 'react';
import { BlogsContext } from '../Contex/BlogsContext';
import client from '../api';
import { useParams, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import FormDialog from './FormDialog';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DisplayReview from './DisplayReview';

const DetailBlog = () => {
  const { id } = useParams();
  const history = useHistory();
  console.log('id from showDetails page', id);
  const { blog, setBlog, reviews, setReviews } = useContext(BlogsContext);
  useEffect(() => {
    const fetchData = async () => {
      const response = await client.get(`/getblog/${id}`);

      // response.data.data.blog.map (p => p.create_on_date!=null ?p.create_on_date=new  Date(p.create_on_date).toLocaleDateString("en-GB",options) :p.create_on_date= 'no date')
      setBlog(response.data.data.blog);
      setReviews(response.data.data.reviews);
      console.log(response);
    };
    fetchData();
  }, []);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const useStyles = makeStyles((theme) => ({
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
      color: '#ed4343',
    },
  }));
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const goBack = () => {
    history.push('/');
  };

  return (
    <>
      <Card className={classes.root}>
        <CardContent>
          <Typography
            className={classes.title}
            color='textSecondary'
            gutterBottom
          >
            {blog.title}
          </Typography>
          <Typography variant='h5' component='h2'>
            {blog.sub_title}
          </Typography>
          <Typography className={classes.pos} color='textSecondary'>
            Created on{' '}
            {blog.create_on_date != null
              ? (blog.create_on_date = new Date(
                  blog.create_on_date
                ).toLocaleDateString('en-GB', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                }))
              : (blog.create_on_date = 'no date')}{' '}
            by Taslima
          </Typography>
          <Typography variant='body2' component='p'>
            {blog.main_content}
          </Typography>
        </CardContent>
        <Box display='flex'>
          <Box marginLeft={10} bgcolor='background.paper'>
            <Button className={classes.buttonColor} onClick={handleClickOpen}>
              Write a review about blog
            </Button>
          </Box>
        </Box>

        <CardActions>
          <Button size='small' onClick={goBack} className={classes.buttonColor}>
            Go back to all blogs!
          </Button>
        </CardActions>
      </Card>
      <DisplayReview reviews={reviews} />
      <FormDialog
        handleClickOpen={handleClickOpen}
        open={open}
        setOpen={setOpen}
      />
    </>
  );
};

export default DetailBlog;
