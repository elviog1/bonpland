import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Header.css'
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <div className='d-flex justify-content-between container'>
    {/* <div> */}
      <img className='logo mb-3' src='logo.jfif' />
    <Navbar   bg="light" expand="lg">
      <Container className='d-flex justify-content-between' >
        {/* <Navbar.Brand >Bonpland</Navbar.Brand> */}


        <Navbar.Toggle  aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto  ">
            <Link className='links' to="/welcome">Home</Link>
            <Link className='links' to="/compra">Compra</Link>
            <Link className='links' to="/compra">Venta</Link>
            <Link className='links' to="/compra">Alquiler</Link>
            <Link className='links' to="/compra">Contacto</Link>
            <Link className='links' to="/compra">Nosotros</Link>

          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
    {/* </div> */}
    
    </div>

  )
}
