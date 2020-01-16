import React, { Suspense } from "react";
import { Route } from "react-router-dom";
import NavBar from "./components/Navbar/";
import Sidebar from "./components/Sidebar";
import FinanceList from "./components";
import "./App.scss";
import { connect } from "react-redux";
import _ from "lodash";
import { Circle } from "react-preloaders";
import { fetchCategories } from "./redux/actions/category";
function App(props) {
  React.useEffect(() => {
    console.log("mount check");
    props.fetchCategories();
  }, []);

  return (
    <div className="main">
      <Sidebar />
      <div className="main-content">
        <NavBar />
        {/* {!_.isEmpty(props.categories) ? (
          <Route path="/" render={() => <FinanceList />} />
        ) : (
          <Circle />
        )} */}
        <Route path="/" render={() => <FinanceList />} />
      </div>
    </div>
  );
}

export default connect(
  store => ({
    categories: store.category.categories
  }),
  { fetchCategories }
)(App);
