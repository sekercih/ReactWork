import React from 'react'
import "./Footer.css"

function Footer() {
 const yil=new Date().getFullYear();
 return (
  <footer>
   <h1>Copyright ©{yil}</h1>
  </footer>
 );
}

export default Footer;
