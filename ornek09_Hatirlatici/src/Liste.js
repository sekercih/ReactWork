import React from "react";
import "./index.css";
function Liste(props) {
  const { kisi } = props;
  console.log(kisi);
  // const {(isim, yas, resim)}=kisiler[0]

  return (
    <div>
      {kisi.map((k) => {
        const { isim, resim, yas,id } = k;

        return (
          <div className="kisi" key={id}>
            <img src={resim} alt="" />
            <div>
              
              <h4>{isim}</h4>
              <p>{yas} Yaşinda</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Liste;
