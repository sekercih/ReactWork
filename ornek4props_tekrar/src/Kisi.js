import React from "react";
import Mesaj from "./Mesaj"

function Kisi(props) {
  return (
    <div>
   <Mesaj ad={props.isim}/>
      <h2>Meslek:{props.meslek}</h2>
      <img src={props.resim} alt="" />
      <p>Telefon:{props.telefon}</p>
    </div>
  );
}

export default Kisi;
