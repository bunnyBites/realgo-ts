import React from 'react';
import { Sidebar } from './sidebar/Sidebar.component';
import { Link } from 'react-router-dom';
import { Navbar, Container } from 'react-bootstrap';

export const Appbar: React.FC = () => {
  const prepareSidebarBody = () => (
    <ul className="nav flex-column nav-pills nav-fill">
      <li className="nav-item">
          <Link
              to="/bigO"
              className="nav-link text-nowrap rounded-0"
          >
              Big O
          </Link>
      </li>
    </ul>
  );

  return (
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
          <Sidebar sidebarBody={prepareSidebarBody} />
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  )
}