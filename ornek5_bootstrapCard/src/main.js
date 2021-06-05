import React from "react";
import data from "./data"
import { Button, Card, Container,Row ,Col } from "react-bootstrap";

function Kart(props) {
  const { text, name, img } = data[props.isim];
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body style={{textAlign:"center"}}>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
          {text}
          </Card.Text>
          
          <Button variant="primary">Detaylar</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

function Main() {
  return (
    <div>
      <Container class>
        <Row className="d-flex">
          <Col className="mb-3 d-flex justify-content-center" xs={12} md={6} lg={4}>
            <Kart isim="0" />
          </Col>
          <Col className="mb-3 d-flex justify-content-center" xs={12} md={6} lg={4}>
            <Kart isim="1" />
          </Col>
          <Col className="mb-3 d-flex justify-content-center" xs={12} md={6} lg={4}>
            <Kart isim="2" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Main;
