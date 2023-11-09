import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import LoginBtn from "./LogoutBtn";
import LogoutBtn from "./LoginBtn";
import { useSelector } from "react-redux";
import SignupBtn from "./SignupBtn";
import DevsBtn from "./DevsBtn";

const NavBar = () => {
  const selectedState = useSelector((state) =>
    state.main.users.find((user) => user.isLoggedin)
  );
  const loggedin = !!selectedState;

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
