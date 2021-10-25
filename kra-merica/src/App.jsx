import {Container} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import React from 'react'
import Register from './auth/Register';
import Login from './auth/Login';
import Auth from './auth/Auth'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoginOpen: true,
      isRegisterOpen: false
    };
  }
  render(){
    return (
      
    <div className='root-container'>
      <div className="box-container">
      {this.state.isRegisterOpen && <Register/>}
      {this.state.isLoginOpen && <Login/>}
     </div>
    <Container>         
      <Auth/>   
    </Container>
    </div>
    
  ); 
}
}

export default App;
