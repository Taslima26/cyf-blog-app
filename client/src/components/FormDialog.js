import { useEffect, useState, useRef, useContext } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import client from '../api';
import React from 'react';
import { FormControlLabel } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import FavoriteIcon from '@material-ui/icons/Favorite';
import RaisedButton from '@material-ui/core';
import { useParams, useHistory } from 'react-router-dom';
import { useStyles, makeStyles } from '@material-ui/core/styles';
import StarIcon from '@material-ui/icons/Star';
import { BlogsContext } from '../Contex/BlogsContext';

export default function FormDialog({ open, setOpen }) {
  const useStyles = makeStyles((theme) => ({
    buttonColor: {
      color: '#ed4343',
    },
  }));
  const { id } = useParams();

  const history = useHistory();
  const { blog, setBlog, reviews, setReviews, addReviews } = useContext(
    BlogsContext
  );
  const [name, setName] = React.useState('');
  const [comment, setComment] = React.useState('');
  const [rating, setRating] = useState(0);
  const getName = useRef();
  const getComment = useRef();
  const getRating = useRef();

  const handleClose = () => {
    setOpen(false);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmitReview = async (event) => {
    try {
      event.preventDefault();
      const response = await client.post(`/getblog/${id}/addReview`, {
        reviewerName: name,
        reviewerComment: comment,
        noOfLikes: rating,
        article_id: id,
      });
      console.log(response);
      history.push('/');
      history.push(`/ShowAllPost/${id}`);
    } catch (error) {
      console.log(error);
      console.log("hello world")
    }
  };
  const classes = useStyles();
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby='form-dialog-title'
      color='primary'
      actions={[
        <RaisedButton type='submit' form='my-form-id' label='Submit' />,
      ]}
    >
      <form id='my-form-id' onSubmit={handleSubmitReview}>
        <DialogTitle id='form-dialog-title'>Feedback Form!</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Authors loves to hear from readers! Please provide your feedback.
          </DialogContentText>
          <TextField
            autoFocus
            margin='dense'
            id='name'
            label='Name'
            type='text'
            fullWidth
            value={name}
            onChange={handleNameChange}
            ref={getName}
            className={classes.buttonColor}
          />
          <br />
          <TextField
            autoFocus
            margin='dense'
            id='comment'
            label='Comment'
            type='text'
            fullWidth
            value={comment}
            onChange={handleCommentChange}
            ref={getComment}
            className={classes.buttonColor}
          />
          <br />
          <FormControlLabel
            control={
              <>
                <input
                  name='rating'
                  type='number'
                  value={rating}
                  ref={getRating}
                  hidden
                  readOnly
                />
                <Rating
                  name='rating'
                  value={rating}
                  precision={0.5}
                  onChange={(_, value) => {
                    setRating(value);
                  }}
                  icon={<StarIcon fontSize='inherit' />}
                  className={classes.buttonColor}
                />
              </>
            }
            label='select rating'
          />
        </DialogContent>
        <DialogActions>
          <Button
            className={classes.buttonColor}
            type='submit'
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            className={classes.buttonColor}
            type='submit'
            onClick={handleSubmitReview}
          >
            Save
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
