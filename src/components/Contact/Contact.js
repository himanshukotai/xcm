import React, { useState } from "react";
import "./Contact.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Code for sending the message would go here
    // For now, we'll just show a success message
    toast.success("Message sent!", {
      position: "top-right",
      autoClose: 2000,
      // hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    setEmail("");
    setName("");
    setMessage("");
  };

  return (
    <Container className="mt-5">
      <ToastContainer />
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h1 className="text-center">Contact Us</h1>
          <Form className="custom-form" onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Form.Group>

            <Button className="btnSubmit" variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
