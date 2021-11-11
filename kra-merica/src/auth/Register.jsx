import React from 'react';
import {
  Form, FormGroup, Input, Button
} from "reactstrap"

class Register extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            firstName: '', 
            lastName: '',
            email:'',
            passwordhash:'',
            admin:'',
        };
        this.submitRegister = this.submitRegister.bind(this);
        this.handlechange = this.handlechange.bind(this);
    }
    handlechange(e){
      this.setState({
        [e.target.name]: e.target.value
      })
    }

  submitRegister = (e) =>  {
    e.preventDefault();
    const {
      firstName,
      lastName,
      email,
      passwordhash,
      admin
    } = this.state;

      console.log('hey there brother!');
      

      fetch("http://localhost:3000/user/register",{
      method: "POST",
      body: JSON.stringify({               
              firstName: firstName,
              lastName: lastName,
              email: email,
              passwordhash: passwordhash,
              admin: admin,     
      }),
      headers: new Headers({
      'Content-Type': 'application/json'
      })
    })
    .then((response) => response.json())
    .then((data) => {
      this.props.updateToken(data.sessionToken) 
    console.log(data)
  })

    .catch(error => {
    console.log('Registration Error', error);
    })
      
  };
    render(){
      return (
        <div>
          <Form onSubmit={this.submitRegister}>

            <FormGroup>
            <Input type="firstName" name="firstName" placeholder="First Name" value={this.state.firstName} onChange={this.handlechange} required/>
            </FormGroup>

            <FormGroup>
            <Input type="lastName" name="lastName" placeholder="Last Name" value={this.state.lastName} onChange={this.handlechange} required/>
            </FormGroup>

            <FormGroup>
            <Input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handlechange} required/>
            </FormGroup>

            <FormGroup>
            <Input type="passwordhash" name="passwordhash" placeholder="Password" value={this.state.passwordhash} onChange={this.handlechange} required/>
            </FormGroup>

            <FormGroup>
            <Input type="admin" name="admin" placeholder="Admin" value={this.state.admin} onChange={this.handlechange} required/> 
            </FormGroup>  

            <Button type='submit'>Register</Button>        
          </Form>
        </div>       
        
      );
    }
  }

export default Register