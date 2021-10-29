import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";



class Auth extends React.Component{
    constructor(props){
        super(props)
        this.state ={}
    }

    render(){
        return(
            <div>
            <Router>
              <Route exact path="/">
                <Login  />
              </Route>
              <Route exact path="/register">
                <Register  />
              </Route>
            </Router>
          </div>
        )
    }
}

export default Auth