import { Navbar, Dropdown, NavDropdown, Nav } from "react-bootstrap";

import React from "react";

export default function Chat() {
  return (
    <>
      <div className="container_nav">
        <Navbar bg="light">
          <div class="flex-items">
            <Navbar.Brand href="#home" style={{ fontSize: "40px" }}>
              ADPR System
            </Navbar.Brand>
          </div>
          <div class="flex-items" style={{ display: "flex" }}>
            <div
              class="flex-items"
              style={{ display: "flex", marginTop: "5px" }}
            >
              <Nav.Link href="/analysis" id="navdata">
                Analysis
              </Nav.Link>
              <Nav.Link href="/vehicle-health" id="navdata">
                Vehicle Health
              </Nav.Link>
              <Nav.Link href="/chat" id="navdata">
                Chat
              </Nav.Link>
            </div>
            <div class="flex-items">
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic">
                  <img id="profile" alt="profile" src="/Images/user.png" />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Edit Profile</Dropdown.Item>

                  <NavDropdown.Divider />
                  <Dropdown.Item href="#/action-3">Log Out</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </Navbar>
      </div>
    </>
  );
}
