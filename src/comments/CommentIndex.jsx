import React from "react";
import { Card, CardBody } from "reactstrap";
import APIURL from "../helpers/environment";

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentData: [],
      comment: [],
      comments: "",
    };
  }

  getComments = () => {
    console.log("comments?");
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
      })
      .catch((error) => {
        console.log("Something went wrong. Please try again", error);
      });
  };
  componentDidMount() {
    this.getComments();
  }

  render() {
    return (
      <div>
        {this.props.comments.length > 0 ? (
          <>
            {this.props.comments.map((comment) => {
              console.log(comment);
              return (
                <div>
                  <Card>
                    <CardBody>Comment: {comment.description}</CardBody>
                  </Card>
                </div>
              );
            })}
          </>
        ) : (
          <></>
        )}
      </div>
    );
  }
}

export default CommentIndex;
