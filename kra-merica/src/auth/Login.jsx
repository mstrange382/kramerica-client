import React from 'react'
import { Button, Input, Label, Form, FormGroup } from 'reactstrap';


class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            firstName: '', 
            passwordhash:'', 
        }
        this.submitLogin = this.submitLogin.bind(this);
        this.handlechange = this.handlechange.bind(this);
          }
          handlechange(e){
            this.setState({
              [e.target.name]: e.target.value
            })
          }

        submitLogin = (e) => {
          const {
            firstName,
            passwordhash
          } = this.state;

          fetch("http://localhost:3001/user/login",{
            user:{
              firstName: firstName,
              passwordhash: passwordhash
            }
          })
          .then(response => {
            console.log('Logged in', response);
          })
          .catch(error => {
            console.log("Login Failed", error);
          })
          e.preventDefault();
        }

        render() {
          return (
            <div className="inner-container">
              <Form onSubmit={this.submitLogin}>
                <FormGroup>
                  <Input type="firstName" name="firstName" placeholder="First Name" value={this.state.firstName} onchange={this.handleChange} required/>
                </FormGroup>

                <FormGroup>
                  <Input type="passwordhash" name="passwordhash" placeholder="Password" value={this.state.passwordhash} onChange={this.handlechange} required/>
                </FormGroup>

                <Button>Log In</Button>
              </Form>
            </div>
          );
        }
      
      }


export default Login

