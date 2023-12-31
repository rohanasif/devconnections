import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { getLoggedUser, logout } from "../actions";

const LogoutBtn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = async () => {
    try {
      const loggedUser = await dispatch(getLoggedUser());
      if (loggedUser) {
        await dispatch(logout(loggedUser));
        alert("You are logged out!");
        navigate("/devconnections/login");
      } else {
        alert("No user is currently logged in.");
      }
    } catch (error) {
      console.error("Logout failed: ", error);
    }
  };
  return (
    <Button variant="outline-danger" onClick={() => handleClick()}>
      Logout
    </Button>
  );
};

export default LogoutBtn;
