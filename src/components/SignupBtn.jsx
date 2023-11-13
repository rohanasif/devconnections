import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SignupBtn = () => {
  const navigate = useNavigate();
  const handleClick = async () => {
    navigate("/devconnections/signup");
  };

  return (
    <Button variant="outline-primary" onClick={() => handleClick()}>
      Sign Up
    </Button>
  );
};
export default SignupBtn;
