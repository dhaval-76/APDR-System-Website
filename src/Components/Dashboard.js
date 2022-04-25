import React from "react";
import { Dropdown, Navbar, NavDropdown } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { authLogout } from "../store/auth/slice";

export default function Dashboard() {
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();

    dispatch(authLogout());
  };
  return (
    <>
      <div className="container_nav">
        <Navbar bg="light">
          <div className="flex-items">
            <Navbar.Brand
              href="#home"
              style={{ fontSize: "40px", color: "#1976D2" }}
            >
              ADPR System
            </Navbar.Brand>
          </div>
          <div className="flex-items">
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic">
                <img id="profile" alt="profile" src="/Images/user.png" />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="">Edit Profile</Dropdown.Item>

                <NavDropdown.Divider />
                <Dropdown.Item onClick={handleLogout}>Log Out</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Navbar>
      </div>

      <div className="flex-container">
        <Link className="card" to="/analysis">
          <img src="/Images/Humaaans - 1 Character.png" alt="img" />
          <span id="card_footer">Analysis</span>
        </Link>
        <Link className="card" to="/vehicle-health">
          <img src="/Images/Beep Beep - Medium Vehicle.png" alt="img" />
          <span id="card_footer">Vehicle Health</span>
        </Link>
        <Link className="card" to="/chat">
          <div className="chat">
            <img src="/Images/Croods - Comments.png" alt="img" />
          </div>
          <span id="card_footer">Chat</span>
        </Link>
      </div>
    </>
  );
}
