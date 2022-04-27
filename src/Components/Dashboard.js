import React from "react";
import { Dropdown, Navbar, NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import profileImg from "../images/user.png";
import analysisImg from "../images/Humaaans - 1 Character.png";
import vehicleHealthImg from "../images/Beep Beep - Medium Vehicle.png";
import chatImg from "../images/Croods - Comments.png";

import { authNameSelector } from "../store/auth/selector";
import { authLogout } from "../store/auth/slice";

export default function Dashboard() {
  const name = useSelector(authNameSelector);

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
            <Navbar.Brand id="dash_title">APDR System</Navbar.Brand>
          </div>
          <div className="flex-items">
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic">
                <img id="profile" alt="profile" src={profileImg} />
                <span>{name}</span>
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
          <img src={analysisImg} alt="img" />
          <span id="card_footer">Analysis</span>
        </Link>
        <Link className="card" to="/vehicle-health">
          <img src={vehicleHealthImg} alt="img" />
          <span id="card_footer">Vehicle Health</span>
        </Link>
        <Link className="card" to="/chat">
          <div className="chat">
            <img id="chat_img"  src={chatImg} alt="img" />
          </div>
          <span id="card_footer">Chat</span>
        </Link>
      </div>
    </>
  );
}
