import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import './Header.css';

const Header = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" sticky="top" className="shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold">
          <span className="brand-text">Anmol's Store</span>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="mx-2">Home</Nav.Link>
            <Nav.Link as={Link} to="/shop" className="mx-2">Shop</Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown" className="mx-2">
              <NavDropdown.Item as={Link} to="/category/electronics">Electronics</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/clothing">Clothing</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/home">Home & Kitchen</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/category/offers">Special Offers</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          
          <Form className="d-flex mx-3">
            <div className="input-group">
              <FormControl
                type="search"
                placeholder="Search products..."
                className="border-end-0"
                aria-label="Search"
              />
              <Button variant="light" className="border-start-0">
                <i className="bi bi-search"></i>
              </Button>
            </div>
          </Form>
          
          <Nav>
            <Nav.Link as={Link} to="/account" className="mx-2">
              <i className="bi bi-person me-1"></i> Account
            </Nav.Link>
            <Nav.Link as={Link} to="/cart" className="mx-2 position-relative">
              <i className="bi bi-cart me-1"></i>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                3
                <span className="visually-hidden">items in cart</span>
              </span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;