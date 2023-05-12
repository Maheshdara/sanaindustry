// import React from 'react'

// const Pulveriser = () => {
//   return (
//     <div>

// <Col sm={8}>
//                     <Card>
//                     <Card.Header>Pulveriser</Card.Header>
//                         <Card.Body>SANA Industries make cone pulverisers for grinding for grinding all non-abrasive minerals, ochars, food stuff, dye stuff, chemical etc. <br /><br />

//                             Experience gained in the manufacture of Hammer Mills, Mini and Micro Pulverises over a period of years, ahs gone into the design of the SANA Industries Impact Pulverisers. The SANA Industries Pulverisers are acknowledged, in India and Abroad, for its robust construction, Reliability and Good Design.<br /><br />

//                             The SANA Industries Impact Pulveriser is a versatile grinding unit of heavy and rugged construction and built for continuous operation day after day. The unit is especially designed for the medium fine, and fine size reduction of minerals, ocher’s, clays, food stuff, crude drugs, pharmaceutical products, brass, zinc, dross separation, and a wide range of chemicals, pulses, agarbathi materials, dyes, pigments, tapioca, tobacco, coconut shells, saw dust, tamarind seeds, soap nut, henna leaves, turmeric, katha, charcoal etc. <br /><br />

//                             The SANA Impact Pulverisers meet most capacity requirements and lend themselves to a vide degree of adjustments with fineness of the finished product ranging from about 60 mesh to bulk passing through 300 mesh depending on a considerable extent to the particular material being handled. Unlike a hammer mill, it has no screens to break, wear out or clog in the crushing chamber. The SANA IMPACT PULVERISER combines grinding, classifying and conveying all in one single unit.</Card.Body>
//                     </Card>
//                 </Col>

//     </div>
//   )
// }

// export default Pulveriser



import NavScrollExample from './NavScrollExample'
import Banner from './Banner'
import Footer from './Footer'
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


const Pulveriser = () => {
    const [subMenuOpen, setSubMenuOpen] = useState(-1);
    const toggleMenu = (x) => setSubMenuOpen(subMenuOpen === x ? -1 : x);
  return (
    <div>
        <NavScrollExample/>
        <Banner/>
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
                                <FontAwesomeIcon icon="fa-sharp fa-solid fa-arrow-right" />
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
                    <Card.Header>Pulverisers</Card.Header>
                        <Card.Body>MICRO PULVERISERS	    
The grinding of material by pounding, as in the days of old, to the present method of pulverizing under the impact of hammers by centrifugal force, has been evolved through scientific research in recent years. The outcome has been the design of a SANA Industries Micro Pulveriser, that can grind pulverize any non-abrasive material with accurate sizing, fineness and control of particle, as well as through mixing and blending of various ingredients in a single operation, thereby eliminating the use of several machines for each operation, thus contributing to a great in capital outlay and recurring expenditure. <br/><br/><img src={img1} alt='img1'></img><br/><br/>
The SANA Industries MAKE MICRO Pulveriser grinds with ease, safety and economy, offering a wide range of particle sizing of any non-abrasive material, hard or soft, dry or wet, from granular to finest dust of 300 mesh. Its dustless operation, keeps the surroundings free of dust and contamination which is very important for Dyes and Chemicals. Carefully designed, and ruggedly built, the SANA Industries MICRO Pulveriser assures long life. Every working part is made from selected material, tested to suit the specific duty. simple in operation, it can be easily opened and cleaned in few minutes, for grinding of different materials.<br/><br/>

The material to be ground, is deposited into the feeding through, and fed to the rotor by means of feed screws, to maintain a uniform flow. The revolving hammers, grind the material against the ratchet teeth liner, until reduced to the mesh desired. The centrifugal force of the revolving hammers creates an air draft, that forces the finished product through the screen, to the collecting bag clamped to the out let at the bottom. The whole process is automatic in operation, and uniform in production. The rotor is driven by a heavy duty electric motor, and the feed drive, by means of a small or fractional horsepower electric motor, as the case may be.

SANA Industries MICRO Pulverisers are manufactured in various sizes. The baby size for use in laboratories and small cottage industries, and the bigger models for large industrial production. They can be made to work singly or batches. They are manufactured to suit any kind of grinding, by variation in feed screws, hammers, screens, and speed of the rotor.

The special design of the SANA Industries MICRO Pulveriser, and the air created the revolving hammers, not only cools the machine, but also maintains a low temperature of the material ground, with the result, certain heat sensitive materials, can also be ground advangeously. Once the Pulveriser is set to produce a particular grade of material, it would continue doing so day after day, with out the necessity of constant adjustment and re-adjustments. It does not require any skilled labour, to run the machine.

SANA Industries MAKE MICRO Pulveriser provides accurate mesh control, with proper particle sizing, which effects chemical reactions, solubility, colour, volume, weight, strength, appearance etc., of the material ground, which goes to make the fine character and market value of the finished product. Whenever blending and dispersing is required, the Pulveriser does it in one single operation so thoroughly, that the ingredients become inspirable and indistinguishable hence, these Pulverisers also find a wide application in the processing of cosmetics, cold water paints, dry colors, chemical, foodstuffs etc.

MINI PULVERISERS	
For Grinding of anything and everything wet or Dry. Specially for Grinding of Spices, etc.<br/><br/><br/>

* ECONOMICAL<br/><br/>

* DEPENDABLE<br/><br/>

* RUGGED<br/><br/>
The SANA Industries MAKE MINI PULVERISER has been designed after years of reaserch, trial and test. A simple machine that grinds without stones. Other than abrasive material, that wears off the grinding steel parts, it grinds anything and everything, wet or dry and to the fineness required. It occupies very little space, largest size is 4 x 2 x 4 1/2 ft. height, easy to operate, wash and clean. Grinding is done under cool atmospheric air, thus retaining the original colour, taste and fragrance of the material ground, which no other machine can guarantee. The powder obtained is as good as hand pound powder, guaranteeing the Agmark seal.

It grinds all most all spices, masalas, salt, coffee, fresh fruits, vegetables, tobacco, sopari, herbs, toots, leaves, bark of trees, oil cake, dry fish, cattle and poultry feeds. soap chips, charcoal, bones, cardboard, cotton rags, leather and cork scrap, including chemicals, dyes, pigments, etc.

MINI LABORATORY PULVERISERS	
The modern compact longer - lasting Pulveriser to relive you of all your heavy - duty grinding problems.

SANA Industries  make mini laboratory Pulveriser is a compact unit for grinding both wet and dry material in a laboratory, Hospital. Canteen, restaurant, Cottage Industry. This Pulveriser is fabricated form Mild steel or Stainless steel, has swinging Hammers, rotating at 3000 R.P.M grinding the material to the desired fineness, depending on the material ground, while retaining all original properties. The required mesh can be obtained by a set of screens which are provided for various materials to be ground from coarse to fine. It operates free of dust and vibrations. It is easy to handle, silent in performance, low power consumption, and longer, and longer lasting.</Card.Body>
                    </Card>
                </Col>


            </Row>




        </Container>
        <br/><br/>
       <Footer/>
       
    </div>
  )
}

export default Pulveriser