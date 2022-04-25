import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import CircularProgress from "@mui/material/CircularProgress";

import {
  authErrorSelector,
  authIsAuthenticatedSelector,
  authIsLoadingSelector,
} from "../store/auth/selector";
import { authSignUp } from "../store/auth/slice";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const isLoading = useSelector(authIsLoadingSelector);
  const isAuthenticated = useSelector(authIsAuthenticatedSelector);
  const error = useSelector(authErrorSelector);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated && !isLoading && error === "") {
      navigate("/", { replace: true });
    }
  }, [isAuthenticated, isLoading, error, navigate]);

  const signUphandler = (e) => {
    e.preventDefault();
    if (password === confirmPass) {
      dispatch(authSignUp({ name, email, pass: password }));
    } else {
      toast.error("Password doesn't match", {
        position: toast.POSITION.TOP_CENTER,
        toastId: "passwordNotMatchError",
      });
    }
  };

  return (
    <div className="container_SignUp">
      <Form id="Form_SignUp" onSubmit={signUphandler}>
        <div id="login">SignUp</div>

        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control
            className="input-field_SignUp"
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            className="input-field_SignUp"
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            className="input-field_SignUp"
            type="password"
            placeholder="Enter Password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCnfPassword">
          <Form.Control
            className="input-field_SignUp"
            type="password"
            placeholder="Confirm Password"
            value={confirmPass}
            required
            onChange={(e) => setConfirmPass(e.target.value)}
          />
        </Form.Group>
        {isLoading ? (
          <CircularProgress />
        ) : (
          <>
            <Button id="submit-btn" variant="success" type="submit">
              Sign Up
            </Button>
            <div className="formlog_orContainer">
              <div>
                Already have an account?
                <Link to="/login" replace>
                  Log In
                </Link>
              </div>
            </div>
          </>
        )}
      </Form>
    </div>
  );
}
