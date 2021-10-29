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
      isloginOpen: false
    };
    
  }
  render(){
    return (
      <div className='root-container'>
      <div className="box-controller">
      <div className={"controller " + (this.state.isRegisterOpen ? "selected-controller" : "")} 
      // onClick={this.showRegisterBox.bind(this)}
      >
         Register
       </div>
       <div className={"controller " + (this.state.isLoginOpen ? "selected-controller" : "")}
        //  onClick={this.showLoginBox.bind(this)}
         >
         Login
       </div>
       
     </div>
      
      <div className="box-container">
      {this.state.isRegisterOpen && <Register/>}
      {this.state.isLoginOpen && <Login/>}
     </div>
    
    </div>
    
    
  ); 
}
}

export default App;
