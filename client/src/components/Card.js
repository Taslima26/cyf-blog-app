import React, { useState, useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Grid from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Rating from '@material-ui/lab/Rating';

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
    color: '#ed4343',
  },
});

export default function OutlinedCard({
  title,
  subTitle,
  averageRating,
  createdOnDate,
  editPost,
  deletePost,
  id,
  handleUpdate,
  handleGoToDetailsPage,
}) {
  console.log(averageRating);
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant='outlined' m={2} pt={3}>
      <CardContent>
        <Typography
          className={classes.title}
          className={classes.buttonColor}
          gutterBottom
        >
          {title}
        </Typography>
        <Typography variant='h5' component='h2'>
          {subTitle}
        </Typography>

        <Typography variant='body2' component='p'>
          Created on {createdOnDate}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size='small'
          variant='outlined'
          className={classes.buttonColor}
          onClick={() => handleGoToDetailsPage(id)}
        >
          Read More{' '}
        </Button>
        <Button
          size='small'
          variant='outlined'
          className={classes.buttonColor}
          startIcon={<EditIcon />}
          onClick={() => handleUpdate(id)}
        >
          Edit
        </Button>
        <Button
          size='small'
          variant='outlined'
          className={classes.buttonColor}
          startIcon={<DeleteIcon />}
          onClick={() => deletePost(id)}
        >
          Delete
        </Button>
        <IconButton
          aria-label='add to favorites'
          className={classes.buttonColor}
        >
          <FavoriteIcon />
        </IconButton>
        <Rating
          value={averageRating}
          name='rating'
          readOnly='true'
          className={classes.buttonColor}
        />
      </CardActions>
    </Card>
  );
}
