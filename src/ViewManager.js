import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";

import "./resources/css/App.css";

import MainPage from "./pages/MainPage";
import MainPageLive from "./pages/MainPageLive";

class ViewManager extends Component{

  static Views(){
    return{
      main: <MainPage/>,
      Live: <MainPageLive/>,
    }
  }

  static View(props) {
    let name = props.location.search.substr(1);
    if (name === "" || name === undefined || name === null){name="main"}
    
    let view = ViewManager.Views()[name];

    if(view === null) 
      throw new Error("View '" + name + "' is undefined");

    return view;
  }

  render() {
    return (
      <Router>
          <Route path='/' component={ViewManager.View}/>
      </Router>
    );
  }
}

export default ViewManager
