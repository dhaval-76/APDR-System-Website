import React, { useEffect } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import LogIn from "./Components/LogIn";
import SignUp from "./Components/SignUp";
import Dashboard from "./Components/Dashboard";
import VehicleHealth from "./Components/VehicleHealth";
import Analysis from "./Components/Analysis";
import Chat from "./Components/Chat";
import { useStateValue } from "./StateProvider";
import db from "./firebase";
import PrivateRoute from "./Components/PrivateRoute";

export default function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    async function validateUser() {
      const userRef = db.collection("Users").doc(user.email);

      userRef.get().then((docSnapshot) => {
        if (!docSnapshot.exists) {
          userRef.set({});
        }
      });
    }

    if (user) validateUser();
    console.log({ user });
  }, [user]);

  return (
    <div className="app_container">
      <Router>
        <Switch>
          <Route path="/signup" exact component={SignUp} />
          <Route path="/login" exact component={LogIn} />
          <Route path="/" exact component={LogIn} />

          <Route path="/dashboard" component={Dashboard} />
          <Route path="/analysis" component={Analysis} />
          <Route path="/vehicle-health" component={VehicleHealth} />
          <Route path="/chat" component={Chat} />
        </Switch>
      </Router>
    </div>
  );
}
