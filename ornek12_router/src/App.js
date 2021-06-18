import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Iletisim from "./components/Iletisim";
import Kisiler from "./components/Kisiler";
import Kurslar from "./components/Kurslar";
import MyNav from "./components/MyNav";

function App() {
  return (
    <div className="App">
      <Router>
        <MyNav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/kurslar">
            <Kurslar />
          </Route>

          <Route path="/iletisim">
            <Iletisim />
          </Route>
          <Route path="/kisiler">
            <Kisiler />
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}
export default App;
