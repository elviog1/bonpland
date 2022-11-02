import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Header() {
  return (

    <Navbar className='' bg="light" expand="lg">
      <Container >
        <Navbar.Brand href="#home">Bonpland</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link href="#home">Compra</Nav.Link>
            <Nav.Link href="#home">Venta</Nav.Link>
            <Nav.Link href="#home">Alquiler</Nav.Link>
            <Nav.Link href="#home">Contacto</Nav.Link>
            <Nav.Link href="#home">Nosotros</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}
