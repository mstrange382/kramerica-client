import React from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import APIURL from "../helpers/environment";

class IdeaDelete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete = () => {
    console.log("Hello!!");

    fetch(`${APIURL}/idea/delete/${this.props.idea.id}`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      }),
    })
      .then((response) => response.json())
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
        <Button color="danger" onClick={this.toggle}>
          Delete
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Delete</ModalHeader>
          <ModalBody>
            <Button type="delete" onClick={this.handleDelete}>
              Delete
            </Button>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default IdeaDelete;
