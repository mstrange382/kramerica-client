import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import CommentUpdate from './CommentUpdate';
import CommentDelete from './CommentDelete'

class CommentIndex extends React.Component {
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
        this.setState({ idea: data });
      })
      .catch((error) => {
        console.log("Something went wrong. Please try again", error);
      });
  };
  componentDidMount() {
    this.getIdeas();
    this.getComments();
    this.getUsers();
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
        this.setState({ idea: data });
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
            {this.state.comment.map((comments) => (
              <div>
                <p>name: {comments.name}</p>
                <p>description: {comments.description}</p>
                <p>category: {comments.category}</p>
                <CommentUpdate comments={comments}/>,
                <CommentDelete/>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CommentIndex;
