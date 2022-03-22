import axios from "axios";
import { Alert } from "bootstrap";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Swal from "sweetalert2";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPass) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Logged In Successfully",
        showConfirmButton: false,
        timer: 1500,
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

  return (
    <div className="container_SignUp">
      <Form id="Form_SignUp" onSubmit={handleSubmit}>
        <div id="login">SignUp</div>

        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control
            id="input-field_SignUp"
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            id="input-field_SignUp"
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
            id="input-field_SignUp"
            type="password"
            placeholder="Enter Password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCnfPassword">
          <Form.Control
            id="input-field_SignUp"
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
            <img src="/Images/search.png" id="formlog_orContainer_logo" />
          </div>
          <div>
            Already have an account?<a href="/">Log In</a>
          </div>
        </div>
      </Form>
    </div>
  );
}
