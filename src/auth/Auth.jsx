import React from "react";
import { Button, Modal, Container, Row, Col, Card } from "reactstrap";
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
      <div
        style={{
          height: 1000,
          backgroundColor: "#a0c4ff",
        }}
      >
        <Container
          style={{
            backgroundColor: "#ffadad",
          }}
        >
          <Row>
            <Col>
              <Card
                style={{
                  backgroundColor: "#ffadad",
                }}
              >
                <Button>
                  <Login updateToken={this.props.updateToken} />
                </Button>

                <Button
                  style={{
                    backgroundColor: "#ffadad",
                    border: null,
                  }}
                  color="link #ffadad"
                  onClick={this.toggle}
                >
                  Need to register? Click here
                </Button>

                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                  <Register updateToken={this.props.updateToken} />
                </Modal>
              </Card>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col>
              <p>
                <h3>Welcome to the Kra-Merica Employee Submission</h3>
                <h5>
                  Hello and welcome the the Kra-Merica Employee Submission
                  Portal. Here at Kra-Merica we believe in a better
                  tomorrow....today! As an employee we believe that you play an
                  integral role in moving that vision forward. Here on this
                  portal you'll be able to submit ideas and see other ideas
                  submitted by your fellow employees.
                </h5>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Auth;
