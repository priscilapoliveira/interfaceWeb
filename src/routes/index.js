import React from "react";

import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import ProductDetail from "../pages/ProductDetail";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/ProductDetail" exact component={ProductDetail} />
    </Switch>
  );
}
