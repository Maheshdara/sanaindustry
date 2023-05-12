import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
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


function MidContentent() {
    const [subMenuOpen, setSubMenuOpen] = useState(-1);
    const toggleMenu = (x) => setSubMenuOpen(subMenuOpen === x ? -1 : x);
    return (
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
                                         <a href='/pulveriser'>   <li  class="menu-item">

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
                  
                    <br/>
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
                              
                                    <p> <span style={{color:"cyan "}}>&#62;</span> We have launced our upgraded website live on 15th July 2009.</p>
                                    <p > <span style={{color:"cyan "}} >&#62;</span> upgraded website live on 15th July 2009.
                                        Micro Pulveriser - Advantages </p>
                                        <p> <span style={{color:"cyan "}}>&#62;</span> We have launced our upgraded website live on 15th July 2009.</p>
                                    <p> <span style={{color:"cyan "}}>&#62;</span> upgraded website live on 15th July 2009.
                                        Micro Pulveriser - Advantages </p>
                                        <p> <span style={{color:"cyan "}}>&#62;</span> We have launced our upgraded website live on 15th July 2009.</p>
                                    <p> <span style={{color:"cyan "}}>&#62;</span> upgraded website live on 15th July 2009.
                                        Micro Pulveriser - Advantages </p>
                                        <p> <span style={{color:"cyan "}}>&#62;</span> We have launced our upgraded website live on 15th July 2009.</p>
                                    <p> <span style={{color:"cyan "}}>&#62;</span> upgraded website live on 15th July 2009.
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
                        <a href='#'><img src={img1}/></a>
                        <a href='#'><img src={img2}/></a>
                        <a href='#'><img src={img3}/></a>
                        <a href='#'><img src={img4}/></a>
                        <a href='#'><img src={img5}/></a>
                       <a href='#'><img  src={img6}/></a> 
                       <a href='#'><img src={img7}/></a>
                        <a href='#'><img src={img8}/></a>
                        <a href='#'><img src={img9}/></a>
                        <a href='#'><img src={img10}/></a>
                        <a href='#'><img src={img11}/></a>
                       <a href='#'><img  src={img12}/></a> 
                       <a href='#'><img src={img13}/></a>
                        <a href='#'><img src={img14}/></a>
                        <a href='#'><img src={img15}/></a>
                        <a href='#'><img src={img16}/></a>
                        <a href='#'><img src={img17}/></a>
                        <a href='#'><img src={img18}/></a>
                        <a href='#'><img src={img19}/></a>
                        <a href='#'><img src={img20}/></a>
                        <a href='#'><img src={img21}/></a>
                    
                       <a href='#'><img src={img23}/></a>
                        <a href='#'><img src={img24}/></a>
                        <a href='#'><img src={img25}/></a>
                        

                       </Container>
                  

                </Col>


            </Row>




        </Container>
    );
}

export default MidContentent;