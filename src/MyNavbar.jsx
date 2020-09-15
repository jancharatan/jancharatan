import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const MyNavbar = () => (
  <Navbar bg="dark" variant="dark" expand="lg">
    <Navbar.Brand>Jan Charatan </Navbar.Brand>
    <Nav.Link href="https://www.linkedin.com/in/jan-charatan-807b7b191/" className="navbar-right">
      <LinkedInIcon />
    </Nav.Link>
    <Nav.Link href="https://github.com/jancharatan">
      <GitHubIcon />
    </Nav.Link>
  </Navbar>
);

export default MyNavbar;
