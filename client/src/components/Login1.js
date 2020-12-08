import GitHubLogin from "react-github-login";
import React, { useState, useContext, useEffect } from "react";
import axios from 'axios';
import GithubButton from 'react-github-login-button';


const Login = () => {
    
    const onSuccess = async (response) => {
       
        const accessCode = response.code;
        const fetchUserName = (code) => {
             
            return axios.get(`https://cyf-blog-app.herokuapp.com/api/callback?code=${code}`)
                 
                .then(response => {
                    return response.data
                 
            })
           
        }
        let userInfo = await fetchUserName(accessCode);
        let githubname = userInfo.login;
        
        const setGithub = (githubname)=>{
        const avatar_url =`https://avatars.githubusercontent.com/${githubname}`
                     const github = {
                avatar:avatar_url,
                accountname:githubname
            }
          ///  dispatch({ type: types.Set_Github, payload:github }); 
        }
        setGithub(githubname);
        localStorage.setItem("githubname", githubname);
        localStorage.setItem('isLogedIn', true);
        localStorage.setItem('GitUserId', userInfo.id);
    }
    const onFailure = response => {
        console.error(response)
    localStroage.clear()};  

    return (
      <GithubButton
        clientId='f897e1716a41568a5332' //this needs to change according to heroku app configs
        onSuccess={onSuccess}
        onFailure={onFailure}
        redirectUri={`http://localhost:3000/login`}
        buttonText='Login'
      />
    );
}
export default Login;