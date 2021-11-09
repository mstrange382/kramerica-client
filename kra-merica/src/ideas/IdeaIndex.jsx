import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import CommentCreate from "../comments/CommentCreate";
import IdeaDelete from "./IdeaDelete";
import IdeaUpdate from "./IdeaUpdate";

class IdeaIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idea: [],
      user: [],
      comment: [],
    };
    this.getIdeas = this.getIdeas.bind(this);
    this.getComments = this.getComments.bind(this);
    this.getUsers = this.getUsers.bind(this);
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
    this.getUsers();
    this.getIdeas();
    this.getComments()
  }

  getUsers = () => {
    fetch(`http://localhost:3000/user`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.token,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ user: data });
      })
      .catch((error) => {
        console.log("Something went wrong. Please try again", error);
      });
  };
    

  getComments = () => {
    fetch(`http://localhost:3000/comment`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.token,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ comment: data });
      })
      .catch((error) => {
        console.log("Something went wrong. Please try again", error);
      });
  };
  

  render() {
    return (
      
      <Container>
        <Row>
          <Col>
          <p>Welcome to the Kra-Merica Employee Portal</p>
            {this.state.idea.map((ideas) => (
              <div>
                <p>name: {ideas.name}</p>
                <p>description: {ideas.description}</p>
                <p>category: {ideas.category}</p>
                <IdeaUpdate ideas={ideas} />
                <IdeaDelete/>
                
              </div>
            ))}
            {this.state.comment.map((comments) => (
                <div>
                    <p>{comments.name}</p>
                </div>    
            ))}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default IdeaIndex;
