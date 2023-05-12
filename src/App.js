import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About"
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from "./components/Products";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Pulveriser from "./components/Pulveriser";



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
      </Routes>
    </BrowserRouter>
    </div>
  );
}