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
import { AppBar, Toolbar, Typography, withStyles } from '@material-ui/core';
import { propTypes } from 'react-bootstrap/esm/Image';
import logo from './public/cyf_brand.png';
import { Container } from '@material-ui/core';
import CreateBlogButton from './components/CreateBlogButton';
//import blog from "../src/public/download";
import Login from './components/Login';
import { flexbox } from '@material-ui/system';
import Home from './components/Home';

export const AuthContext = createContext();

const App = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const useStyles = makeStyles({
    appBar: {
      backgroundColor: '#343A40',
      height: '50px',
      '& .MuiToolbar-regular': {
        minHeight: '50px',
      },
      // justifyContent: "flex-end",
      // flexDirection:"row",
    },
    name: {
      marginRight: '700px',
    },
    link: {
      textTransform: '#ed4343',
      color: '#a5a5a5',
      margin: '0 20px',
      textDecoration: 'unset',
    },

    linkname: {},
  });
  const classes = useStyles();
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
                  backgroundImage: `url('/client/src/public/whiteImage.jpg')`,
                  height: '380px',
                  width: '100%',
                }}
              >
                <img src={logo} style={{ width: 250, marginTop: -7 }} />
              </div>
              <AppBar className={classes.appBar} position='static'>
                <Box
                  display='flex'
                  flexDirection='row'
                  justifyContent='flex-end'
                >
                  <Toolbar>
                    <Box display='flex' flexDirection='row'>
                      <Typography className={classes.name} variant='h6'>
                        CYF-BLOG-APP
                      </Typography>
                    </Box>

                    <Box display='flex' justifyContent='flex-end'>
                      <Link to={'/home'} className={classes.link}>
                        <Typography
                          variant='body2'
                          className={classes.linkname}
                        >
                          Home
                        </Typography>
                      </Link>

                      <Link to={'/about'} className={classes.link}>
                        <Typography
                          variant='body2'
                          className={classes.linkname}
                        >
                          About Us
                        </Typography>
                      </Link>
                      <Link to={'/Login'} className={classes.link}>
                        <Typography
                          variant='body2'
                          className={classes.linkname}
                        >
                          Login
                        </Typography>
                      </Link>
                    </Box>
                  </Toolbar>
                </Box>
              </AppBar>
              <div>
                {/* <CreateBlogButton /> */}
                
              </div>
              
              <Switch>
                <Route exact path='/' component={TopTenBlog} />
                {/* <Route exact path='/home' component={TopTenBlog} /> */}
                <Route exact path='/about' component={AboutUs} />
                <Route exact path='/top-ten-blogs' component={TopTenBlog} />
                <Route exact path='/addnewpost' component={AddNewPost} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/home' component={Home} />
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
