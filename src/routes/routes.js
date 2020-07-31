import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import NotFoundPage from "../NotFoundPage";

export default () =>
  <Switch>
    <Route path="/" exact component={App} />
    <Route path="/login" exact component={Login} />
    {/* <Route path="/login" exact component={SignInSide} /> */}
    {/*<Route path="/blog" exact component={BlogPage} />*/}
    { /* Finally, catch all unmatched routes */}
    <Route component={NotFoundPage} />
  </Switch>;