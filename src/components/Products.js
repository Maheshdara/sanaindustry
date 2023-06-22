import React,{useState} from 'react'

import NavScrollExample from './NavScrollExample'

import Banner3 from "../images/banner3.jpg"

import Container from 'react-bootstrap/Container';

import Row from 'react-bootstrap/Row';

import Col from 'react-bootstrap/Col';

import ListGroup from 'react-bootstrap/ListGroup';

import Card from 'react-bootstrap/Card';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

import micro from "../images/micropul.JPG"

import cone from "../images/conepulveriser.JPG"

import img9 from "../images/img9.jpeg"

import img24 from "../images/img24.jpeg"

import Grplant from "../images/grplant.gif"

import  Grplant1 from "../images/grplant1.gif"

import  Grplant3 from "../images/grplant3.gif"

import  Grplant4 from "../images/grplant4.gif"

import Footer from './Footer';

const Products = () => {

  const [subMenuOpen, setSubMenuOpen] = useState(-1);
  const toggleMenu = (x) => setSubMenuOpen(subMenuOpen === x ? -1 : x);




    return (

        <div>

            <NavScrollExample/>

            <img src={Banner3}alt='' className='d-block w-100'/>

            &nbsp;




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
                    {/* style={{fontSize:"25px ",fontWeight:"900" ,color:"violet"}} */}
                    <Card.Header > Our Products</Card.Header>

                        <Card.Body>

<h5>MICRO PULVERISERS</h5>




<div style={{display:"flex" ,flexDirection:"row"}}>



  <div>

  <p>The grinding of material by pounding, as in the days of old, to the present method of





    <br/> pulverizing under the impact of hammers by centrifugal force, has been<br/> evolved through scientific research in recent years. The outcome has been <br/>the design of a HAS Industries Micro Pulveriser, that can grind pulverize any<br/> non-abrasive material with accurate sizing, fineness and control of particle, as well as<br/> through mixing and blending of various ingredients in a single operation,<br/> thereby eliminating the use of several machines for each operation, thus<br/> contributing to a great in capital outlay and recurring expenditure.</p>




  </div>



  <div style={{marginLeft:"55px"}}>

  <img className='prodimg' src={micro}></img>




  </div>






</div>

<br/>

<p>The HAS Industries MAKE MICRO Pulveriser grinds with ease, safety and economy, offering a wide range of particle sizing of any non-abrasive material, hard or soft, dry or wet, from granular to finest dust of 300 mesh. Its dustless operation, keeps the surroundings free of dust and contamination which is very important for Dyes and Chemicals. Carefully designed, and ruggedly built, the HAS Industries MICRO Pulveriser assures long life. Every working part is made from selected material, tested to suit the specific duty. simple in operation, it can be easily opened and cleaned in few minutes, for grinding of different materials.</p>




<p>The material to be ground, is deposited into the feeding through, and fed to the rotor by means of feed screws, to maintain a uniform flow. The revolving hammers, grind the material against the ratchet teeth liner, until reduced to the mesh desired. The centrifugal force of the revolving hammers creates an air draft, that forces the finished product through the screen, to the collecting bag clamped to the out let at the bottom. The whole process is automatic in operation, and uniform in production. The rotor is driven by a heavy duty electric motor, and the feed drive, by means of a small or fractional horsepower electric motor, as the case may be.</p>



    <p>HAS Industries MICRO Pulverisers are manufactured in various sizes. The baby size for use in laboratories and small cottage industries, and the bigger models for large industrial production. They can be made to work singly or batches. They are manufactured to suit any kind of grinding, by variation in feed screws, hammers, screens, and speed of the rotor.</p>





    <p>The special design of the HAS Industries MICRO Pulveriser, and the air created the revolving hammers, not only cools the machine, but also maintains a low temperature of the material ground, with the result, certain heat sensitive materials, can also be ground advangeously. Once the Pulveriser is set to produce a particular grade of material, it would continue doing so day after day, with out the necessity of constant adjustment and re-adjustments. It does not require any skilled labour, to run the machine.</p>



    <p>HAS Industries MAKE MICRO Pulveriser provides accurate mesh control, with proper particle sizing, which effects chemical reactions, solubility, colour, volume, weight, strength, appearance etc., of the material ground, which goes to make the fine character and market value of the finished product. Whenever blending and dispersing is required, the Pulveriser does it in one single operation so thoroughly, that the ingredients become inspirable and indistinguishable hence, these Pulverisers also find a wide application in the processing of cosmetics, cold water paints, dry colors, chemical, foodstuffs etc.</p>



   <div style={{display:"flex" ,flexDirection:"row"}} >

     <div>

        <h5>MINI PULVERISERS</h5>

        <p>For Grinding of anything and everything wet or Dry. Specially for Grinding of Spices, etc.</p>

        <p>* ECONOMICAL</p>

        <p>* DEPENDABLE</p>

        <p>* RUGGED</p>

    </div>



<br/>

    <div style={{marginLeft:"35px"}}>

        <img className='prodimg' src={micro}></img>

    </div>

    </div>

    <p>The HAS Industries MAKE MINI PULVERISER has been designed after years of reaserch, trial and test. A simple machine that grinds without stones. Other than abrasive material, that wears off the grinding steel parts, it grinds anything and everything, wet or dry and to the fineness required. It occupies very little space, largest size is 4 x 2 x 4 1/2 ft. height, easy to operate, wash and clean. Grinding is done under cool atmospheric air, thus retaining the original colour, taste and fragrance of the material ground, which no other machine can guarantee. The powder obtained is as good as hand pound powder, guaranteeing the Agmark seal.</p>

    <p>It grinds all most all spices, masalas, salt, coffee, fresh fruits, vegetables, tobacco, sopari, herbs, toots, leaves, bark of trees, oil cake, dry fish, cattle and poultry feeds. soap chips, charcoal, bones, cardboard, cotton rags, leather and cork scrap, including chemicals, dyes, pigments, etc.</p>





<h5>MINI LABORATORY PULVERISERS</h5>




<div style={{display:"flex" ,flexDirection:"row"}}>

    <div>

    <p>The modern compact longer -lasting Pulveriser to relive you of all your heavy <br/> -duty grinding problems.</p>

    <p>HAS Industries  make mini laboratory Pulveriser is a compact unit for grinding <br/> both wet and dry material in a laboratory, Hospital. Canteen, restaurant, Cottage <br/>Industry. This Pulveriser is fabricated form Mild steel or Stainless steel, has <br/> swinging Hammers, rotating at 3000 R.P.M grinding the material to the desired <br/> fineness, depending on the material ground, while retaining all original <br/> properties. The required mesh can be obtained by a set of screens which are <br/> provided for various materials to be ground from coarse to fine. It operates free  <br/>of dust and vibrations. It is easy to handle, silent in performance, low power  <br/>consumption, and longer, and longer lasting.</p>




    </div>



    <div style={{marginLeft:"90px"}}>

        <img className='prodimg' src={micro}alt=""/>

    </div>

</div>




<h5>CONE PULVERISERS</h5>




<div style={{display:"flex" ,flexDirection:"row"}}>

    <div>

        <p>HAS Industries make cone pulverisers for grinding for grinding all non-abrasive<br/> minerals, ochars, food stuff, dye stuff, chemical etc.</p>

<p>Experience gained in the manufacture of Hammer Mills, Mini and Micro Pulverises<br/> over a period of years, ahs gone into the design of the HAS Industries Impact<br/> Pulverisers. The HAS Industries Pulverisers are acknowledged, in India and<br/> Abroad, for its robust construction, Reliability and Good Design.</p>

    </div>



    <div style={{marginLeft:"85px"}}>

        <img className='prodimg' src={cone}alt=""/>

    </div>

</div>

<h5>DRY / WET GRINDER</h5>




<div style={{display:"flex" ,flexDirection:"row"}}>

    <div>

        <p>Suitable for wet Grinding Garlic, Ginger, Onion, Mixed Vegetables etc.</p>

        <p>Suitable for Dry Grinding of Spices and Herbs.</p>

    </div>



    <div style={{marginLeft:"175px"}}>

        <img className='prodimg' src={img24}alt=""/>

    </div>

</div>

<h5>ELECTRONIC ROASTERS FOR FOOD GRADE MATERIALS</h5>




<div style={{display:"flex" ,flexDirection:"row"}}>

    <div>

        <p>

        Hourly Production (min – max): 120 Kg – 150 Kg , Maximum load per batch: 30<br/>

        Kg, Total weight of Roaster: 150 Kgs, Roast times: Brown: 10 minutes Black: 15<br/>

        minutes, Type of roasting: Thermal transfer, Type of gas ( roaster): natural /<br/>

         propane, BTU’S (Roaster): 200,000, Gas train (roaster): Honeywell, Pilot<br/>

         (on separate line): Maxitrol, Ignition: 0-2.5 sec, Full heat power in: 2.5 sec,




        </p>

    </div>



    <div style={{marginLeft:"112px"}}>

        <img className='prodimg' src={img9}alt=""/>

    </div>

</div>

<p>Type of gas(after burner): natural, BTU’s(after burner): 120,000, Gas train(after burner): Riello, Ignition at: 200C , Full power at 250C, Electrical: 220V / 60 Hz, No.& force of drum motor: 2 HP, No.& force of exhaust motor: 2 HP, No.& force of cooling arms motor: 1 HP, No.& force of cooler motor: 2 HP, No & force of loader motor: 1 HP, SCFM’s on smoke: 700, SCFM’s on cooling: 1500, Smoke thermometer: atmospheric, Bean / product thermometer: digital (Syscon), Afterburner thermometer: digital (Syscon), High limit afterburner thermometer: digital (Syscon), High limit roaster thermometer: atmospheric (White/Rogers) , Controls: digital on roaster, Software / CPU: Honeywell, High temperature security: instant shut-off, Panic button: N/A, Water quenching: no, Peephole: yes, Sampler: yes, Drum assembly: cast iron 8 mm, Smoke exhaust: type A 8” O, Cooling exhaust: type B 8” O, Loader: mechanical, Protective cover for hopper: yes, CGA Approvals / standards: yes</p>

<p>Hourly Production (min – max): 240 Kg – 300 Kg , Maximum load per batch: 60 Kg, Total weight of Roaster: 150 Kgs, Roast times: Brown: 10 minutes Black: 15 minutes, Type of roasting: Thermal transfer, Type of gas ( roaster): natural / propane, BTU’S (Roaster): 400,000, Gas train (roaster): Robert Shaw (700 series), Pilot (on separate line): Honeywell Ignition: 0-2.5 sec, Full heat power in: 0.4 sec, Type of gas(after burner): natural BTU’s(after burner): 120,000, Gas train(after burner): GP combustion  Ignition at: 200C , Full power at 250C, Electrical: 220V / 60 Hz, No.& force of drum motor: 2 HP, No.& force of exhaust motor: 1.5 HP, No.& force of cooling arms motor: 1 HP, No.& force of cooler motor: 2 HP, No & force of loader  motor: 1 HP, SCFM’s on smoke: 800, SCFM’s on cooling: 1750 Smoke thermometer: atmospheric, Bean / product thermometer: digital (Watlow), Afterburner thermometer: digital (Watlow), High limit afterburner thermometer: digital (Watlow), High limit roaster thermometer: atmospheric (Watlow), Controls: digital (remote) Software / CPU: Honeywell Security breakers: On all moters High temperature security: Instant shut – off panic button: Yes water quenching: no peephole: Yes Sampler: Yes Drum assembly: cast iron 8mm smoke exhaust: Type A 12: O cooling exhaust: Type B8” O Loader: mechanical protective cover for hopper: Yes, CGA approvals / standards:Yes</p>







               <h5>AUTOMATIC POULTRY AND CATTLE FEED GRINDING PLANT</h5>



                      <div style={{display:"flex" ,flexDirection:"row"}} >

<div>

<p>Simple Design- Study Structure Easy to Operate, Supervise and Maintenance are

    <br/> the basic Principles on which we have designed our Automatic Feed Grinding <br/>

    Plants. Our Plants therefore, can conveniently be installed even at remote places<br/>

    where technical aid is not easily available.</p>





    <p>Our Automatic feed Plants are placed on Single floor without any super structure.

    <br/> We have avoided complicated and unnecessary sophistication and automisation, <br/>

    where failure of one part in any machine results in complete Breakdown of<br/>

    Production.</p>

    <p>Our Automatic feed Plants are placed on Single floor without any super structure.

    <br/> We have avoided complicated and unnecessary sophistication and automisation, <br/>

    where failure of one part in any machine results in complete Breakdown of<br/>

    Production.</p>

    <p>Our Automatic feed Plants are placed on Single floor without any super structure.

    <br/> We have avoided complicated and unnecessary sophistication and automisation, <br/>

    where failure of one part in any machine results in complete Breakdown of<br/>

    Production.</p>

</div>




<div style={{display:"flex" ,flexDirection:"column" ,marginLeft:"85px"}}>

<img className='prodimg' src={Grplant}></img>

<br/>

<img className='prodimg' src={Grplant1}></img>

<br/>




<img className='prodimg' src={Grplant3}></img>

<br/>




<img className='prodimg' src={Grplant4}></img>




</div>





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




export default Products;