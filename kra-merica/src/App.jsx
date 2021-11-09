import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import React from 'react'
import Auth from "./auth/Auth";
import IdeaIndex from "./ideas/IdeaIndex";
import CommentIndex from "./comments/CommentIndex";



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

  handleToken = () => {
    this.setState({sessionToken: localStorage.getItem('token') });
  }
  componentDidMount(){
    this.handleToken()
  }

  clearToken = () => {
    localStorage.clear();
    this.setState('')
  }

  protectedViews = () => {
     return localStorage.getItem('token') ? ( <IdeaIndex clearToken={this.clearToken} token={this.state.sessionToken}/>
    ) : (
      <Auth updateToken={this.updateToken}/>
    );
  };

  render(){
    return (
      <div>
        
      {this.protectedViews()}
      </div>
      
  )
}
}

export default App;
