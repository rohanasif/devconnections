import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { getLoggedUser, editProfile } from "../actions";
import { useNavigate } from "react-router-dom";
const Edit = () => {
  const loggedUser = useSelector((state) =>
    state.main.users.find((user) => user.isLoggedin)
  );
  const [profession, setProfession] = useState(loggedUser.profession);
  const [company, setCompany] = useState(loggedUser.company);
  const [website, setWebsite] = useState(loggedUser.website);
  const [skills, setSkills] = useState(loggedUser.skills);
  const [github, setGithub] = useState(loggedUser.github);
  const [bio, setBio] = useState(loggedUser.bio);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const loggedUser = await dispatch(getLoggedUser());
    const userId = loggedUser.id;
    dispatch(
      editProfile(loggedUser, {
        profession,
        company,
        website,
        skills,
        github,
        bio,
      })
    );
    alert("Profile created!");
    navigate(`/devconnections/profile/${userId}`);
  };
  useEffect(() => {}, []);
  return (
    <div>
      <h1>Edit your profile</h1>
      <div>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Form.Select
            aria-label="Default select example"
            value={profession}
            onChange={(e) => setProfession(e.target.value)}
            id="profession"
          >
            <option>Select Professional Status</option>
            <option value="Developer">Developer</option>
            <option value="Junior Developer">Junior Developer</option>
            <option value="Senior Developer">Senior Developer</option>
            <option value="Manager">Manager</option>
            <option value="Student">Student</option>
            <option value="Instructor">Instructor</option>
            <option value="Intern">Intern</option>
            <option value="Other">Other</option>
          </Form.Select>
          <Form.Group controlId="company">
            <Form.Control
              type="text"
              placeholder="Enter company name"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="website">
            <Form.Control
              type="text"
              placeholder="Enter your website/portfolio"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="location">
            <Form.Control type="text" placeholder="Enter your Location" />
          </Form.Group>
          <Form.Group controlId="skills">
            <Form.Control
              type="text"
              placeholder="Enter skills seperated by a comma"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="github">
            <Form.Control
              type="text"
              placeholder="Enter your github username"
              value={github}
              onChange={(e) => setGithub(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="bio">
            <Form.Control
              as="textarea"
              type="text"
              placeholder="A short bio of yourself"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
          </Form.Group>
          <Button type="submit">Save Changes</Button>
        </Form>
      </div>
    </div>
  );
};

export default Edit;
