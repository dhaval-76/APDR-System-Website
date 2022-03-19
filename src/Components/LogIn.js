import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Swal from "sweetalert2";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Logged In Successfully",
      showConfirmButton: false,
      timer: 1500,
    });
  }

  return (
    <div className="container">
      <Form onSubmit={handleSubmit}>
        <div id="login">Login</div>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            id="input-field_login"
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
            id="input-field_login"
            type="password"
            placeholder="Enter Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button id="submit-btn" variant="success" type="submit">
          Log In
        </Button>
        <div className="formlog_orContainer">
          <div>or connect with</div>
          <div>
            <img src="/Images/search.png" id="formlog_orContainer_logo" />
          </div>
          <div>
            Don't have an account?<a href="">Sign up</a>
          </div>
        </div>
      </Form>
    </div>
  );
}
