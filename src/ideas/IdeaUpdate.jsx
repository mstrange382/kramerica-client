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

class IdeaUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "",
      description: "",
      modal: false,
    };
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleUpdate = (e) => {
    e.preventDefault();
    const { category, description } = this.state;

    console.log(this.props.token);

    fetch(`${APIURL}/idea/update/${this.props.idea.id}`, {
      method: "PUT",
      body: JSON.stringify({
        category: category,
        description: description,
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      }),
    })
      .then((response) => response.json())
      .then(() => {
        this.getIdeas();
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
    return (
      <div>
        <Button color="info" onClick={this.toggle}>
          Update
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Update Your Idea</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleUpdate}>
              <FormGroup>
                Category:
                <Input
                  name="category"
                  value={this.state.category}
                  onChange={this.handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                Description:
                <Input
                  name="description"
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
export default IdeaUpdate;
