import React, { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import { Route } from "react-router-dom";

function App() {
  const [loggedin, setLogin] = useState(false);

  return (
    <div className="App">
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
    </div>
  );
}

export default App;
