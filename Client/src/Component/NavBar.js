import React from 'react';
import { Navbar, Nav, NavDropdown, Container, Image, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nails from './AV-interpreters.png';

export default function NavBarComponent() {
  return (
    <div>
      <Navbar style={{ background: "rgba(189,195,199, 0.2)" }} expand="lg" className="shadow rounded w-100">
        <Container>
          <Navbar.Brand href="#home" className="d-flex align-items-center">
            <Image
              src={Nails}
              alt="Nails and Lashes Logo"
              roundedCircle
              className="img-fluid"
              style={{ maxWidth: '60px', marginRight: '10px' }} // Ensure image does not stretch disproportionately
            />

          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"  />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Menu" id="basic-nav-dropdown">
                <NavDropdown.Item href="#">Home</NavDropdown.Item>
                <NavDropdown.Item href="#">About</NavDropdown.Item>
                <NavDropdown.Item href="#footer">Contact</NavDropdown.Item>
                <NavDropdown.Item href="#">Career</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>


        </Container>
      </Navbar>
    </div>
  );
}
