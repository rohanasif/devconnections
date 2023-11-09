import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout, getLoggedUser } from "../actions";

const SignupBtn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = async () => {
    const loggedinUser = await dispatch(getLoggedUser());
    if (loggedinUser) {
      await dispatch(logout(loggedinUser));
    }
    navigate("/devconnections/signup");
  };

  return (
    <Button variant="outline-primary" onClick={() => handleClick()}>
      Sign Up
    </Button>
  );
};
export default SignupBtn;
