import React from "react";
import { Card, CardBody,CardText, CardHeader } from "reactstrap";
import CommentUpdate from './CommentUpdate';
import CommentDelete from './CommentDelete';
import Sitebar from "../navbar/Sitebar";


class CommentIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: [],
    };
    this.getComments = this.getComments.bind(this)
  }

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
  componentDidMount(){
    this.getComments()
  }

  render() {
    return (
      <div>
        <Sitebar token={this.props.token} comments={this.getComments}/>
            {this.state.comment.map((comments) => (
              <div>
                <Card>
                <CardHeader tag='h3'>name: {comments.name}</CardHeader>
                <CardBody>description: {comments.description}</CardBody>
                <CardText>category: {comments.category}</CardText>


                <CommentUpdate token={this.props.token} comments={comments}/>

                <CommentDelete token={this.props.token} comments={comments}/>
                </Card>
              </div>
            ))}
         </div> 
    );
  }
}

export default CommentIndex;
