import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import React from 'react'
import Auth from "./auth/Auth";
import IdeaIndex from "./ideas/IdeaIndex";

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
    this.setState({ sessionToken: ''})
  }

  protectedViews = () => {
    console.log(this.state.sessionToken)
     return this.state.sessionToken !== undefined && this.state.sessionToken !== '' && this.state.sessionToken !== null ? <IdeaIndex clearToken={this.clearToken} token={this.state.sessionToken}/> 
     : (
      <Auth updateToken={this.updateToken}/>
    );
  };


  render(){
    return (
      <div style={{
        height: 1000,
        backgroundColor: '#a0c4ff'
      }} className='main-page'>
      {this.protectedViews()}
      </div>
      
  )
}
}

export default App;
