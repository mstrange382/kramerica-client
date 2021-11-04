import React  from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Button } from 'reactstrap';
import Login from "./Login";
import Register from "./Register";



class Auth extends React.Component{
    constructor(props){
        super(props)
        this.state ={
          isLoginOpen: false
        }
    }
    toggle= (e) => {
      e.preventDefault();
      if(this.state.isLoginOpen === true) {
        this.setState({isLoginOpen:false});
      } else{
        this.setState({isLoginOpen:true})
      }
    }

    render(){
      console.log(this.props.updateToken)
        return(
          <div>
          <Button onClick={this.toggle.bind(this)}>
          <Login updateToken={this.props.updateToken}/>
          </Button>
          <Button onClick={this.toggle.bind(this)}>
          <Register updateToken={this.props.updateToken}/>
          </Button>
          </div> 
        )
    }
}

export default Auth