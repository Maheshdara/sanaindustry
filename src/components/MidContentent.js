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
import img1 from "../images/img1.jpg"
import img2 from "../images/img2.jpg"
import img3 from "../images/img3.jpg"
import img4 from "../images/img4.jpg"
import img5 from "../images/img5.jpg"
import img6 from "../images/img6.jpg"
import img7 from "../images/img7.jpg"
import img8 from "../images/img8.jpg"
import img9 from "../images/img9.jpg"
import img10 from "../images/img10.jpg"
import img11 from "../images/img11.jpg"
import img12 from "../images/img12.jpg"
import img13 from "../images/img13.jpg"
import img14 from "../images/img14.jpg"
import img15 from "../images/img15.jpg"
import img16 from "../images/img16.jpg"
import img17 from "../images/img17.jpg"
import img18 from "../images/img18.jpg"
import img19 from "../images/img19.jpg"
import img20 from "../images/img20.jpg"
import img21 from "../images/img21.jpg"
// import img22 from "../images/img22.jpg"
import img23 from "../images/img23.jpg"
import img24 from "../images/img24.jpg"
import img25 from "../images/img25.jpg"
import email2 from '../images/email2.png'
import pass1 from "../images/pass1.png"
import profile from "../images/profile.png"
import addbtn from "../images/addbtn.png"
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

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
          const response = await fetch('http://192.168.0.118:8080/api/authenticate/key', {
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
                                                <a href='/pulveriser'>   <li class="menu-item">

                                                    Micro Pulveriser
                                                </li></a>
                                                <li class="menu-item">Cone Pulveriser</li>
                                                <li class="menu-item">Bottom Discharge Pulveriser</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a to="#" onClick={() => toggleMenu(1)}>
                                                Roasters
                                                <FontAwesomeIcon icon={subMenuOpen === 1 ? faMinus : faPlus} />
                                            </a>

                                            <ul class={`sub-menu ${subMenuOpen === 1 ? "is-open" : ""}`}>
                                                <li class="menu-item">

                                                    Dry / Wet Grinder</li>
                                                <li class="menu-item">Sub-Item 2</li>
                                                <li class="menu-item">Sub-Item 3</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a to="#" onClick={() => toggleMenu(2)}>
                                                Mixers/Blenders
                                                <FontAwesomeIcon icon={subMenuOpen === 2 ? faMinus : faPlus} />
                                            </a>

                                            <ul class={`sub-menu ${subMenuOpen === 2 ? "is-open" : ""}`}>
                                                <li class="menu-item">

                                                    Dry / Wet Grinder</li>
                                                <li class="menu-item">Sub-Item 2</li>
                                                <li class="menu-item">Sub-Item 3</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a to="#" onClick={() => toggleMenu(3)}>
                                                Material/Conveys
                                                <FontAwesomeIcon icon={subMenuOpen === 3 ? faMinus : faPlus} />
                                            </a>

                                            <ul class={`sub-menu ${subMenuOpen === 3 ? "is-open" : ""}`}>
                                                <li class="menu-item">

                                                    Dry / Wet Grinder</li>
                                                <li class="menu-item">Sub-Item 2</li>
                                                <li class="menu-item">Sub-Item 3</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a to="#" onClick={() => toggleMenu(4)}>
                                                Poultry/Cattle feeed Mixing
                                                <FontAwesomeIcon icon={subMenuOpen === 4 ? faMinus : faPlus} />
                                            </a>

                                            <ul class={`sub-menu ${subMenuOpen === 4 ? "is-open" : ""}`}>
                                                <li class="menu-item">

                                                    Dry / Wet Grinder</li>
                                                <li class="menu-item">Sub-Item 2</li>
                                                <li class="menu-item">Sub-Item 3</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a to="#" onClick={() => toggleMenu(5)}>
                                                Chily Plant / Turmeric Plant
                                                <FontAwesomeIcon icon={subMenuOpen === 5 ? faMinus : faPlus} />
                                            </a>

                                            <ul class={`sub-menu ${subMenuOpen === 5 ? "is-open" : ""}`}>
                                                <li class="menu-item">

                                                    Dry / Wet Grinder</li>
                                                <li class="menu-item">Sub-Item 2</li>
                                                <li class="menu-item">Sub-Item 3</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a to="#" onClick={() => toggleMenu(6)}>
                                                Chilly Plant/ Turmeric Plant
                                                <FontAwesomeIcon icon={subMenuOpen === 6 ? faMinus : faPlus} />
                                            </a>

                                            <ul class={`sub-menu ${subMenuOpen === 6 ? "is-open" : ""}`}>
                                                <li class="menu-item">

                                                    Dry / Wet Grinder</li>
                                                <li class="menu-item">Sub-Item 2</li>
                                                <li class="menu-item">Sub-Item 3</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a to="#" onClick={() => toggleMenu(7)}>
                                                Dustproof Turmeric Polishing Machine
                                                <FontAwesomeIcon icon={subMenuOpen === 7 ? faMinus : faPlus} />
                                            </a>

                                            <ul class={`sub-menu ${subMenuOpen === 7 ? "is-open" : ""}`}>
                                                <li class="menu-item">

                                                    Dry / Wet Grinder</li>
                                                <li class="menu-item">Sub-Item 2</li>
                                                <li class="menu-item">Sub-Item 3</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a to="#" onClick={() => toggleMenu(8)}>
                                                Vibroshifter
                                                <FontAwesomeIcon icon={subMenuOpen === 8 ? faMinus : faPlus} />
                                            </a>

                                            <ul class={`sub-menu ${subMenuOpen === 8 ? "is-open" : ""}`}>
                                                <li class="menu-item">

                                                    Dry / Wet Grinder</li>
                                                <li class="menu-item">Sub-Item 2</li>
                                                <li class="menu-item">Sub-Item 3</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a to="#" onClick={() => toggleMenu(9)}>
                                                Grinders
                                                <FontAwesomeIcon icon={subMenuOpen === 9 ? faMinus : faPlus} />
                                            </a>

                                            <ul class={`sub-menu ${subMenuOpen === 9 ? "is-open" : ""}`}>
                                                <li class="menu-item">

                                                    Dry / Wet Grinder</li>
                                                <li class="menu-item">Sub-Item 2</li>
                                                <li class="menu-item">Sub-Item 3</li>
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
                            <Card.Body>SANA Industries make cone pulverisers for grinding for grinding all non-abrasive minerals, ochars, food stuff, dye stuff, chemical etc. <br /><br />

                                Experience gained in the manufacture of Hammer Mills, Mini and Micro Pulverises over a period of years, ahs gone into the design of the SANA Industries Impact Pulverisers. The SANA Industries Pulverisers are acknowledged, in India and Abroad, for its robust construction, Reliability and Good Design.<br /><br />

                                The SANA Industries Impact Pulveriser is a versatile grinding unit of heavy and rugged construction and built for continuous operation day after day. The unit is especially designed for the medium fine, and fine size reduction of minerals, ocher’s, clays, food stuff, crude drugs, pharmaceutical products, brass, zinc, dross separation, and a wide range of chemicals, pulses, agarbathi materials, dyes, pigments, tapioca, tobacco, coconut shells, saw dust, tamarind seeds, soap nut, henna leaves, turmeric, katha, charcoal etc. <br /><br />

                                The SANA Impact Pulverisers meet most capacity requirements and lend themselves to a vide degree of adjustments with fineness of the finished product ranging from about 60 mesh to bulk passing through 300 mesh depending on a considerable extent to the particular material being handled. Unlike a hammer mill, it has no screens to break, wear out or clog in the crushing chamber. The SANA IMPACT PULVERISER combines grinding, classifying and conveying all in one single unit.</Card.Body>
                        </Card>
                        <Container>
                            <a href='#'><img src={img1} /></a>
                            <a href='#'><img src={img2} /></a>
                            <a href='#'><img src={img3} /></a>
                            <a href='#'><img src={img4} /></a>
                            <a href='#'><img src={img5} /></a>
                            <a href='#'><img src={img6} /></a>
                            <a href='#'><img src={img7} /></a>
                            <a href='#'><img src={img8} /></a>
                            <a href='#'><img src={img9} /></a>
                            <a href='#'><img src={img10} /></a>
                            <a href='#'><img src={img11} /></a>
                            <a href='#'><img src={img12} /></a>
                            <a href='#'><img src={img13} /></a>
                            <a href='#'><img src={img14} /></a>
                            <a href='#'><img src={img15} /></a>
                            <a href='#'><img src={img16} /></a>
                            <a href='#'><img src={img17} /></a>
                            <a href='#'><img src={img18} /></a>
                            <a href='#'><img src={img19} /></a>
                            <a href='#'><img src={img20} /></a>
                            <a href='#'><img src={img21} /></a>

                            <a href='#'><img src={img23} /></a>
                            <a href='#'><img src={img24} /></a>
                            <a href='#'><img src={img25} /></a>

                            <a href='#'><img className="pluse" src={addbtn} onClick={handleShow} /></a>





                        </Container>


                    </Col>


                </Row>
            </Container>
            
            <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                    <Form>
                        <div className="main">
                            <div className="sub-main">
                                <div>
                                    <div className="imgs">
                                        <div className="container-image">
                                            <img src={profile} alt="profile" className="profile" />

                                        </div>


                                    </div>
                                    <div>
                                        <h1>Login Page</h1>
                                        <div>
                                            <img src={email2} alt="email" className="email" />
                                            <input
                                                type="text"
                                                placeholder="user name"
                                                value={userName}
                                                onChange={(e) => { setUserName(e.target.value) }}
                                                className="name"
                                            />
                                        </div>
                                        <div className="second-input">
                                            <img src={pass1} alt="pass" className="email" />
                                            <input type="password"
                                                placeholder="password"
                                                value={password}
                                                onChange={(e) => { setPassword(e.target.value) }}
                                                className="name" />
                                        </div>
                                        <div className="login-button">
                                            <button onClick={handleLogin}>Login</button>
                                        </div>




                                    </div>
                                </div>


                            </div>
                        </div>
                    </Form>

                </Modal.Body>
            </Modal>


        </div>

    );
}

export default MidContentent;