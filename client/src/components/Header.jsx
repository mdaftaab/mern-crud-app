import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <>
    <Navbar bg="dark" variant="dark" style={{ height: "50px" }}>
      <Container>
        <NavLink to="/" className="text-decoration-none text-light mx-2">MERN CRUD</NavLink>
        <Nav className="ms-auto flex gap-4">
          <NavLink to="/" className="text-decoration-none text-light ">Home</NavLink>
          <NavLink to="/register" className="text-decoration-none text-light ">Register</NavLink>
        </Nav>
      </Container>
    </Navbar>
  </>
  );
};
export default Header;
