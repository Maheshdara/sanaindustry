import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About"
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from "./components/Products";
import Services from "./components/Services";
import Gallery from "./components/GalleryFinal";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Pulveriser from "./components/Machines/Pulveriser";
import Conepulveriser from "./components/Machines/Conepulveriser"
import Videoupload from "./components/VideouploadFinal";
import MaterialConveyers from "./components/Machines/MaterialConveyers";
import Roasters from "./components/Machines/Roasters";
import Mixer from "./components/Machines/Mixer";
import Dustproof from "./components/Machines/Dustproof";
import Tumeric from "./components/Machines/Tumeric";
import Chilli from "./components/Machines/Chilli";
import ChilliGrinding from "./components/Machines/ChilliGrinding";
import SugarGrinding from "./components/Machines/SugarGrinding";
import Ginger from "./components/Machines/Ginger";




export default function App() {
  return (
    <div>

    <BrowserRouter>
      <Routes>
        <Route  path="/"  element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/product" element={<Products />}/>
        <Route path="/services" element={<Services />}/>
        <Route path="/gallery" element={<Gallery />}/>
        <Route path="/clients" element={<Clients />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/pulveriser" element={<Pulveriser />}/>
        <Route path="/cone" element={<Conepulveriser/>}/>
        <Route path="/video" element={<Videoupload/>}/>
        <Route path="/roaster" element={<Roasters/>}/>
        <Route path="/mixer" element={<Mixer/>}/>
        <Route path="/materialConveyers" element={<MaterialConveyers/>}/>
        <Route path="/chilliplant" element={<Chilli/>}/>
        <Route path="/turmericplant" element={<Tumeric/>}/>
          <Route path="/dustproof" element={<Dustproof/>}/>

          <Route path="/ginger" element={<Ginger/>}/>

        <Route path="/chillycleaning" element={<ChilliGrinding/>}/>
        <Route path="/sugargrinding" element={<SugarGrinding/>}/>





        </Routes>
    </BrowserRouter>
    </div>
  );
}