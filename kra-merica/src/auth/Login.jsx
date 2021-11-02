import React from 'react'
import { Button, Input, Form, FormGroup } from 'reactstrap';


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
            firstName
            
          } = this.state;

          console.log('hello!!');

          fetch("http://localhost:3001/user/login",{
            method:'POST',
            body: JSON.stringify({            
              firstName: firstName
              
          }),
          headers: new Headers({
            'Content-Type': 'application/json'
            })
          })
          .then((response) => response.json())
          .then((data) => this.props.updateToken(data.sessionToken) )
          .catch(error => {
          console.log('Login Error', error);
          })          
          e.preventDefault();
        };

        render() {
          return (
            <div>
              <Form onSubmit={this.submitLogin}>
                <FormGroup>
                  <Input type="firstName" name="firstName" placeholder="First Name" value={this.state.firstName} onChange={this.handlechange} required/>
                </FormGroup>

                <FormGroup>
                  <Input type="passwordhash" name="passwordhash" placeholder="Password" value={this.state.passwordhash} onChange={this.handlechange} required/>
                </FormGroup>

                <Button onClick = {this.submitLogin.bind(this)}>Log In</Button>
              </Form>
            </div>
          );
        }
      
      }


export default Login

