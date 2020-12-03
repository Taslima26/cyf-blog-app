import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

export default function StarRating(props) {
    const [value, setValue] = React.useState(0);
  console.log(value);
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
          value={value}
          className={classes.buttonColor}
          name="rating"
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          onClick={props.handleInputChange}
        />
      </Box>
    </div>
  )
}