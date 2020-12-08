import React, { Fragment, useEffect, useState } from 'react';
import Box from '@material-ui/core/Box';

import './App.css';
import AddNewPost from './components/AddNewPost';
import ShowAllPost from './components/ShowAllPost';
import AboutUs from './Pages/About';
import TopTenBlog from './Pages/TopTenBlog';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { BlogsContext, BlogsContextProvider } from './Contex/BlogsContext';
import EditNewPost from './components/EditNewPost';
import DetailBlog from './components/DetailBlog';
import { initialState, reducer } from './store/reducer/';
import { createContext, useReducer } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, withStyles ,Button} from '@material-ui/core';
import { propTypes } from 'react-bootstrap/esm/Image';
import logo from './public/cyf_brand.png';
import { Container ,Grid} from '@material-ui/core';
import CreateBlogButton from './components/CreateBlogButton';
//import blog from "../src/public/download";
import Login from './components/Login';
import Logout from './components/Logout';
import WhiteImage from './public/whiteImage.jpg';
import { LocalParkingOutlined } from '@material-ui/icons';


export const AuthContext = createContext();

const App = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const useStyles = makeStyles({
    row: {
      flexGrow: 1,
    },
    grow: {
      flexGrow: 1,
    },
    container: {
      width: 1170,
      margin: 'auto',
    },
    buttonFontSize: {
      fontSize: '11px',
      color: '#a1a1a1',
    },

    appBar: {
      backgroundColor: '#fff',
      backgroundSize: 'cover',
    },
    name: {
      color: '#a1a1a1',
      justifyContent: 'left',
      '&:hover': {
        background: 'transparent',
      },
    },
    avatar: {
      height: '100%',
      borderRadius: 0,
    },

    loginButton: {
      background: '#e91e63',
      color: '#fff',
      borderRadius: '25px',
      padding: '0px 25px',

      '&:hover': {
        background: 'blue',
        boxShadow: '0px 2px 10px #888888',
      },
    },
  });
  const classes = useStyles();
  var islogedin=localStorage.getItem("isLoggedIn")
  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      <BlogsContextProvider>
        <>
          <Container>
            <div>
              <div
                style={{
                  backgroundImage: `url('${WhiteImage}')`,
                  height: '380px',
                  width: '100%',
                }}
              >
                <img src={logo} style={{ width: 250, marginTop: -7 }} />
              </div>
              <AppBar className={classes.appBar} position='static'>
                <Grid item sm={12} xs={12} className={classes.container}>
                  <Toolbar>
                    <Grid className={classes.grow}>
                      <Typography className={classes.name} variant='h6'>
                        CYF-BLOG-APP
                      </Typography>
                    </Grid>

                    <Link
                      to={'/home'}
                      color='inherit'
                      classes={classes.buttonFontSize}
                      style={{ textDecoration: 'none' }}
                    >
                      <Button
                        color='inherit'
                        className={classes.buttonFontSize}
                      >
                        Home
                      </Button>
                    </Link>

                    <Link
                      to={'/about'}
                      color='inherit'
                      classes={classes.buttonFontSize}
                      style={{ textDecoration: 'none' }}
                    >
                      <Button
                        color='inherit'
                        className={classes.buttonFontSize}
                      >
                        About us
                      </Button>
                    </Link>

                    <Link to={'/Login'} className={classes.link}>
                      <Button
                        color='inherit'
                        className={[
                          classes.buttonFontSize,
                         
                        ]}
                      >
                        {islogedin ? <Logout /> : 'Login'}
                      </Button>
                    </Link>
                  </Toolbar>
                </Grid>
              </AppBar>
              <div>{/* <CreateBlogButton /> */}</div>

              <Switch>
                <Route exact path='/' component={TopTenBlog} />
                {/* <Route exact path='/home' component={TopTenBlog} /> */}
                <Route exact path='/about' component={AboutUs} />
                <Route exact path='/top-ten-blogs' component={TopTenBlog} />
                <Route exact path='/addnewpost' component={AddNewPost} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/home' component={TopTenBlog} />
              </Switch>

              <Route
                exact
                path='/ShowAllPost/:id/EditNewPost'
                component={EditNewPost}
              />
              <Route exact path='/ShowAllPost' component={ShowAllPost} />
              <Route exact path='/ShowAllPost/:id' component={DetailBlog} />
            </div>
          </Container>
        </>
      </BlogsContextProvider>
    </AuthContext.Provider>
  );
};

export default App;
