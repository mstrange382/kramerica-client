import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Input,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Modal,
} from "reactstrap";
import APIURL from "../helpers/environment";

class CommentCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      modal: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const {  description } = this.state;

    console.log(this.props.token);

    fetch(`${APIURL}comment/create/${this.props.ideas.id}`, {
      method: "POST",
      body: JSON.stringify({
        description: description,
        
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.token,
      }),
    })
      .then((response) => response.json())
      .then((commentData) => {
        this.props.comments();
        this.setState({
          category: "",
          description: "",
        });
      })
      .catch((error) => {
        console.log("Create error", error);
      });
      this.refreshPage()
  };
  refreshPage = () => {
    setTimeout(() => {
      window.location.reload();
    });
  };

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };
  render() {
    return (
      <div>
        <Button color="secondary" onClick={this.toggle}>
          Comment
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>
            Leave a comment here...
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleSubmit}>
              
              <FormGroup>
                <Input
                  name="description"
                  placeholder="Description"
                  value={this.state.description}
                  onChange={this.handleChange}
                  required
                />
              </FormGroup>
              <Button type="submit" color="primary" onClick={this.toggle}>
                Submit
              </Button>{" "}
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default CommentCreate;
