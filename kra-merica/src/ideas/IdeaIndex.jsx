import React from "react";
import { Card, CardHeader, CardBody, CardText } from "reactstrap";
import Sitebar from "../navbar/Sitebar";
import IdeaDelete from "./IdeaDelete";
import IdeaUpdate from "./IdeaUpdate";

class IdeaIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idea: [],
    };
    this.getIdeas = this.getIdeas.bind(this);
    
  }
  getIdeas = () => {
    fetch(`http://localhost:3000/idea`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.token,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(this.state.idea);
        this.setState({ idea: data });
      })
      .catch((error) => {
        console.log("Something went wrong. Please try again", error);
      });
  };
  componentDidMount() {
    this.getIdeas();
  }
  render() {
    return (
      
      <div>
        <Sitebar token={this.props.token} ideas={this.getIdeas} clickLogout={this.props.clearToken}/>
        
            {this.state.idea.map((ideas) => (
              <div>
                <Card>
                  {console.log(ideas)}
                <CardHeader tag='h5'>Name: {ideas.name}</CardHeader>
                <CardBody>Category: {ideas.category}</CardBody>
                <CardText>Description: {ideas.description}</CardText>

                <IdeaUpdate token={this.props.token} idea={ideas}/>

                <IdeaDelete token={this.props.token} idea={ideas}/>
                </Card>
              </div>
            ))}
            
        
        </div> 
    );
  }
}

export default IdeaIndex;
