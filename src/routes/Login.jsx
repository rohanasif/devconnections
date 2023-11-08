import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { login } from "../actions";
import { Link } from "react-router-dom";
const Login = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({ email: "", password: "" });
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(login(user));
  };
  return (
    <div className="d-flex flex-column justify-content-center align-items-center main-content">
      <h1>Login</h1>
      <Form onSubmit={(e) => handleLogin(e)}>
        <Form.Group controlId="email">
          <Form.Label>Email address: </Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            value={user.email}
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Enter password: </Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Enter password"
            value={user.password}
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>
        <Button type="submit">Login in!</Button>
      </Form>
      <p>
        Don&apos;t have an account? <Link to="/signup">Sign up!</Link>
      </p>
      {}
    </div>
  );
};

export default Login;
