import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Kurslar from "./components/Kurslar";
import MyNav from "./components/MyNav";

function App() {
  return (
    <div className="App">
      <Router>
        <MyNav />
        <Switch>

        </Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/kurslar">  <Kurslar /> </Route>
      
      </Router>
    </div>
  );
}
export default App;
