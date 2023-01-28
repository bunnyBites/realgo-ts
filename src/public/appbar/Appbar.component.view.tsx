import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { Sidebar } from './sidebar/Sidebar.component';

export const AppbarView: React.FC = () => (
  <Navbar bg="info" variant="dark" expand={false}>
    <Container fluid>
      <Navbar.Brand href="#home">DS Algo</Navbar.Brand>
      <Navbar.Toggle aria-controls="offcanvasNavbar" />
      <Navbar.Offcanvas
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
        placement="end"
        backdrop={false}
      >
        <Sidebar />
      </Navbar.Offcanvas>
    </Container>
  </Navbar>
);
