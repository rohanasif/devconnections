import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Profile = () => {
  const { id } = useParams();
  const user = useSelector((state) => state.users?.filter(user.id === id));

  return (
    <div className="d-flex align-items-center justify-content-center">
      <Card style={{ width: "300px" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{user?.name}</Card.Title>
          <Card.Text>{user?.position}</Card.Text>
          <Card.Text>{user?.location}</Card.Text>
          <Card.Text>{user?.github}</Card.Text>
          <Card.Text>
            {user?.skills?.map((skill, i) => {
              <li key={i}>{skill}</li>;
            })}
          </Card.Text>
          <Link to="/devconnections/edit">
            <Button>Edit Profile</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};
export default Profile;
