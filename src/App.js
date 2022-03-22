import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import LogIn from "./Components/LogIn";
import SignUp from "./Components/SignUp";
import Dashboard from "./Components/Dashboard";

export default function App() {
  return (
    <Router>
      <div className="app_container">
        <Route path="/" exact component={LogIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/dashboard" component={Dashboard} />
      </div>
    </Router>
  );
}
