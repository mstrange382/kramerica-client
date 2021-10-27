import React, {Component} from 'react';
import { Form } from 'reactstrap';


class Register extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            firstName: '', 
            lastName: '',
            email:'',
            passwordhash:'',
            admin:'',
        }
    }

    submitRegister(e) {}

    render() {
      return (
        <div className="inner-container">
          <div className="header">
            Register
          </div>
          <div className="box">
  
            <div className="input-group">
              <label htmlFor="username">First Name</label>
              <input
                type="text"
                name="username"
                className="login-input"
                placeholder="First Name"/>
            </div>
            <div className="input-group">
              <label htmlFor="username">Last Name</label>
              <input
                type="text" 
                name="username"
                className="login-input"
                placeholder="Last Name"/>
            </div>
  
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" className="login-input" placeholder="Email"/>
            </div>
  
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                className="login-input"
                placeholder="Password"/>
            </div>
            <button
              type="button"
              className="login-btn"
              onClick={this.submitRegister.bind(this)}>Register</button>
          </div>
        </div>
      );
    }
  }  

export default Register