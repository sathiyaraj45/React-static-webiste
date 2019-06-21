import React, { Component } from 'react';
import { Nav, Navbar, Form, FormControl, Button} from 'react-bootstrap';
import './header.css';

class Header extends Component {
  render() {    
    return <div className="ab-nav-bar"><Navbar>
    <Navbar.Brand href="/">AB-Restaurant</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="/menu">Menu</Nav.Link>
      <Nav.Link href="/contact">contact</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light">Search</Button>
    </Form>
  </Navbar></div>
  }
}
export default Header;
