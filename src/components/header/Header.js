import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';
import brandlogo from './brandlogo.png';

const Header = (props) => {
  console.log(props);
    return (
      
  
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
  <Container>
        <Navbar.Brand>
                        <img
                        alt=""
                        src={brandlogo}
                        width="60"
                        height="40"
                        className="d-inline-block align-top"
                        />{' '}
                       <span className="text-danger fs-3 brandtext">E-Learning</span>
        </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
  
    <Nav className="ms-auto nav-Container">
    
        <NavLink activeClassName='active' to="/home">Home</NavLink>
        <NavLink activeClassName to="/services">Services</NavLink>
        <NavLink activeClassName to="/about">About</NavLink>
        <NavLink activeClassName to="/contract">Contract</NavLink>
        <NavLink to="/cart"><i className="fas fa-cart-plus fa-lg"></i>{props.quantity}</NavLink>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
            
    );
};

export default Header;