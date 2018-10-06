import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "Modules/Home/Home";
import Test from "Modules/Test/Test";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/test" component={Test} exact />
      </Switch>
    );
  }
}

export default Routes;
