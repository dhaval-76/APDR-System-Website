import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { auth, provider } from "../firebase";
import { actionTypes } from "../reducer";
import { useStateValue } from "../StateProvider";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const [{ isAuthenticated }, dispatch] = useStateValue();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPass) {
      console.log({ email, password });
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((result) => {
          dispatch({
            type: actionTypes.SET_USER,
            user: result.user,
          });

          Swal.fire({
            position: "center",
            icon: "success",
            title: "Sign Up Successfully",
            showConfirmButton: false,
            timer: 1800,
          });
        })
        .catch((error) => {
          alert(error.meesage);
          console.log({ ...error });
        });
    } else {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Oops...",
        text: "Password doesn't match",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  function handleGoogleSignIn(e) {
    e.preventDefault();

    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.meesage));
  }

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="container_SignUp">
      <Form id="Form_SignUp" onSubmit={handleSubmit}>
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

        <Button id="submit-btn" variant="success" type="submit">
          Sign Up
        </Button>
        <div className="formlog_orContainer">
          <div>or connect with</div>
          <div>
            <img
              onClick={handleGoogleSignIn}
              src="/Images/search.png"
              id="formlog_orContainer_logo"
              alt=""
            />
          </div>
          <div>
            Already have an account?<Link to="/login">Log In</Link>
          </div>
        </div>
      </Form>
    </div>
  );
}
