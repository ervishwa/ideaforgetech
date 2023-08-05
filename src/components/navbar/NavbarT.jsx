import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import "./navbar.css";
import { Link } from 'react-router-dom';
export function NavbarT() {


  return (
    <Navbar expand="lg" className="bg-body-tertiary fixed-top">
    <Container fluid>
      <Navbar.Brand href="#"><h3 className='color_black'><Link to="/" style={{textDecoration:"none" ,color:"black"}}>ideaForge</Link></h3></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="ms-auto my-2 my-lg-0 gap fs-5"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="/" className='color_black'>Home</Nav.Link>
          <Nav.Link  className='color_black'><Link to="/about" style={{textDecoration:"none" ,color:"black"}}>About</Link></Nav.Link>
          <NavDropdown title="Our Products" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Our Products</NavDropdown.Item>
            <NavDropdown.Item href="#action4">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#action2">Careers</Nav.Link>
          <Nav.Link href="#action2">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

