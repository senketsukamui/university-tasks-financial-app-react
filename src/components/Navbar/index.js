import React, { useState } from "react";
import "./index.scss";
import Dropdown from "react-bootstrap/Dropdown";
import CreateFinance from "../FinanceList/createFinance/";
import CreateCategory from "../FinanceList/createCategory/";
import { Button } from "reactstrap";
const NavBar = () => {
  const [financeModal, setFinanceModal] = useState(false);
  const [categoryModal, setCategoryModal] = useState(false);
  const toggleFinanceModal = () => setFinanceModal(!financeModal);
  const toggleCategoryModal = () => setCategoryModal(!categoryModal);
  return (
    <>
      <nav className="navbar">
        <Dropdown>
          <Dropdown.Toggle variant="success" className="navbar__create-button">
            <i className="fas fa-plus"></i>
            <span className="ml-1">Create New</span>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#" onClick={toggleFinanceModal}>
              Finance
            </Dropdown.Item>
            <Dropdown.Item href="#" onClick={toggleCategoryModal}>
              Category
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </nav>
      <CreateCategory isOpen={categoryModal} toggle={toggleCategoryModal} />
      <CreateFinance isOpen={financeModal} toggle={toggleFinanceModal} />
    </>
  );
};

export default NavBar;
