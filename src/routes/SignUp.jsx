import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { signUp } from "../actions";
const SignUp = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
  });
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSignUp = async (e) => {
    e.preventDefault();
    await dispatch(signUp(user));
    setUser({
      name: "",
      email: "",
      password: "",
      repeatPassword: "",
    });
  };
  return (
    <div className="d-flex flex-column justify-content-center align-items-center main-content">
      <h1>Sign Up!</h1>
      <Form onSubmit={(e) => handleSignUp(e)}>
        <Form.Group controlId="name">
          <Form.Label>Name: </Form.Label>
          <Form.Control
            name="name"
            type="text"
            placeholder="Enter name"
            value={user.name}
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>
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
        <Form.Group controlId="repeatPassword">
          <Form.Label>Repeat password: </Form.Label>
          <Form.Control
            name="repeatPassword"
            type="password"
            placeholder="Repeat password"
            value={user.repeatPassword}
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>
        <Button type="submit">Sign up!</Button>
      </Form>
    </div>
  );
};

export default SignUp;
