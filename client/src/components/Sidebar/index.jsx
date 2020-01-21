import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import CreateFinance from "../CreateFinance";
import CreateCategory from "../CreateCategory";
import { Link } from "react-router-dom";
import "./index.scss";

const Sidebar = () => {
  const [financeModal, setFinanceModal] = useState(false);
  const [categoryModal, setCategoryModal] = useState(false);
  const toggleFinanceModal = () => setFinanceModal(!financeModal);
  const toggleCategoryModal = () => setCategoryModal(!categoryModal);

  return (
    <>
      <div className="sidebar">
        <div className="sidebar__content">
          <div className="sidebar__title">Finance Manager</div>
          <div className="sidebar__section">
            <div className="sidebar__section__title">Pages</div>

            <div className="sidebar__section__link sidebar__section__link__first">
              <Link to="/">Dashboard</Link>
            </div>
            <div className="sidebar__section__link sidebar__section__link__first">
              <Link to="/analytics">Analytics</Link>
            </div>
          </div>

          <div className="sidebar__section">
            <div className="sidebar__section__title">Actions</div>

            <div className="sidebar__section__link sidebar__section__link__first">
              <span onClick={toggleCategoryModal}>Create category</span>
            </div>

            <div className="sidebar__section__link">
              <span onClick={toggleFinanceModal}>Create finance</span>
            </div>
          </div>
        </div>
      </div>

      <CreateCategory isOpen={categoryModal} toggle={toggleCategoryModal} />
      <CreateFinance isOpen={financeModal} toggle={toggleFinanceModal} />
    </>
  );
};

export default Sidebar;
