import React, { useState } from "react";
import { Row, Col, Form, Button, Alert } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import "../../assets/css/style.css";

const GetInTouch = ({ heading, message1, message2, email, linkedin }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear status when user starts typing
    if (status.message) {
      setStatus({ type: "", message: "" });
    }
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setStatus({ type: "error", message: "Please enter your name" });
      return false;
    }
    if (!formData.email.trim()) {
      setStatus({ type: "error", message: "Please enter your email" });
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setStatus({ type: "error", message: "Please enter a valid email address" });
      return false;
    }
    if (!formData.subject.trim()) {
      setStatus({ type: "error", message: "Please enter a subject" });
      return false;
    }
    if (!formData.message.trim()) {
      setStatus({ type: "error", message: "Please enter a message" });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      // EmailJS configuration
      const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
      const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

      // Check if EmailJS is configured
      if (!serviceId || !templateId || !publicKey || 
          serviceId === "YOUR_SERVICE_ID" || 
          templateId === "YOUR_TEMPLATE_ID" || 
          publicKey === "YOUR_PUBLIC_KEY") {
        setStatus({
          type: "error",
          message: "Email service not configured. Please contact me directly at " + email + " or see EMAILJS_SETUP.md for setup instructions.",
        });
        setLoading(false);
        return;
      }

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: email, // Your email address
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again or contact me directly at " + email,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Row className="d-flex justify-content-center align-items-stretch">
        <Col md="9" className="mb-4 d-flex">
          <section id="contactme" className="justify-content-center w-100">
            <h2 className="display-4 pb-3 text-center text-white">{heading}</h2>
            <p className="get-in-touch lead text-center pb-4 text-white">
              {message1}{" "}
              <a className="text-decoration-none text-info" href={`mailto:${email}`}>
                mail me
              </a>{" "}
              {message2}{" "}
              <a className="text-decoration-none text-info" href={linkedin}>
                LinkedIn
              </a>
              .
            </p>

            <div
              style={{
                backgroundColor: "#1a1a1a",
                borderRadius: "10px",
                padding: "2rem",
                maxWidth: "800px",
                margin: "0 auto",
              }}
            >
              <h3 className="text-white mb-4" style={{ fontSize: "1.8rem" }}>
                Send a Message
              </h3>

              {status.message && (
                <Alert
                  variant={status.type === "success" ? "success" : "danger"}
                  dismissible
                  onClose={() => setStatus({ type: "", message: "" })}
                  className="mb-4"
                >
                  {status.message}
                </Alert>
              )}

              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Label className="text-white mb-2">Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      style={{
                        backgroundColor: "#2a2a2a",
                        border: "1px solid #3a3a3a",
                        color: "#fff",
                        borderRadius: "8px",
                        padding: "0.75rem",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "#4484ce";
                        e.target.style.outline = "none";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "#3a3a3a";
                      }}
                    />
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Label className="text-white mb-2">Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={{
                        backgroundColor: "#2a2a2a",
                        border: "1px solid #3a3a3a",
                        color: "#fff",
                        borderRadius: "8px",
                        padding: "0.75rem",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "#4484ce";
                        e.target.style.outline = "none";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "#3a3a3a";
                      }}
                    />
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label className="text-white mb-2">Subject</Form.Label>
                  <Form.Control
                    type="text"
                    name="subject"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    style={{
                      backgroundColor: "#2a2a2a",
                      border: "1px solid #3a3a3a",
                      color: "#fff",
                      borderRadius: "8px",
                      padding: "0.75rem",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#4484ce";
                      e.target.style.outline = "none";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#3a3a3a";
                    }}
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label className="text-white mb-2">Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={6}
                    name="message"
                    placeholder="Tell me about your project, opportunity, or just say hello!"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    style={{
                      backgroundColor: "#2a2a2a",
                      border: "1px solid #3a3a3a",
                      color: "#fff",
                      borderRadius: "8px",
                      padding: "0.75rem",
                      resize: "vertical",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#4484ce";
                      e.target.style.outline = "none";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#3a3a3a";
                    }}
                  />
                </Form.Group>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-100"
                  style={{
                    backgroundColor: "#fff",
                    color: "#000",
                    border: "none",
                    borderRadius: "8px",
                    padding: "0.75rem 1.5rem",
                    fontSize: "1.1rem",
                    fontWeight: "500",
                    transition: "all 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#f0f0f0";
                    e.target.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "#fff";
                    e.target.style.transform = "translateY(0)";
                  }}
                >
                  {loading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane me-2"></i>
                      Send Message
                    </>
                  )}
                </Button>
              </Form>
            </div>
          </section>
        </Col>
      </Row>
    </>
  );
};

export default GetInTouch;
