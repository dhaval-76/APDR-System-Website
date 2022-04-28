import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { NavLink, Link } from "react-router-dom";

import { authLogout } from "../store/auth/slice";

function Drawer({ isHomeScreen }) {
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();

    dispatch(authLogout());
  };

  return (
    <div className="container_nav">
      <Navbar collapseOnSelect bg="light" expand="lg" variant="light">
        <Container className="d-flex justify-content-between flex-grow-1 pe-3">
          <Link to="/" className="mx-lg-2 fs-3 text-primary">
            APDR System
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              {!isHomeScreen && (
                <>
                  <NavLink
                    className={({ isActive }) =>
                      `mx-lg-2 ${isActive ? "text-primary" : "text-secondary"}`
                    }
                    to="/analysis"
                  >
                    Analysis
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      `mx-lg-2 ${isActive ? "text-primary" : "text-secondary"}`
                    }
                    to="/vehicle-health"
                  >
                    Vehicle Health
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      `mx-lg-2 ${isActive ? "text-primary" : "text-secondary"}`
                    }
                    to="/chat"
                  >
                    Chat
                  </NavLink>
                </>
              )}
              <NavLink
                to=""
                className="text-secondary ms-lg-5"
                onClick={handleLogout}
              >
                Logout
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Drawer;
