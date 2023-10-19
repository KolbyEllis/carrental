import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap'; // Import the Button component

function MyNavbar() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src="/logo.png" alt="" width="125" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto nav-text">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#home">Vehicle Models</Nav.Link>
            <Nav.Link href="#link">Testimonials</Nav.Link>
            <Nav.Link href="#link">Our Team</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
          </Nav>
          <Button className="nav-button1 d-none d-md-block">Sign In</Button>
          <Button className="nav-button2 d-none d-md-block">Register</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
