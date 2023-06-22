

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
                                            <a   onClick={() => toggleMenu(1)}>
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

                    <Card.Header> Contactus</Card.Header>

                        <Card.Body>

                        <div style={{display:"flex",flexDirection:"row",textDecoration:"none" }}>

                        <a>Contact us online at :</a>

                        <a style={{textDecoration:"none"}}  href='mailto:mohdminhaj@hasindustries.co.in'> mohdminhaj@hasindustries.co.in</a>

                        </div>



                        <i>Contact us over phone at :<br/>

                        Mr.Mohd.Minhaj ( 8074461323, 8801100124 )</i>




                                 <br/>

                                 <br/>

                                 <br/>

                                    <i>Office cum Factory :<br/>

                         HAS Industries<br/>

                         Tata Nagar Mailardevpally, ,<br/>

                         Work Shop No : (143) , Hyderabad – 500005 .T.S. GSTIN : 36AKBPM9582E1ZX.<br/>

                         Mobile: 8074461323, 8801100124, Landline: 040 - 66772014




</i>






<div style={{display:"flex",flexDirection:"row" }}>

                        <a>Website :</a>

                        <a href='' style={{textDecoration:"none"}} >www.hasindustries.co.in</a>

                        <a>Email :</a>

                        <a href='mailto:mohdminhaj@hasindustries.co.in' style={{textDecoration:"none"}} > mohdminhaj@hasindustries.co.in</a>

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