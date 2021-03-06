import React from 'react';
import {
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
  DropdownItem } from 'reactstrap';

  import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
  import BVlogo from './BVlogo.png';

  // import Login from './Login.js';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar light expand="md">
          <NavbarBrand href="/"><img src={BVlogo}></img></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              
              {/* <NavItem>
                <NavLink href="/components/">About Us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/properties/">Properties</NavLink>
              </NavItem> */}

              {/* <NavItem>
                <NavLink href="/properties/">{ Login }Login</NavLink>
              </NavItem> */}

              

              <Form inline>
              <FormGroup>
                <Label for="exampleEmail" hidden>Email</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
              </FormGroup>
              {' '}
              <FormGroup>
                <Label for="examplePassword" hidden>Password</Label>
                <Input type="password" name="password" id="examplePassword" placeholder="Password" />
              </FormGroup>
              {' '}
              <Button color="primary">Login</Button>
            </Form>
              
              {/* <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}