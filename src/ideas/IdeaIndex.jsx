import React, { Component } from "react";
import { Card, CardHeader, CardBody, CardText, Container } from "reactstrap";
import Sitebar from "../navbar/Sitebar";
import IdeaDelete from "./IdeaDelete";
import IdeaUpdate from "./IdeaUpdate";
import CommentCreate from "../comments/CommentCreate";
import CommentUpdate from "../comments/CommentUpdate";
import APIURL from "../helpers/environment";

class IdeaIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idea: [],
      commentData: [],
      comments: ''
    };
    
  }

  getIdeas = () => {
    fetch(`${APIURL}/idea`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.token,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ idea: data });
      })
      .catch((error) => {
        console.log("Something went wrong. Please try again", error);
      });
  };
  componentDidMount() {
    this.getIdeas();
    console.log('dis this mount? ideas')
    // this.getComments()
    
  }

  getComments = () => {
    fetch(`${APIURL}/comment`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.token,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ commentData: data });
        console.log(data)
      })
      .catch((error) => {
        console.log("Something went wrong. Please try again", error);
      });
  };

  

  render() {
    return (
      <div>
        <Sitebar
          token={this.props.token}
          ideas={this.getIdeas}
          clickLogout={this.props.clearToken}
        />
        {this.state.idea.map((ideas) => (
          <div>
            <Container fluid='md'>
            <Card  body className='text-center'>
              {console.log(ideas)}
              <CardHeader color='#caffbf' tag="h5">Name: {ideas.name}</CardHeader>
              <CardBody>Category: {ideas.category}</CardBody>
              <CardText>Description: {ideas.description}</CardText>
              
              <IdeaUpdate token={this.props.token} idea={ideas} />

              <IdeaDelete token={this.props.token} idea={ideas} />

              <CommentCreate ideas={ideas} token={this.props.token} comments={this.props.comments}/>
              
              {ideas.comments.map((comment)=>(
                <div>
                  <Container fluid='md'>
                    <Card>
                      <CommentUpdate token={this.props.token} idea={ideas}/>
                    {comment.description}
                    </Card>
                  </Container>
                  
                  </div>
              ))}
              
            </Card>
            </Container>
          </div>
        ))}
        
      </div>
    );
  }
}

export default IdeaIndex;
