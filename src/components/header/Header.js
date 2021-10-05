import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import brandlogo from './brandlogo.png';

const Header = (props) => {
  console.log(props);
    return (
      
  
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
  <Container>
    
        <Navbar.Brand>
        <Link to='/home'>
                        <img
                        alt=""
                        src={brandlogo}
                        width="60"
                        height="40"
                        className="d-inline-block align-top"
                        />{' '}
                       <span className="text-danger fs-3 brandtext">E-Learning</span>
        </Link>
        </Navbar.Brand>
        
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
  
    <Nav className="ms-auto nav-Container">
    
        <NavLink activeClassName='active' to="/home">Home</NavLink>
        <NavLink activeClassName='active' to="/services">Services</NavLink>
        <NavLink activeClassName='active' to="/about">About</NavLink>
        <NavLink activeClassName='active' to="/contract">Contract Us</NavLink>
        {/* <Link to="/cart"><i className="fas fa-cart-plus fa-lg"></i>{props.quantity}</Link> */}
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
            
    );
};

export default Header;