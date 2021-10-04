import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = (props) => {
  console.log(props);
    return (
  
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
  <Container>
        <Navbar.Brand>
                        {/* <img
                        alt=""
                        src="/logo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        />{' '} */}
                        E-Learning
        </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
  
    <Nav className="ms-auto nav-Container">
    
        <NavLink activeClassName='active' to="/home">Home</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contract">Contract</NavLink>
        {/* <NavLink to=""><i className="fas fa-cart-plus fa-lg"></i>{props.quantity}</NavLink> */}
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
            
    );
};

export default Header;