import { Navbar, Dropdown, NavDropdown } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { actionTypes } from "../reducer";
import { useStateValue } from "../StateProvider";

export default function Dashboard() {
  const [{ isAuthenticated }, dispatch] = useStateValue();

  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  }

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
