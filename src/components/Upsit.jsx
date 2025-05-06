import React from 'react'
import { Nav,Container,Navbar,NavDropdown } from "react-bootstrap"
import logo from "../assets/logo2.png"
export const Upsit = () => {
  return (
    <Navbar expand="lg" className="bg-body">
    <Container>
      <Navbar.Brand href="#home">
        <div className="Logo">
        <img src={logo} alt="" />
        </div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#About">About</Nav.Link>
          <Nav.Link href="#link">Service</Nav.Link>
          <Nav.Link href="#link">Contract</Nav.Link>
        </Nav>
        <div className="bt2">
          <button>Login</button>
          <button>Sin-Up</button>
        </div>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
