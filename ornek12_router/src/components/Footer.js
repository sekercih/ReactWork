import React from "react";
import { Navbar } from "react-bootstrap";
function Footer() {
  return (
    <div>
      <Navbar
        fixed="bottom"
        fluid
        className="justify-content-center bg-dark p-3"
      >
        <h2 className="text-light">Copyright © 2021</h2>
      </Navbar>
    </div>
  );
}
export default Footer;

/*style={{textAlign:"center",background:"pink",paddingTop:"10px",marginTop:"60px" }}*/
