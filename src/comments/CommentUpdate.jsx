import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import APIURL from "../helpers/environment";

class CommentUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      modal: false,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleUpdate = (e) => {
    e.preventDefault();
    const { description } = this.state;

    console.log(this.props.token);

    fetch(`${APIURL}/comment/update/${this.props.comment.id}`, {
      method: "PUT",
      body: JSON.stringify({
        description: description,
        ideaId: this.props.ideas.id,
        userId: this.props.users.id,
        comment: this.props.comment.id,
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        authorization: this.props.token,
      }),
    })
      .then((response) => response.json())
      .then(() => {
        this.getComments();
      })
      .catch((error) => {
        console.log("Create error", error);
      });
    this.refreshPage();
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
    console.log(this.props.comment);
    return (
      <div>
        <Button size="sm" color="danger" onClick={this.toggle}>
          Update
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Update Your Idea</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleUpdate}>
              <FormGroup>
                Description:
                <Input
                  name="description"
                  value={this.state.description}
                  onChange={this.handleChange}
                  required
                />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              Submit
            </Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
export default CommentUpdate;
