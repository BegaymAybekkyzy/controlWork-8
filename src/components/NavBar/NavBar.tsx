import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar bg="primary" data-bs-theme="dark" className="mb-4">
      <Container>
        <NavLink className="navbar-brand fs-2" to="/">Quotes Central</NavLink>
        <Nav className="ms-auto">
          <NavLink className="nav-link" to="/">Home</NavLink>
          <NavLink className="nav-link" to="/add-quote">Submit new quote</NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;