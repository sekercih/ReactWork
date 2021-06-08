import React, { useState } from "react";
import data from "./data";
import Liste from "./Liste";

function App() {
  const [kisiler, setKisi] = useState(data);
  function temizle() {
    setKisi([]);
  }
  return (
    <main>
      <section className="container">
        <h2>Bugun {kisiler.length} doğum günü bulunmaktadır</h2>
        <Liste kisi={kisiler} />
        <button onClick={temizle}>Temizle</button>
      </section>
    </main>
  );
}

export default App;
