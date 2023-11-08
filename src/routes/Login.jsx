import { useState } from "react";
import { Form, Button } from "react-bootstrap";
const Login = () => {
  const [user, setUser] = useState({});
  const handleChange = (e) => {
    setUser(...user, { [e.target.name]: e.target.value });
  };
  const handleLogin = async () => {};
  return (
    <div>
      <h1>Login</h1>
      <Form onSubmit={() => handleLogin()}>
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
    </div>
  );
};

export default Login;
