import React from 'react'
import { NavbarBrand } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';

const Navegacion = () => {

  return (
    <>
      <Navbar className='navbar' variant='ligth' expand='lg'>
        <Container>
          <NavbarBrand className='me-0'>Julian Jaimes</NavbarBrand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <NavbarCollapse>
            <Nav className='justify-content-center flex-grow-1 me-5 pe-5'>
              <Nav.Link href='./Inicio.js'>Inicio</Nav.Link>
              <Nav.Link href='./Experiencia.js'>Experiencia</Nav.Link>
              <Nav.Link href='#projects'>Proyectos</Nav.Link>
              <Nav.Link href='#contact'>Contacto</Nav.Link>
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navegacion;