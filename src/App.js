import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import "./resources/css/App.css";

import MainPage from "./pages/MainPage";

export default withRouter(function App() {


  let routes = (
    <>
      <Route
        path="/"
        exact
        render={(props) => (
          <MainPage {...props} />
        )}
      />
    </>
  );

  return <Switch>{routes}</Switch>;
});
