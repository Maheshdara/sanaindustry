import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import "./componet.css";
import img1 from "../images/img1.jpeg"
import img2 from "../images/img2.jpeg"
import img3 from "../images/img3.jpeg"
import img4 from "../images/img4.jpeg"
import img5 from "../images/img5.jpeg"
import img6 from "../images/img6.jpeg"
import img7 from "../images/img7.jpeg"
import img8 from "../images/img8.jpeg"
import img9 from "../images/img9.jpeg"
import img10 from "../images/img10.jpeg"
import img11 from "../images/img11.jpeg"
import img12 from "../images/img12.jpeg"
import img13 from "../images/img13.jpeg"
import img14 from "../images/img14.jpeg"
import img15 from "../images/img15.jpeg"
import img16 from "../images/img16.jpeg"
import img17 from "../images/img17.jpeg"
import img18 from "../images/img18.jpeg"
import img19 from "../images/img19.jpeg"
import img20 from "../images/img20.jpeg"
import img21 from "../images/img21.jpeg"
import img23 from "../images/img23.jpeg"
import img24 from "../images/img24.jpeg"
import img25 from "../images/img25.jpeg"
import addbtn from "../images/addbtn.png"
import { useNavigate } from "react-router-dom";
import "../App.css"

import "bootstrap/dist/css/bootstrap.min.css";

function MidContentent() {
    const [subMenuOpen, setSubMenuOpen] = useState(-1);
    const [show, setShow] = useState(false);
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [token, setToken] = useState("");
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const toggleMenu = (x) => setSubMenuOpen(subMenuOpen === x ? -1 : x);
    const [email, setEmail] = useState('');
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
                console.log('Token vinay anna thopu:', token);
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
        <div>
            <Container fluid>
                <Row>
                    <Col sm={4}>
                        <Card >
                            <Card.Header>Product by Category</Card.Header>
                            <ListGroup variant="flush">
                                <div className="submenu-list">
                                    <ul>
                                        <li>
                                            <a to="#" onClick={() => toggleMenu(0)}>
                                                Pulverisers
                                                <FontAwesomeIcon icon={subMenuOpen === 0 ? faMinus : faPlus} />
                                            </a>

                                            <ul class={`sub-menu ${subMenuOpen === 0 ? "is-open" : ""}`}>
                                                <a href='./pulveriser'>   <li class="menu-item">

                                                    Micro Pulveriser
                                                </li></a>
                                                <a href='./cone'>
                                                    <li class="menu-item">Cone Pulveriser</li>
                                                </a>

                                            </ul>
                                        </li>
                                        <li>
                                            <a onClick={() => toggleMenu(1)}>
                                                Roasters
                                                <FontAwesomeIcon icon={subMenuOpen === 1 ? faMinus : faPlus} />
                                            </a>

                                            <ul class={`sub-menu ${subMenuOpen === 1 ? "is-open" : ""}`}>
                                                <a href='./roaster'>
                                                    <li class="menu-item">Roasters</li>
                                                </a>
                                            </ul>
                                        </li>
                                        <li>
                                            <a to="#" onClick={() => toggleMenu(2)}>
                                                Mixers/Blenders
                                                <FontAwesomeIcon icon={subMenuOpen === 2 ? faMinus : faPlus} />
                                            </a>

                                            <ul class={`sub-menu ${subMenuOpen === 2 ? "is-open" : ""}`}>
                                                <a href='./mixer'>
                                                    <li class="menu-item">Mixer / Blender:</li>
                                                </a>

                                            </ul>
                                        </li>
                                        <li>
                                            <a to="#" onClick={() => toggleMenu(3)}>
                                                Material/Conveys
                                                <FontAwesomeIcon icon={subMenuOpen === 3 ? faMinus : faPlus} />
                                            </a>

                                            <ul class={`sub-menu ${subMenuOpen === 3 ? "is-open" : ""}`}>
                                                <a href='./materialConveyers'>
                                                    <li class="menu-item"> Material/Conveys</li>
                                                </a>

                                            </ul>
                                        </li>

                                        <li>
                                            <a to="#" onClick={() => toggleMenu(5)}>
                                                Chily Plant / Turmeric Plant
                                                <FontAwesomeIcon icon={subMenuOpen === 5 ? faMinus : faPlus} />
                                            </a>

                                            <ul class={`sub-menu ${subMenuOpen === 5 ? "is-open" : ""}`}>

                                                <a href='./chilliplant'>
                                                    <li class="menu-item">   Chily Plant</li>
                                                </a>
                                                <a href='./turmericplant'>
                                                    <li class="menu-item"> Turmeric Plant</li>
                                                </a>
                                            </ul>
                                        </li>
                                        <li>
                                            <a to="#" onClick={() => toggleMenu(6)}>

                                                Grinding Pulveriser                                                <FontAwesomeIcon icon={subMenuOpen === 6 ? faMinus : faPlus} />
                                            </a>

                                            <ul class={`sub-menu ${subMenuOpen === 6 ? "is-open" : ""}`}>
                                                <a href='./ginger'>

                                                    <li class="menu-item">Ginger / Garlic / Onion Paste
                                                        /Sugar Grinding Pulveriser</li>
                                                </a>
                                            </ul>
                                        </li>
                                        <li>
                                            <a to="#" onClick={() => toggleMenu(7)}>
                                                Dustproof Turmeric Polishing Machine
                                                <FontAwesomeIcon icon={subMenuOpen === 7 ? faMinus : faPlus} />
                                            </a>

                                            <ul class={`sub-menu ${subMenuOpen === 7 ? "is-open" : ""}`}>
                                                <a href='./dustproof'>
                                                    <li class="menu-item"> Dustproof Turmeric Polishing Machine</li>
                                                </a>
                                            </ul>
                                        </li>
                                        <li>
                                            <a to="#" onClick={() => toggleMenu(8)}>
                                                Chilly Cleaning Machine
                                                <FontAwesomeIcon icon={subMenuOpen === 8 ? faMinus : faPlus} />
                                            </a>

                                            <ul class={`sub-menu ${subMenuOpen === 8 ? "is-open" : ""}`}>
                                                <a href='./chillycleaning'>

                                                    <li class="menu-item">Chilly Cleaning Machine</li>
                                                </a>
                                            </ul>
                                        </li>
                                        <li>
                                            <a to="#" onClick={() => toggleMenu(9)}>
                                                Automatic Sugar Grinding Plant :

                                                <FontAwesomeIcon icon={subMenuOpen === 9 ? faMinus : faPlus} />
                                            </a>

                                            <ul class={`sub-menu ${subMenuOpen === 9 ? "is-open" : ""}`}>
                                                <a href='./sugargrinding'>

                                                    <li class="menu-item">Automatic Sugar Grinding Plant   </li>
                                                </a>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </ListGroup>
                        </Card>

                        <br />
                        <Card>
                            <ListGroup variant="flush">
                                <Card.Header>News & Annocment</Card.Header>
                                <marquee
                                    behavior='scroll'
                                    scrollamount='3'
                                    width="fit-content"
                                    direction='up'
                                    height='fit-content'
                                >
                                    <Container>

                                        <p> <span style={{ color: "cyan " }}>&#62;</span> We have launced our upgraded website live on 15th July 2009.</p>
                                        <p > <span style={{ color: "cyan " }} >&#62;</span> upgraded website live on 15th July 2009.
                                            Micro Pulveriser - Advantages </p>
                                        <p> <span style={{ color: "cyan " }}>&#62;</span> We have launced our upgraded website live on 15th July 2009.</p>
                                        <p> <span style={{ color: "cyan " }}>&#62;</span> upgraded website live on 15th July 2009.
                                            Micro Pulveriser - Advantages </p>
                                        <p> <span style={{ color: "cyan " }}>&#62;</span> We have launced our upgraded website live on 15th July 2009.</p>
                                        <p> <span style={{ color: "cyan " }}>&#62;</span> upgraded website live on 15th July 2009.
                                            Micro Pulveriser - Advantages </p>
                                        <p> <span style={{ color: "cyan " }}>&#62;</span> We have launced our upgraded website live on 15th July 2009.</p>
                                        <p> <span style={{ color: "cyan " }}>&#62;</span> upgraded website live on 15th July 2009.
                                            Micro Pulveriser - Advantages </p>
                                    </Container>
                                </marquee>
                            </ListGroup>
                        </Card>

                    </Col>
                    <Col sm={8}>
                        <Card>
                            <Card.Header>Home</Card.Header>
                            <Card.Body>Welcome to corporate website of HAS Industries.<br /><br />
                                HAS Industries, Hyderabad, is the only one engineering industry Best in India for their range of food processing machinery.<br /><br />
                                All types of Automatic Chillies, Cumin,
                                Coriander, Turmeric, Besan Grinding Plants,
                                Centrifugal Dressers, Chilly Cleaning Unit,
                                Ginger Garlic Paste, Roasters for Cumin,
                                Coarinder, Mixing of Spices Powders for Mixers,
                                Vibro Sifters for Sieving various powders, Screw
                                Conveyors, Dust Proof Turmeric Polishing
                                Machines, Herbal Roots, Leafs Grinding Plants,
                                Saw Dust, Coconut Shell Grinding Plants. Corn,
                                Maize, Sugar, Black Salt, Grinding Plants, Bucket
                                Elevators for lifting the materials, Poultry and
                                Cattle Feed Grinding Units.

                            </Card.Body>
                        </Card>
                        <Container>
                            <img className="midimg" style={{ height: "150px", width: "150px" }} src={img1} />
                            <img className="midimg" src={img2} />
                            <img className="midimg" src={img3} />
                            <img className="midimg" src={img4} />
                            <img className="midimg" src={img5} />
                            <img className="midimg" src={img6} />
                            <img className="midimg" src={img7} />
                            <img className="midimg" src={img8} />
                            <img className="midimg" src={img9} />
                            <img className="midimg" src={img10} />
                            <img className="midimg" src={img11} />
                            <img className="midimg" src={img12} />
                            <img className="midimg" src={img13} />
                            <img className="midimg" src={img14} />
                            <img className="midimg" src={img15} />
                            <img className="midimg" src={img16} />
                            <img className="midimg" src={img17} />
                            <img className="midimg" src={img18} />
                            <img className="midimg" src={img19} />
                            <img className="midimg" src={img20} />
                            <img className="midimg" src={img21} />
                            <img className="midimg" src={img23} />
                            <img className="midimg" src={img24} />
                            <img className="midimg" src={img25} />
                            <img className="midimg" src={addbtn} onClick={handleShow} />

                        </Container>


                    </Col>


                </Row>
            </Container>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Admin Sigin</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Container className="login-container" >

                        <Form className='formey' style={{ marginBottom: "20px" }}>
                            <Form.Group controlId="formUsername">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" placeholder="Enter your username" value={userName}
                                    onChange={(e) => { setUserName(e.target.value) }} />
                            </Form.Group>

                            <Form.Group controlId="formPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter your password" value={password}
                                    onChange={(e) => { setPassword(e.target.value) }} />
                            </Form.Group>
                            <br />

                            <Button className='signinbutton' variant="primary" type="submit" onClick={handleLogin}>
                                Sign In
                            </Button>
                        </Form>
                    </Container>


                </Modal.Body>

            </Modal>



        </div>

    );
}

export default MidContentent;