import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import Styled from 'styled-components';
import { AuthContext } from '../App';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';


export default function Logout() {
  const { state, dispatch } = useContext(AuthContext);

  if (!state.isLoggedIn) {
    return <Redirect to='/login' />;
  }
  const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));


  const { avatar_url, name ,login} = state.user;

  const handleLogout = () => {
    dispatch({
      type: 'LOGOUT',
    });
  };
 const classes = useStyles();
  return (
    <div className={classes.root}>
      <Chip
        avatar={<Avatar alt='Person photo' src={avatar_url} />}
        label={login}
        onDelete={handleLogout}
        variant='outlined'
      />
    </div>
  );
}
  


