import React from "react";
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavbarText,
  Container,
} from "reactstrap";
import IdeaCreate from "../ideas/IdeaCreate";

class Sitebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      setIsOpen: false,
    };
  }
  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <div>
        <Container fluid="md">
          <Navbar className="navbar" padding="30px" light expand="md">
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <IdeaCreate
                    token={this.props.token}
                    ideas={this.props.ideas}
                  />
                </NavItem>
              </Nav>
              <NavbarText className="welcome">
                Welcome the Kra-Merica Submission Portal
              </NavbarText>
              <Nav>
                <NavItem>
                  <Button
                    className="logout"
                    onClick={() => this.props.clickLogout()}
                  >
                    Logout
                  </Button>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
          <Navbar light expand="md">
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar></Nav>
            </Collapse>
          </Navbar>
        </Container>
      </div>
    );
  }
}

export default Sitebar;
