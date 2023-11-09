import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const DevsBtn = () => {
  const navigate = useNavigate();
  const handleClick = async () => {
    navigate("/devconnection/devs");
  };

  return (
    <Button variant="outline-secondary" onClick={() => handleClick()}>
      Developers
    </Button>
  );
};
export default DevsBtn;
