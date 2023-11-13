import { Form } from "react-bootstrap";
const Create = () => {
  return (
    <div>
      <h1>Create your Profile</h1>
      <div>
        <Form>
          <Form.Select aria-label="Default select example">
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
            <Form.Control type="text" placeholder="Enter company name" />
          </Form.Group>
          <Form.Group controlId="website">
            <Form.Control
              type="text"
              placeholder="Enter your website/portfolio"
            />
          </Form.Group>
          <Form.Group controlId="location">
            <Form.Control type="text" placeholder="Enter your Location" />
          </Form.Group>
          <Form.Group controlId="skills">
            <Form.Control
              type="text"
              placeholder="Enter skills seperated by a comma"
            />
          </Form.Group>
          <Form.Group controlId="github">
            <Form.Control
              type="text"
              placeholder="Enter your github username"
            />
          </Form.Group>
          <Form.Group controlId="company">
            <Form.Control
              as
              textarea
              type="text"
              placeholder="A short bio of yourself"
            />
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};
export default Create;
