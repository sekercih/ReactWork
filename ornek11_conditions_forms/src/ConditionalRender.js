import React from "react";
import { Card, Navbar, Button } from "react-bootstrap";
const Kart = () => {
  return (
    <div className="d-flex justify-content-center">
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png"
        />
        <Card.Body>
          <Card.Title>REACT</Card.Title>
          <Card.Text>React'ı ogrenmek basta biraz zormus</Card.Text>
          <Button variant="danger">Detaylar</Button>
        </Card.Body>
      </Card>
    </div>
  );
};
const Footer = () => {
  return (
    <div>
      <Navbar
        fixed="bottom"
        fluid=""
        className="justify-content-center bg-dark p-3"
      >
        <p className="text-light">Copyright 2021</p>
      </Navbar>
    </div>
  );
};
function ConditionalRender() {
  return (
    <div className="text-center">
      <button className="btn btn-warning m-4 p-3">goster/gizle</button>
      <Kart />
      <Footer />
    </div>
  );
}
export default ConditionalRender;
