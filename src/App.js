import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import LogIn from "./Components/LogIn";
import SignUp from "./Components/SignUp";
import Dashboard from "./Components/Dashboard";
import VehicleHealth from "./Components/VehicleHealth";
import Analysis from "./Components/Analysis";
import Chat from "./Components/Chat";

export default function App() {
  return (
    <Router>
      <div className="app_container">
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/analysis" exact component={Analysis} />
        <Route path="/vehicle-health" exact component={VehicleHealth} />
        <Route path="/chat" exact component={Chat} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/login" exact component={LogIn} />
        <Route path="/" exact component={LogIn} />
      </div>
    </Router>
  );
}
