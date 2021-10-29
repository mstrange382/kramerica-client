import React from 'react';



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
    const {
      firstName,
      lastName,
      email,
      passwordhash,
      admin
    } = this.state;

      console.log('hey there brother!');

      fetch("http://localhost:3001/user/create",{
      firstName: firstName,
      lastName: lastName,
      email: email,
      passwordhash: passwordhash,
      admin: admin,
    })
    .then(response => {
    console.log('Registered', response);
    })
    .catch(error => {
    console.log('Registration Error', error);
    })
     e.preventDefault(); 
  };

    render(){
      return (
        <div>
          <form onSubmit={this.submitRegister}>
            <input type="firstName" name="firstName" placeholder="First Name" value={this.state.firstName} onChange={this.handlechange} required/>
            <input type="lastName" name="lastName" placeholder="Last Name" value={this.state.lastName} onChange={this.handlechange} required/>
            <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handlechange} required/>
            <input type="passwordhash" name="passwordhash" placeholder="Password" value={this.state.passwordhash} onChange={this.handlechange} required/>
            <input type="admin" name="admin" placeholder="Admin" value={this.state.admin} onChange={this.handlechange} required/>   

            <button>Register</button>        
          </form>
        </div>
        
        
      );
    }
  }  

export default Register