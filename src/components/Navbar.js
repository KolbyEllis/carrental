import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap'; // Import the Button component

function MyNavbar() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="Home">
          <img src="/logo.png" alt="" width="125" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto nav-text">
            <Nav.Link href="Home">Home</Nav.Link>
            <Nav.Link href="About">About</Nav.Link>
            <Nav.Link href="VehicleModels">Vehicle Models</Nav.Link>
            <Nav.Link href="Testimonials">Testimonials</Nav.Link>
            <Nav.Link href="OurTeam">Our Team</Nav.Link>
            <Nav.Link href="ContactUs">Contact Us</Nav.Link>
          </Nav>
          <Button className="nav-button1 d-none d-md-block">Sign In</Button>
          <Button className="nav-button2 d-none d-md-block">Register</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
