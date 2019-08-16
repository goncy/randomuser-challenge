import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import UsersList from "./user/screens/List";
import UserDetails from "./user/screens/Details";

function App() {
  return (
    <Switch>
      <Route exact component={UsersList} path="/users" />
      <Route exact component={UserDetails} path="/users/:email" />
      <Redirect to="/users" />
    </Switch>
  );
}

export default App;
