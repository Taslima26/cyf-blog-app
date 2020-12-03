import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import FormDialog from './FormDialog';

export default function StarRating(props) {
    const [rating, setRating] = React.useState(0);
  console.log(Rating);
   const useStyles = makeStyles((theme) => ({
    buttonColor: {
            color: '#ed4343',
          },

}))
    const classes = useStyles();
  return (
    <div>
      <Box align="left"  component="fieldset" mb={3} borderColor="transparent">
        <Rating
          value={setRating}
          className={classes.buttonColor}
          name="rating"
          onChange={(event, newValue) => {
            setRating(newValue);
          }}
          onClick={props.handleInputChange}
        />
      </Box>
      <FormDialog rating={rating}/>
    </div>
  )
}