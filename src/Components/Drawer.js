import React from "react";
import { Dropdown, Navbar, NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";

import { authNameSelector } from "../store/auth/selector";

import { authLogout } from "../store/auth/slice";

function Drawer() {
  const name = useSelector(authNameSelector);

  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();

    dispatch(authLogout());
  };

  return (
    <div className="container_nav">
      <Navbar bg="light">
        <div className="flex-items">
          <Navbar.Brand style={{ fontSize: "35px", color: "#023e8a" }}>
            <Link className="nav_title" to="/">
              APDR System
            </Link>
          </Navbar.Brand>
        </div>
        <div className="flex-items" style={{ display: "flex" }}>
          <div
            className="flex-items"
            style={{ display: "flex", marginTop: "5px", fontSize: 22 }}
          >
            <NavLink
              style={({ isActive }) => ({
                textTransform: "lowercase",
                margin: "0 10px",
                borderBottom: `4px solid ${
                  isActive ? "#023e8a" : "transparent"
                }`,
                color: isActive ? "#023e8a" : "#666666",
              })}
              to="/analysis"
            >
              Analysis
            </NavLink>

            <NavLink
              style={({ isActive }) => ({
                textTransform: "lowercase",
                margin: "0 10px",
                borderBottom: `4px solid ${
                  isActive ? "#023e8a" : "transparent"
                }`,
                color: isActive ? "#023e8a" : "#666666",
              })}
              to="/vehicle-health"
            >
              Vehicle Health
            </NavLink>
            <NavLink
              style={({ isActive }) => ({
                textTransform: "lowercase",
                margin: "0 10px",
                borderBottom: `4px solid ${
                  isActive ? "#023e8a" : "transparent"
                }`,
                color: isActive ? "#023e8a" : "#666666",
              })}
              to="/chat"
            >
              Chat
            </NavLink>
          </div>
          <div className="flex-items">
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic">
                <img id="profile" alt="profile" src="/Images/user.png" />
                <span>{name}</span>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Edit Profile</Dropdown.Item>

                <NavDropdown.Divider />
                <Dropdown.Item onClick={handleLogout}>Log Out</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </Navbar>
    </div>
  );
}

export default Drawer;
