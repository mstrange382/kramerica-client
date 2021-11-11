import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Button, Modal, FormGroup, Input, Form } from "reactstrap";
import Login from "./Login";
import Register from "./Register";

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };
  }
  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  render() {
    console.log(this.props.updateToken);
    return (
      <div center>
        <Button>
          <Login updateToken={this.props.updateToken} />
        </Button>
        <Button color='link' onClick={this.toggle}>Need to register? Click here</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <Register updateToken={this.props.updateToken} />         
        </Modal>
      </div>
    );
  }
}

export default Auth;
