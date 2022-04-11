// import "./styles.css";
import { Navbar, Dropdown, NavDropdown, Nav } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Label,
} from "recharts";
import tempLineData from "../tempLineData";
import { Redirect } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";
import { actionTypes } from "../reducer";

const pieData = [{ name: "Group A", value: 100 }];
const COLORS = ["#38b000", "#ffbe0b", "#d00000"];

export default function VehicleHealth() {
  const [value, setValue] = useState(100);
  const [color, setcolor] = useState(COLORS[0]);
  const [{ isAuthenticated }, dispatch] = useStateValue();

  useEffect(() => {
    if (value <= 100) {
      setcolor(COLORS[0]);
    }
    if (value <= 60) {
      setcolor(COLORS[1]);
    }
    if (value <= 30) {
      setcolor(COLORS[2]);
    }
    console.log({ value });
  }, [value]);

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

  // const
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
        <div className="g2">
          <LineChart
            width={600}
            height={400}
            data={tempLineData}
            margin={{
              top: 40,
              right: 30,
              left: 20,
              bottom: 15,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="timeStamp">
              <Label value="Timestamp -->" offset={-1} position="bottom" />
              <Label
                value="Measure Of Engine Overheating "
                offset={330}
                position="top"
                style={{ fontWeight: "500", fontSize: "30px", padding: "5px " }}
              />
            </XAxis>
            <YAxis>
              <Label
                value="Temperature -->"
                angle={-90}
                position="left"
                offset={1}
              />
            </YAxis>
            <Tooltip />
            <Line
              type="monotone"
              dataKey="temp"
              stroke="#8884d8"
              strokeWidth={3}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </div>
        <div className="g1">
          <button onClick={() => setValue(50)} type="button">
            2nd level
          </button>
          <button onClick={() => setValue(20)} type="button">
            3rd level
          </button>
          <button onClick={() => setValue(100)} type="button">
            reset button
          </button>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <PieChart width={600} height={400}>
              <Pie
                data={pieData}
                cx={300}
                cy={170}
                innerRadius={120}
                outerRadius={170}
                fill="#8884d8"
                paddingAngle={1}
                dataKey="value"
              >
                <Label
                  value="Vehicle Health "
                  position="center"
                  style={{
                    fontWeight: "500",
                    fontSize: "30px",
                  }}
                />
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={color} />
                ))}
              </Pie>
            </PieChart>
          </div>
        </div>
      </div>
    </>
  );
}
