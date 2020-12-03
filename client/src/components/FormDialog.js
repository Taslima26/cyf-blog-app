import {useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import StarRating from './StarRating';
import client from '../api';
 import React from 'react'
 
function FormDialog({ open, setOpen,rating}) {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
 
  console.log("rating from Form Dialog", rating);
  console.log("name", name);
  console.log("comment", comment);
const handleClose = () => {
    setOpen(false);
  };

  const handleSubmitReview = () => {
    console.log("hello from handle submit review")
  }

  
  return (
    <div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form dialog
      </Button> */}
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Review</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Writer would love your feedback! We would send you similar blogs in e-mail.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            onChange={(e)=>setName(e.target.value)}
            value={name}
            id="name"
            label="Name"
            type="email"
            fullWidth
          />
           <TextField
            autoFocus
            value={comment}
            onChange={(e)=>setComment(e.target.value)}
            margin="dense"
            id="comment"
            label="Review"
            type="email"
            fullWidth
          />
          <StarRating/>
          

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmitReview} color="primary">
            Subscribe
          </Button>
           
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default FormDialog;