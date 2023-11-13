import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <h3>Welcome! You have not yet created a profile.</h3>
      <Link to="/devconnections/create">
        <Button>Create Profile</Button>
      </Link>
    </div>
  );
};
export default Dashboard;
