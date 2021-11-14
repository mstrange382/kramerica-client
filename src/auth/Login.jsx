import React from 'react'
import { Button, Input, Form, FormGroup, Container } from 'reactstrap';
import APIURL from '../helpers/environment';



class Login extends React.Component{
  
    constructor(props){
        super(props);
        this.state={
            firstName: '', 
            passwordhash:'',
            toggle: true
        }
        this.submitLogin = this.submitLogin.bind(this);
        this.handlechange = this.handlechange.bind(this);
        
          }
          handlechange(e){
            this.setState({
              [e.target.name]: e.target.value
            })
          }
          
          handleToggle = () => {
            this.setState({isactive: !this.state.isActive});
          }

        submitLogin = (e) => {
          e.preventDefault();
          const {
            firstName,
            passwordhash            
          } = this.state;

          console.log('hello!!');

          fetch(`${APIURL}/user/login`,{
            method:'POST',
            body: JSON.stringify({            
              firstName: firstName,
              passwordhash:passwordhash         
          }),
          headers: new Headers({
            'Content-Type': 'application/json'
            })
          })
          .then((response) => response.json())
          .then((data) => this.props.updateToken(data.sessionToken))
          .catch(error => {
          console.log('Login Error', error);
          })          
         
        };

        render() {
          return (
            <div >
            <Container fluid='sm'>
              <Form  onSubmit={this.submitLogin}>
                <FormGroup>
                  <Input type="firstName" name="firstName" placeholder="First Name" value={this.state.firstName} onChange={this.handlechange} required/>
                </FormGroup>

                <FormGroup>
                  <Input type="passwordhash" name="passwordhash" placeholder="Password" value={this.state.passwordhash} onChange={this.handlechange} required/>
                </FormGroup>
                <Button type='submit'>Log In</Button>
              </Form>
              </Container>
              
            </div>
            
          );
        }
      
      }


export default Login

