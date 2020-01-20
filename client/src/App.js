import React from "react";
import { Route } from "react-router-dom";
import NavBar from "./components/Navbar/";
import Sidebar from "./components/Sidebar";
import FinanceList from "./components/FinanceList";
import Analytics from "./components/Analytics";
import "./App.scss";
import _ from "lodash";

const App = () => {
  return (
    <div className="main">
      <Sidebar />
      <div className="main-content">
        <NavBar />
        <Route path="/" component={FinanceList} exact={true} />
        <Route path="/analytics" component={Analytics} />
      </div>
    </div>
  );
};

export default App;
