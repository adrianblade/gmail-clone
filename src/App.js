import React from 'react';
import './App.css';
import Header from "./Header"
import SideBar from "./SideBar"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Mail from "./Mail"
import EmailList from "./EmailList"


function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="app__body">
          <SideBar />
          <Switch>
            <Route path="/mail">
              <Mail />
            </Route>
            <Route path="/">
              <EmailList />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
