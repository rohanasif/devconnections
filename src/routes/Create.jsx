import { useState } from "react";
import { Form, Button } from "react-bootstrap";
const Create = () => {
  const [profession, setProfession] = useState("");
  const [company, setCompany] = useState("");
  const [website, setWebsite] = useState("");
  const [skills, setSkills] = useState("");
  const [github, setGithub] = useState("");
  const [bio, setBio] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h1>Create your Profile</h1>
      <div>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Form.Select
            aria-label="Default select example"
            value={profession}
            onChange={(e) => setProfession(e.target.value)}
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
          <Form.Group controlId="company">
            <Form.Control
              as="textarea"
              type="text"
              placeholder="A short bio of yourself"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
          </Form.Group>
          <Button type="submit">Create</Button>
        </Form>
      </div>
    </div>
  );
};
export default Create;
