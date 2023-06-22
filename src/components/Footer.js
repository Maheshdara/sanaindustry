import React from 'react';
import "./componet.css";



const Footer = () => {
  return (
    <div className='footer' style={{textAlign:"center",textOrientation:"sideways",borderRadius:"50px",padding:"10px" }}>
      | All copy right reserved 2009 @ HAS Industries|
      <a style={{textDecoration:"none",color:"black",padding:"0px" }}  href="/"  exact="true">Home|</a>
      <a style={{textDecoration:"none",color:"black",padding:"0px" }}   href="/contact"  exact="true">Contact us|</a>
      {/* <a style={{textDecoration:"none",color:"black",padding:"0px" }}  href="/#"  exact="true">Site map|</a>
      <a style={{textDecoration:"none",color:"black",padding:"0px" }}  href="/#"  exact="true">Help line|</a> */}



    </div>
  )
}

export default Footer