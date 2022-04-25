import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

import {
  authErrorSelector,
  authIsAuthenticatedSelector,
  authIsLoadingSelector,
} from "../store/auth/selector";
import { authLogin } from "../store/auth/slice";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isLoading = useSelector(authIsLoadingSelector);
  const isAuthenticated = useSelector(authIsAuthenticatedSelector);
  const error = useSelector(authErrorSelector);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated && !isLoading && error === "") {
      console.log({ isAuthenticated, isLoading, error });
      navigate("/", { replace: true });
    }
    console.log("first");
  }, [isAuthenticated, isLoading, error, navigate]);

  const loginhandler = (e) => {
    e.preventDefault();
    dispatch(authLogin({ email, pass: password }));
  };

  return (
    <div className="container">
      <Form onSubmit={loginhandler}>
        <div id="login">Login</div>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            className="input-field_login"
            type="email"
            placeholder="Enter Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            className="input-field_login"
            type="password"
            placeholder="Enter Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        {isLoading ? (
          <CircularProgress style={{ display:"block",marginLeft:"auto",marginRight:"auto",marginTop:"30px" }}/>
        ) : (
          <>
            <Button id="submit-btn" variant="success" type="submit">
              Log In
            </Button>
            <div className="formlog_orContainer">
              <div>
                Don't have an account?
                <Link to="/signUp" replace>
                  Sign up
                </Link>
              </div>
            </div>
          </>
        )}
      </Form>
    </div>
  );
}
