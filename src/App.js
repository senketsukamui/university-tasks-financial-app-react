import React from 'react';
import NavBar from "./components/Navbar/"
import Sidebar from "./components/Sidebar"
import './App.scss';

function App() {
  return (
    <div className = "main">
    <Sidebar />
    <div className = "main-content"><NavBar /></div>
    </div>
  );
}

export default App;
