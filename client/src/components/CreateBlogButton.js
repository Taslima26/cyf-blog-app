import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { AddNewPost } from "./AddNewPost";
import { useHistory } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../App';
import { useContext } from 'react';

function CreateBlogButton() {
  const { state, dispatch } = useContext(AuthContext);
   
  let history = useHistory();
  console.log("state from create blog button",state)
     const handleCreate = () => {

       if (!state.isLoggedIn) {
         history.push(`/login`);
       }
       else {
         history.push(`/AddNewPost`)
       }
    }
    const useStyles = makeStyles((theme) => ({
    buttonColor: {
            color: '#ed4343',
            marginTop: "2rem",
            marginBottom:"2rem",
           marginLeft: "2rem",
            //  display: "flex",
            // justifyContent: "right",
            // alignSelf: "right",
            // alignItems:"right",

        },

}))
 const classes = useStyles();
     
  return (
    <Button variant="outlined" className={classes.buttonColor}  onClick={handleCreate}>
Create  A Blog
</Button>
  );
}
export default CreateBlogButton;