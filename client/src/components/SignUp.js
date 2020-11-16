import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "./base";
import './signup.css';

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  }, [history]);

  return (
     <div className='d-flex justify-content-center flex-direction:column'>
    <div className="form-group align-content-center" >
      <h4 className="h4 main-header">Sign up</h4>
      <form onSubmit={handleSignUp}>
         <div className="form-group">
        <label>
          Email
          <input name="email" className='form-control' type="email" placeholder="Email" />
          </label>
        </div>
         <div className="form-group">
        <label>
          Password
          <input name="password" className='form-control' type="password" placeholder="Password" />
          </label>
          </div>
        <button type="submit" className="btn login-button save-button btn-lg">Sign Up</button>
      </form>
      </div>
      </div>
  );
};

export default withRouter(SignUp);