import { Navbar, Dropdown, NavDropdown, Nav } from "react-bootstrap";

import React from "react";
import { Redirect } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";
import { actionTypes } from "../reducer";
import { Link } from "react-router-dom";

export default function Chat() {
  const [{ isAuthenticated }, dispatch] = useStateValue();

  function handleLogout(e) {
    e.preventDefault();

    auth
      .signOut()
      .then((result) => {
        dispatch({
          type: actionTypes.REMOVE_USER,
        });
      })
      .catch((error) => alert(error.meesage));
  }

  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      <div className="container_nav">
        <Navbar bg="light">
          <div class="flex-items">
            <Navbar.Brand style={{ fontSize: "40px" }}>
              ADPR System
            </Navbar.Brand>
          </div>
          <div class="flex-items" style={{ display: "flex" }}>
            <div
              class="flex-items"
              style={{ display: "flex", marginTop: "5px" }}
            >
              <Link to="/analysis" id="navdata">
                Analysis
              </Link>

              <Link to="/vehicle-health">Vehicle Health</Link>
              <Link to="/chat">Chat</Link>
            </div>
            <div class="flex-items">
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic">
                  <img id="profile" alt="profile" src="/Images/user.png" />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Edit Profile</Dropdown.Item>

                  <NavDropdown.Divider />
                  <Dropdown.Item onClic={handleLogout}>Log Out</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </Navbar>
      </div>
      <div class="container_chat" >
        <div>
          <section>Driver 2: Alert!!! vehicle behind is drowsy </section>
        </div>
        <div>
          <section>Driver 1: Warning!!! vehicle engine overheated</section>
        </div>
        <div>
          <section>Driver 3: The driver behind you is drunk be aware !!!</section>
        </div>
      </div>
    </>
  );
}
