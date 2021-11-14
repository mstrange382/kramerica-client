import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import React from 'react'
import Register from './auth/Register';
import Login from './auth/Login';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRegisterOpen: true,
      isLoginOpen: false,
      sessionToken: ''
    }; 
  }
  updateToken = (newToken) => {
    this.setState({sessionToken: newToken});
    localStorage.setItem('token', newToken)
  }

  render(){
    return (
      <div className='root-container'>
      <div className="box-controller">
      <div className={"controller " + (this.state.isRegisterOpen ? "selected-controller" : "")} 
      
      >
         Register
       </div>
       <div className={"controller " + (this.state.isLoginOpen ? "selected-controller" : "")}
        
         >
         Login
       </div>
       
     </div>
      
      <div className="box-container">
      {this.state.isRegisterOpen && <Register updateToken={this.updateToken}/>}
      {this.state.isLoginOpen && <Login updateToken={this.updateToken}/>}
     </div>
    
    </div>
    
    
  ); 
}
}

export default App;
