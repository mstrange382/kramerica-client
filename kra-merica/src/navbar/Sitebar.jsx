import React from "react";
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import IdeaCreate from "../ideas/IdeaCreate";
import CommentCreate from "../comments/CommentCreate";

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
        
        <Navbar color="light" light expand="md">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <IdeaCreate token={this.props.token} ideas={this.props.ideas} />
              </NavItem>
              <NavItem>
                <CommentCreate
                  token={this.props.token}
                  comments={this.props.comments}
                />
              </NavItem>
            </Nav>
            <NavbarText>Simple Text</NavbarText>
            <NavItem>
                <Button  onClick={() => this.props.clickLogout()}>Logout</Button>
              </NavItem>
          </Collapse>
        </Navbar>
        <Navbar  light expand="md">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Sitebar;
