import React from 'react';
import NavBar from "./components/Navbar/"
import Sidebar from "./components/Sidebar"
import FinanceList from "./components/FinanceList"
import './App.scss';

function App() {
  return (
    <div className = "main">
    <Sidebar />
    <div className = "main-content">
      <NavBar />
      <FinanceList />
      </div>
    </div>
  );
}

export default App;
