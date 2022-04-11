import { Navbar, Dropdown, NavDropdown, Nav } from "react-bootstrap";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Label,
  Area,
  AreaChart,
} from "recharts";
import data from "../data";
import tempLineData from "../tempLineData";
import { Redirect } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";
import { actionTypes } from "../reducer";

function Analysis() {
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
                  <Dropdown.Item onClick={handleLogout}>Log Out</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </Navbar>
      </div>
      <div className="container-fluid">
        <div className="g1">
          <AreaChart
            width={600}
            height={400}
            data={data}
            margin={{ top: 40, right: 30, left: 10, bottom: 20 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name">
              <Label value="Timestamp -->" offset={3} position="bottom" />
              <Label
                value="Measure Of Intoxication"
                offset={325}
                position="top"
                style={{ fontWeight: "500", fontSize: "30px", padding: "5px " }}
              />
            </XAxis>
            <YAxis>
              <Label
                value="Intoxication -->"
                angle={-90}
                position="left"
                offset={1}
              />
            </YAxis>
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
          </AreaChart>
        </div>
        <div className="g2">
          <AreaChart
            width={600}
            height={400}
            data={data}
            margin={{ top: 40, right: 30, left: 10, bottom: 20 }}
          >
            <defs>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ffc658" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#ffc658" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name">
              <Label value="Timestamp -->" offset={3} position="bottom" />
              <Label
                value="Measure Of Drowsiness"
                offset={325}
                position="top"
                style={{ fontWeight: "500", fontSize: "30px" }}
              />
            </XAxis>
            <YAxis>
              <Label
                value="Drowsiness -->"
                angle={-90}
                position="left"
                offset={1}
              />
            </YAxis>
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#ffc658"
              fillOpacity={1}
              fill="url(#colorPv)"
            />
          </AreaChart>
        </div>
      </div>
    </>
  );
}

export default Analysis;
