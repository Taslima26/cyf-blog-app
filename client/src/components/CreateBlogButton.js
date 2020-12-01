import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { AddNewPost } from "./AddNewPost";
import { useHistory } from 'react-router-dom';

function CreateBlogButton() {
    let history = useHistory();
     const handleCreate = () => {
        history.push(`/AddNewPost`)
    }
    const useStyles = makeStyles((theme) => ({
    buttonColor: {
            color: '#ed4343',
            marginTop: "2rem",
            marginBottom:"2rem",
            marginLeft: "10rem",
            display: "flex",
            justifyContent: "center",
            alignSelf: "center",
            alignItems:"center",

        },

})
)
 const classes = useStyles();
     
  return (
    <Button variant="outlined" className={classes.buttonColor}  onClick={handleCreate}>
Create  A Blog!!!
</Button>
  );
}
export default CreateBlogButton;