import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../src/pages/Login";
import Signup from "../src/pages/Signup";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          {/* <Route exact path="/">
            <Welcome />
          </Route> */}
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          {/* <Route exact path="/home">
            <Home />
          </Route> */}
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
