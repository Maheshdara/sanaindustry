import React,{useState} from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../images/logo.png"
import "./componet.css"
import { NavLink } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import "bootstrap/dist/css/bootstrap.min.css";
import profile from "../images/profile.png";
import email2 from "./Machines/images/email2.png";
import pass1 from "./Machines/images/pass1.png"



function NavScrollExample() {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [show, setShow] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const handleLogin = async (e) => {
      e.preventDefault();

      try {
          const response = await fetch('http://localhost:9001/api/authenticate/key', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({ userName, password })
          });

          if (response.ok) {
              const data = await response.json();
              const token = data.jwtToken; // Assuming the token is in the "token" field of the response
              document.cookie = `token=${token}; path=/`
              // Do something with the token (e.g., set it as a cookie, store it in state, etc.)
              console.log('tokenvalue:', token);
              navigate('/video')

          } else {
              setError('Invalid credentials'); // Handle login error
          }
      } catch (error) {
          console.error('Error:', error);
          setError('An error occurred'); // Handle general error
      }
  };

  return (
    <>
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
            <NavLink style={{float:"right"}} className='navi'  exact="true" onClick={handleShow}><i class="bi bi-person-circle">

              </i> &nbsp;Sign in</NavLink>




          </Nav>

        </Navbar.Collapse>
      </Container>

    </Navbar>

    <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Admin Sigin</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Container className="login-container" >

                    <Form>
                <div className="main">
                    <div className="sub-main">
                        <div>
                            <div className="imgs">
                                <div className="container-image">
                                    <img src={profile} alt="profile" className="profile"/>

                                </div>


                            </div>
                            <div>
                                <h1>Login Page</h1>
                                <div>
                                    <img src={email2} alt="email" className="email"/>
                                    <input
                                        type="text"
                                        placeholder="user name"
                                        value={userName}
                                        onChange={(e)=>{setUserName(e.target.value)}}
                                        className="name"
                                            />
                                </div>
                                <div className="second-input">
                                    <img src={pass1} alt="pass" className="email"/>
                                    <input type="password"
                                            placeholder="password"
                                            value={password}
                                            onChange={(e)=>{setPassword(e.target.value)}}
                                            className="name"/>
                                </div>
                                <div className="login-button">
                                    <button  className="loginbtn" onClick={handleLogin}>Login</button>
                                </div>
                                </div>
                        </div>


                    </div>
                </div>
            </Form>
                    </Container>


                </Modal.Body>

            </Modal>

    </>
  );
}

export default NavScrollExample;