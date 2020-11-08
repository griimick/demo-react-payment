import React from "react";
import { Route, Switch } from "react-router-dom";
import { Plans, Payments, Registration } from "./views";
import { PrivateRoute } from "./components";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1 style={{ background: "yellow" }}>demo-react-payment</h1>
      <Switch>
        <Route path="/plans" exact component={Plans} />
        <Route path="/register" exact component={Registration} />
        <PrivateRoute path="/pay" exact component={Payments} />
        <Plans /> {/* Default component to load */}
      </Switch>
    </div>
  );
}
