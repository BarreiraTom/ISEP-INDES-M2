import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import "./resources/css/App.css";

import MainPage from "./pages/MainPage";
import MainPageLive from "./pages/MainPageLive";

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
      <Route
        path="/live"
        exact
        render={(props) => (
          <MainPageLive {...props} />
        )}
      />
    </>
  );

  return <Switch>{routes}</Switch>;
});
