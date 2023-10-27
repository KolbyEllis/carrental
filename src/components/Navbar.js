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
            <Nav.Link id='navigation-links' href="Home">Home</Nav.Link>
            <Nav.Link id='navigation-links' href="About">About</Nav.Link>
            <Nav.Link id='navigation-links' href="VehicleModels">Vehicle Models</Nav.Link>
            <Nav.Link id='navigation-links' href="Testimonials">Testimonials</Nav.Link>
            <Nav.Link id='navigation-links' href="OurTeam">Our Team</Nav.Link>
            <Nav.Link id='navigation-links' href="ContactUs">Contact Us</Nav.Link>
          </Nav>
          <Button className="sign-btn d-none d-md-block">Sign In</Button>
          <Button className="register-btn d-none d-md-block">Register</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
