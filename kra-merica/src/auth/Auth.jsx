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
      <div>
        <Button>
          <Login updateToken={this.props.updateToken} />
        </Button>
        <Button onClick={this.toggle}>Need to register? Click here</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>

          <Form>

            {/* <FormGroup>
              <Input
                type="firstName"
                name="firstName"
                placeholder="First Name"
                value={this.state.firstName}
                onChange={this.handlechange}
                required
              />
            </FormGroup> */}

            {/* <FormGroup>
              <Input
                type="lastName"
                name="lastName"
                placeholder="Last Name"
                value={this.state.lastName}
                onChange={this.handlechange}
                required
              />
            </FormGroup> */}

            {/* <FormGroup>
              <Input
                type="email"
                name="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handlechange}
                required
              />
            </FormGroup> */}

            {/* <FormGroup>
              <Input
                type="passwordhash"
                name="passwordhash"
                placeholder="Password"
                value={this.state.passwordhash}
                onChange={this.handlechange}
                required
              />
            </FormGroup> */}

            {/* <FormGroup>
              <Input
                type="admin"
                name="admin"
                placeholder="Admin"
                value={this.state.admin}
                onChange={this.handlechange}
                required
              />
            </FormGroup> */}
            <Register />
          </Form>
        </Modal>
      </div>
    );
  }
}

export default Auth;
