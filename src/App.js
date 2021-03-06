import React from "react";
import { Route, Switch } from "react-router-dom";
import { Plans, Payments, Registration, Login } from "./views";
import { PrivateRoute, Header } from "./components";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/plans" exact component={Plans} />
        <Route path="/register" exact component={Registration} />
        <Route path="/login" exact component={Login} />
        <PrivateRoute path="/pay" exact component={Payments} />
        <Plans /> {/* Default component to load */}
      </Switch>
    </div>
  );
}
