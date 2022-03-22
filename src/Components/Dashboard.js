import {  Navbar,Dropdown,NavDropdown } from "react-bootstrap";

export default function Dashboard() {
  return (
    <>
      <div className="container_nav">
        <Navbar bg="light">
          <div class="flex-items">
            <Navbar.Brand href="#home" style={{ fontSize: "40px" }}>
              ADPR System
            </Navbar.Brand>
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
        </Navbar>
      </div>
      <div className="flex-container">
        <div className="card">
          <img src="/Images/Humaaans - 1 Character.png" alt="img" />
          <span id="card_footer">Analysis</span>
        </div>
        <div className="card">
          <img src="/Images/Beep Beep - Medium Vehicle.png" alt="img" />
          <span id="card_footer">Vehicle Health</span>
        </div>
        <div className="card">
          <div className="chat">
            <img src="/Images/Croods - Comments.png" alt="img" />
          </div>
          <span id="card_footer">Chat</span>
        </div>
      </div>
    </>
  );
}
