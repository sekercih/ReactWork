import Mesaj from "./Mesaj";
import React from "react";
import Kisi from "./Kisi";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "reactstrap";
function App() {
  return (
    <div className="App">
      <Container fluid="md">
        {/*<Mesaj ad="Ahmet" />
      <Mesaj ad="Mehmet" />
      <Mesaj ad="Semih" />*/}
        <div className="divKisi" >
          <Kisi
            isim="Sebnem Can"
            meslek="Test Engine"
            resim="https://images.unsplash.com/photo-1588145497009-0b234790d741?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cG9ydHJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            telefon="+905551223366"
          />
        </div>
        <div className="divKisi" xs="6" >
          
          <Kisi
            isim="Mehmet Can"
            meslek="Test Automation"
            resim="https://images.unsplash.com/photo-1602488402655-cd529970028d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHBvcnRyZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            telefon="+905551223366"
          />
        </div>

        <div className="divKisi" >
          {" "}
          <Kisi
            isim="Keriman Can"
            meslek="Developer"
            telefon="+905551223366"
            resim="https://images.unsplash.com/photo-1598302320136-4b15bfbb3845?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fHBvcnRyZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          />
        </div>

        <div className="divKisi" >
          <Kisi
            isim="Nas Can"
            meslek="Devops"
            telefon="+905551223366"
            resim="https://images.unsplash.com/photo-1602008792062-fbc852f64c1e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHBvcnRyZXRzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          />
        </div>
      </Container>
    </div>
  );
}
export default App;
