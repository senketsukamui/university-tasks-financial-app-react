import React from "react";
import "./index.scss";
import Dropdown from "react-bootstrap/Dropdown";
import {Button} from 'reactstrap';
const NavBar = () => {
  let onFinanceAdd = evt => {};

  return (
    <nav className="navbar">
      <Dropdown>
        <Dropdown.Toggle variant="success" className="navbar__create-button">
          <i className="fas fa-plus"></i>
          <span className="ml-1">Create New</span>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1"><Button></Button></Dropdown.Item>
          <Dropdown.Item href="#/action-2">Category</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </nav>
  );
};

export default NavBar;
