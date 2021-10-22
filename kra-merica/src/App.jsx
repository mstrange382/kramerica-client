import {Container} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import React from 'react'
import Register from './auth/Register';
import Login from './auth/Login';
import Auth from './auth/Auth'


const App = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div>
    <Container>         
      <Register/> 
      <Login/>
      <Auth/>   
    </Container>
    </div>
    </nav>
  ); 
}

export default App;
