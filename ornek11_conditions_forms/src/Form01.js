import React, { useState } from "react";
import "./Form.css"

function Form01  (){
 const [ad,setAd]=useState("");
 function AdGuncelle(event){
setAd(event.target.value);
 }

const [soyad,Setsoyad]=useState("");
function soyadGuncelle(event){
Setsoyad(event.target.value)
}
const [mesaj,SetMesaj]=useState("");
function mesajGuncelle(event) {
  SetMesaj(event.target.value);
}





  return (
    <div className="alan">
      {ad.length > 2 && (
        <h1>
          Merhaba {ad} {soyad} {mesaj}
        </h1>
      )}

      <form>
        <input
          className="input"
          type="text"
          placeholder="adiniz"
          name="ad"
          required
          onChange={AdGuncelle}
          value={ad}
        />
        <input
          className="input"
          type="text"
          placeholder="soyadiniz"
          name="ad"
          required
          onChange={soyadGuncelle}
          value={soyad}
        />
        <textarea
          className="input"
          name="mesaj"
          id=""
          cols="30"
          rows="10"
          value={mesaj}
          onChange={mesajGuncelle}
        ></textarea>
        <button type="submit">Gönder</button>
      </form>
    </div>
  );
};

export default Form01;
