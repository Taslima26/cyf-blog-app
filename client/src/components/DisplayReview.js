import React, { useState,useContext,useEffect } from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';
    
const DisplayReview = ({reviews}) => {
  
   // console.log(review);
    const useStyles = makeStyles((theme) => ({
    root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
      },
  buttonColor: {
      color:'#ed4343',
    },
}));
  const classes = useStyles();
 // console.log("Display review", review);
  console.log("hello world")
  return (
  <div className={classes.root}>
      {reviews.map((review) => (
    
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >

            <Typography className={classes.heading}>
              {review.reviewer_name}
            </Typography>
           <Rating
          value={review.no_of_likes}
          name="rating"
              readOnly="true"
              className={classes.buttonColor}
        />
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {review.reviewer_comment}
          </Typography>
          </AccordionDetails>
        </Accordion>))}
     
      </div>
  )
}
 
export default DisplayReview;