import React from "react";
import { Route } from "react-router-dom";
import NavBar from "./components/Navbar/";
import Sidebar from "./components/Sidebar";
import FinanceList from "./components/FinanceList";
import "./App.scss";
import { connect } from "react-redux";
import { fetchCategories } from "./redux/actions/category";

function App(props) {
  // Onmount event
  React.useEffect(() => {
    props.fetchCategories();
  }, []);

  return (
    <div className="main">
      <Sidebar />
      <div className="main-content">
        <NavBar />
        <Route path="/" render={() => <FinanceList />} />
      </div>
    </div>
  );
}

export default connect(null, { fetchCategories })(App);
