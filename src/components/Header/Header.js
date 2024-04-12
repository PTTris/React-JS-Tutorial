import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.png';

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
         <NavLink className="navbar-brand" to="/">
            <img className='logoFire' src={Logo}/> 
         </NavLink>
         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
         <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
               <NavLink className="nav-link" to="/">Home</NavLink>
               <NavLink className="nav-link" to="/users">User</NavLink>
               <NavLink className="nav-link" to="/admins">Admin</NavLink>
            </Nav>
            <Nav>
            <button className='btnLogIn'>Log in</button>
            <button className='btnSignUp'>Sign Up</button>
            {/* <NavDropdown title="Setting" id="collapsible-nav-dropdown">
               <NavDropdown.Item href="/login">Log in</NavDropdown.Item>
               <NavDropdown.Item href="/logout">Log out</NavDropdown.Item>
            </NavDropdown> */}
            </Nav>
         </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;