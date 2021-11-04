import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import React from 'react'
// import IdeaIndex from "./ideas/IdeaIndex";
import Auth from "./auth/Auth";
import IdeaCreate from "./ideas/IdeaCreate";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionToken: '',
      isActive: false
    }; 
  }
  updateToken = (newToken) => {
    this.setState({sessionToken: newToken});
    localStorage.setItem('token', newToken)
  }

  clearToken = () => {
    localStorage.clear();
    this.setState('')
  }

  protectedViews = () => {
     return localStorage.getItem('token') ? ( <IdeaCreate clearToken={this.clearToken} token={this.sessionToken}/>
    ) : (
      <Auth updateToken={this.updateToken}/>
    );
  };

  render(){
    return (
      <div>
      {this.protectedViews()}
      </div>
  ); 
}
}

export default App;
