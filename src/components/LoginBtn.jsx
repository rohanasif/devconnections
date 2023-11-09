import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getLoggedUser, logout } from "../actions";

const LoginBtn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = async () => {
    const loggedinUser = await dispatch(getLoggedUser());
    if (loggedinUser) {
      await dispatch(logout(loggedinUser));
    }
    navigate("/devconnections/login");
  };

  return (
    <Button variant="outline-success" onClick={() => handleClick()}>
      Login
    </Button>
  );
};
export default LoginBtn;
