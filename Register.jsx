import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const Register = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={6}>
          <h2 style={{ padding: "30px", color: "blue" }}>Register</h2>
          <Form>
            <Form.Group controlId="formBasicText">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Full Name" />
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter Email" />
            </Form.Group>
            <Form.Group controlId="formBasicText">
              <Form.Label>Contact No.</Form.Label>
              <Form.Control type="text" placeholder="Contact Number" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Confirm Password" />
            </Form.Group>

            <div style={{marginTop:'20px'}} class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="gender"
                id="male"
              />
              <label class="form-check-label" for="male">
                Male
              </label>

              <div style={{float:'right'}} class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="gender"
                  id="female"
                />
                <label class="form-check-label" for="female">
                  Female
                </label>
              </div>
            </div>

            <Button
              style={{ marginTop: "3rem" }}
              className="position-relative bottom-0 start-50 translate-middle"
              variant="outline-primary"
              type="submit"
            >
              Register
            </Button>
          </Form>
        </Col>
        <Col md={5}>
          <img
            style={{ marginTop: "7rem", height: "400px" }}
            src={process.env.PUBLIC_URL + "/registration.jpg"}
            alt="register"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
