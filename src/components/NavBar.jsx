import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import LoginBtn from "./LogoutBtn";
import LogoutBtn from "./LoginBtn";
import { getLoggedUser } from "../actions";
import { useDispatch } from "react-redux";
import SignupBtn from "./SignupBtn";
import DevsBtn from "./DevsBtn";

const NavBar = () => {
  const [loggedin, setLoggedin] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const checkLogin = async () => {
      const user = dispatch(getLoggedUser());
      setLoggedin(user?.isLoggedin);
    };
    checkLogin();
  }, []);

  useEffect(() => {
    console.log(loggedin);
  }, [loggedin]);

  return (
    <Navbar expand="lg" bg="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/" className="text-decoration-none text-light">
            DevConnections
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light" />
        <Navbar.Collapse id="basic-navbar-nav" className="flex-grow-0">
          <Nav>
            <DevsBtn />
            <SignupBtn />
            {loggedin ? <LoginBtn /> : <LogoutBtn />}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
