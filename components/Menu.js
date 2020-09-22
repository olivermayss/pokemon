import React, { useState } from 'react';

import {
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
  } from 'reactstrap';

  const Menu=() => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
    <Navbar color="dark" dark expand="md">
    <Container>
    <NavbarBrand href="/">Pokemon</NavbarBrand>
    <NavbarToggler onClick={toggle} />
    <Collapse isOpen={isOpen} navbar>
      <Nav className="mr-auto" navbar>
        <NavItem>
          
        </NavItem>
       
      </Nav>
    </Collapse>
    </Container>
  </Navbar>
    )
  }

  export default Menu;

