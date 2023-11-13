import { Button, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Developers = () => {
  const users = useSelector((state) => state.main.users);
  return (
    <div className="d-flex justify-content-center">
      <h1>Developers</h1>
      {users.map((user, i) => {
        return (
          <Card style={{ width: "300px" }} key={i}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>{user.name}</Card.Title>
              <Card.Text>{user.position}</Card.Text>
              <Card.Text>{user.location}</Card.Text>
              <Card.Text>{user.github}</Card.Text>
              <Card.Text>
                {user.skills?.map((skill, i) => {
                  <li key={i}>{skill}</li>;
                })}
              </Card.Text>
              <Link to={`/devconnections/profile/${user.id}`}>
                <Button>View Profile</Button>
              </Link>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};
export default Developers;
