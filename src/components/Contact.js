

import React,{useState} from 'react';

import NavScrollExample from './NavScrollExample'

import Container from 'react-bootstrap/Container';

import Row from 'react-bootstrap/Row';

import Col from 'react-bootstrap/Col';

import ListGroup from 'react-bootstrap/ListGroup';

import Card from 'react-bootstrap/Card';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

import Footer from './Footer';

import Banner6 from "../images/banner6.png"




const Contact = () => {

  const [subMenuOpen, setSubMenuOpen] = useState(-1);


  const toggleMenu = (x) => setSubMenuOpen(subMenuOpen === x ? -1 : x);

  return (

    <div>

        <NavScrollExample/>

        {/* &nbsp; */}

        <img src={Banner6}  className='d-block w-100'></img>

       <br/>

       

        <Container fluid>

            <Row>

                <Col sm={4}>

                    <Card >

                        <Card.Header style={{fontSize:"25px ",fontWeight:"900" ,color:"violet"}}>Product by Category</Card.Header>

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

                            <Card.Header style={{fontSize:"25px ",fontWeight:"900" ,color:"violet"}}>News & Annocment</Card.Header>

                            <marquee

                                behavior='scroll'

                                scrollamount='3'

                                width="fit-content"

                                direction='up'

                                height='fit-content'

                            >

                                <Container>

                             

                                    <p> <span style={{color:"violet "}}>&#62;</span> We have launced our upgraded website live on 15th July 2009.</p>

                                    <p > <span style={{color:"violet "}} >&#62;</span> upgraded website live on 15th July 2009.

                                        Micro Pulveriser - Advantages </p>

                                        <p> <span style={{color:"violet "}}>&#62;</span> We have launced our upgraded website live on 15th July 2009.</p>

                                    <p> <span style={{color:"violet "}}>&#62;</span> upgraded website live on 15th July 2009.

                                        Micro Pulveriser - Advantages </p>

                                        <p> <span style={{color:"violet "}}>&#62;</span> We have launced our upgraded website live on 15th July 2009.</p>

                                    <p> <span style={{color:"violet "}}>&#62;</span> upgraded website live on 15th July 2009.

                                        Micro Pulveriser - Advantages </p>

                                        <p> <span style={{color:"violet "}}>&#62;</span> We have launced our upgraded website live on 15th July 2009.</p>

                                    <p> <span style={{color:"violet "}}>&#62;</span> upgraded website live on 15th July 2009.

                                        Micro Pulveriser - Advantages </p>

                                </Container>

                            </marquee>

                        </ListGroup>

                    </Card>

                   

                </Col>

                <Col sm={8}>

                    <Card>

                    <Card.Header style={{fontSize:"25px ",fontWeight:"900" ,color:"violet"}}> Contactus</Card.Header>

                        <Card.Body>

                        <div style={{display:"flex",flexDirection:"row" }}>

                        <a>Contact us online at :</a>

                        <a href=''>sharif@sanaindustries.co.in info@sanaindustries.co.in</a>

                        </div>

                       

                        <i>Contact us over phone at :<br/>

                        Mr.Shaik Mohd. Sharif (9849008507, 8801972212)</i>




                                 <br/>

                                 <br/>

                                 <br/>

                                    <i>Office cum Factory :<br/>

                         SANA Industries<br/>

                         4-41-440, Papireddy Nagar,<br/>

                         IDPL Colony Post, Hyderabad–500 037.<br/>

                         Mobile: 9849008507, 8801972212, Telefax: 040 - 23084500




</i>

                         




<div style={{display:"flex",flexDirection:"row" }}>

                        <a>Website :</a>

                        <a href=''>www.sanaindustries.co.in</a>

                        <a>Email :</a>

                        <a href=''>sharif@sanaindustries.co.in info@sanaindustries.co.in</a>

                        </div>

                        </Card.Body>

                    </Card>

                   





                       

                 




                </Col>





            </Row>






        </Container>

       

<Footer/>

       

        </div>

  )

}




export default Contact