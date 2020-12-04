import {useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import client from '../api';
import React from 'react'
import { FormControlLabel } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import FavoriteIcon from '@material-ui/icons/Favorite';
import RaisedButton from '@material-ui/core';
import { useParams,useHistory } from 'react-router-dom';


function FormDialog({ open, setOpen }) {
  const { id } = useParams();
  
   const history = useHistory();
  const [name, setName] =  React.useState(undefined);
  const [comment, setComment] =  React.useState(undefined);
  const [rating, setRating] = useState(2);
 
 
const handleClose = () => {
    setOpen(false);
  };

  const handleNameChange = e => {
        setName(e.target.value);
  };
  const handleCommentChange = e => {
        setComment(e.target.value);
    };
console.log("rating from Form Dialog",rating);
       console.log("name", name);
        console.log("comment", comment);
  
  const  handleSubmitReview = async(event) => {
    //event.preventDefault();
    console.log("I am click");
    
    try {
     
      console.log("I am clicked");
      console.log("rating from Form Dialog",rating);
       console.log("name", name);
        console.log("comment", comment);
  
      const response = await client.post(`/getblog/${id}/addReview`, {
                reviewer_name: name,
                reviewer_comment: comment,
                 no_of_likes: rating,
                  article_id:id
                
      })
            console.log(response);
            
      
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <form onSubmit={handleSubmitReview}>

    <DialogTitle id="form-dialog-title">Some Title</DialogTitle>
    <DialogContent>
        <DialogContentText>
          Some Explanation
        </DialogContentText>
        <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Some Required Input"
            type="text"
            fullWidth
            value={name}
            onChange={handleNameChange}
        />
        <TextField
            autoFocus
            margin="dense"
            id="comment"
            label="Some Required Input"
            type="text"
            fullWidth
            value={comment}
            onChange={handleCommentChange}
        />
        </DialogContent>
    <DialogActions>
        <Button onClick={handleClose} color="secondary">
            Cancel
        </Button>
        <Button onClick={handleSubmitReview} color="primary">
            Create
        </Button>
        </DialogActions>
        </form>
</Dialog>
  );
}
export default FormDialog;