
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../images/logo.png"
import "./componet.css"
import { NavLink } from 'react-router-dom';


function NavScrollExample() {

  return (
    <Navbar   className='navbar' bg="dark" variant={"white"} expand="lg">
      <Container fluid>
        <Navbar.Brand href="#"><img   src={logo} alt='logo' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
             className="me-auto my-2 my-lg-0"
             navbarScroll

          >
            <NavLink className='navi' to="/" exact="true" >Home</NavLink>
            <NavLink className='navi' to="/about" exact="true">About</NavLink>
            <NavLink className='navi' to="/product" exact="true">Our Products</NavLink>
            <NavLink className='navi' to="/services" exact="true">Our Services</NavLink>
            <NavLink className='navi' to="/gallery" exact="true">Photo Gallery</NavLink>
            <NavLink className='navi' to="/clients" exact="true">Clients</NavLink>
            <NavLink className='navi' to="/contact" exact="true">Contact Us</NavLink>


          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;