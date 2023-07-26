import React from 'react'
import { Badge } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./header.css";
import { Carousels } from '../carousels/Carousels';
export function Header() {
  return (
    <header>
        <Navbar expand="lg" className="bg-body-tertiary fixed-top">
      <Container fluid>
        <Navbar.Brand href="#"><h3>ideaForge</h3></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0 gap fs-5"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" >Home</Nav.Link>
            <Nav.Link href="#action2">About</Nav.Link>
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
    <Carousels/> 
    <div className="container text-center bg-white z-3 info p-1" data-aos="fade-up" data-aos-once="false" data-aos-duration="600">
      <div className="row">
        <div className="col-md-6 col-lg-6 col-12 col-sm-12 target">
          <p>Over</p>
          <h2>300,000</h2>
          <p>Customer Missions</p>
        </div>
    
        <div className="col-md-6 col-lg-6 col-12 col-sm-12">
          <p>Every</p>
          <h2>5 Mins</h2>
          <p>an ideaForge Flight Takes-off</p>
        </div>
      </div>
    </div>  
    </header>
  )
}

