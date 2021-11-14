import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Button, Modal, FormGroup, Input, Form, Container, Row, Col, Jumbotron, Card } from "reactstrap";
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
      <div style={{
        height: 1000,
        backgroundColor: '#a0c4ff'
      }}>
        
        <Container style={{
          backgroundColor: '#ffadad'
        }} >  
            <Row>  
              <Col>
        <Card style={{
          backgroundColor:'#ffadad',
          }}>     
        <Button>
          <Login  updateToken={this.props.updateToken} />
        </Button>
        
        <Button style={{
          backgroundColor:'#ffadad',
          border:null
          }} 
        color='link #ffadad' onClick={this.toggle}>Need to register? Click here</Button>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <Register updateToken={this.props.updateToken} />         
        </Modal>     
        </Card>
        </Col>
        </Row>       
        </Container>

        <Container >
          <Row>
            <Col>
            <p>
              <h3>Welcome to the Kra-Merica Employee Submission</h3>
              <h5>fjdkfdjffjf
                fjfksdjfkfjsdjfsdlf
                fdfjdksjfkdsjfsdjf
                djfkdsjfkls;a
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
