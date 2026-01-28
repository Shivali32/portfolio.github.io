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

      // Match your EmailJS template variables: name, time, from_name, from_email, subject, message
      const templateParams = {
        name: formData.name,
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        time: new Date().toLocaleString(),
      };

      // Public key must be passed as an object (required by @emailjs/browser v4+)
      await emailjs.send(serviceId, templateId, templateParams, { publicKey });

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
      // Show the actual error from EmailJS for debugging
      const errorText = error?.text || error?.message || String(error);
      setStatus({
        type: "error",
        message: errorText.includes("Failed to fetch") || error?.status === 0
          ? "Network error. Please check your connection and try again, or contact me at " + email
          : "Failed to send: " + (errorText || "Please try again or contact me at " + email),
      });
    } finally {
      setLoading(false);
    }
  };

  const compactPadding = "0.4rem";
  const compactBorderRadius = "5px";

  return (
    <>
      <Row className="d-flex justify-content-center align-items-stretch">
        <Col md={12} className="mb-4">
          <section id="contactme" className="w-100">
            <Row className="align-items-center">
              <Col md={4} lg={4} className="pe-md-4 mb-4 mb-md-0 text-start">
                <h2 className="display-4 pb-5 text-white" style={{ fontSize: "4rem" }}>{heading}</h2>
                <p className="get-in-touch lead text-white mb-0" style={{ fontSize: "1rem", textAlign: "left" }}>
                  {message1}{" "}
                  <a className="text-decoration-none text-info" href={`mailto:${email}`}>
                    mail me
                  </a>{" "}
                  {message2}{" "}
                  <a className="text-decoration-none text-info" href={linkedin}>
                    LinkedIn
                  </a>
                  , and I will send you my resume.
                </p>
              </Col>

              <Col md={7} lg={7} className="offset-lg-1">
                <div
                  style={{
                    backgroundColor: "#1a1a1a",
                    borderRadius: "6px",
                    padding: "0.85rem 1rem",
                  }}
                >
                  <h3 className="text-white mb-2" style={{ fontSize: "1.05rem" }}>
                    Send a Message
                  </h3>

                  {status.message && (
                    <Alert
                      variant={status.type === "success" ? "success" : "danger"}
                      dismissible
                      onClose={() => setStatus({ type: "", message: "" })}
                      className="mb-2"
                      style={{ fontSize: "0.8rem", padding: "0.35rem 0.6rem" }}
                    >
                      {status.message}
                    </Alert>
                  )}

                  <Form onSubmit={handleSubmit}>
                    <Row>
                      <Col md={6} className="mb-1">
                        <Form.Label className="text-white mb-1" style={{ fontSize: "0.8rem" }}>Name</Form.Label>
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
                            borderRadius: compactBorderRadius,
                            padding: compactPadding,
                            fontSize: "0.8rem",
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
                      <Col md={6} className="mb-1">
                        <Form.Label className="text-white mb-1" style={{ fontSize: "0.8rem" }}>Email</Form.Label>
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
                            borderRadius: compactBorderRadius,
                            padding: compactPadding,
                            fontSize: "0.8rem",
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

                    <Form.Group className="mb-1">
                      <Form.Label className="text-white mb-1" style={{ fontSize: "0.8rem" }}>Subject</Form.Label>
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
                          borderRadius: compactBorderRadius,
                          padding: compactPadding,
                          fontSize: "0.8rem",
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

                    <Form.Group className="mb-2">
                      <Form.Label className="text-white mb-1" style={{ fontSize: "0.8rem" }}>Message</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        name="message"
                        placeholder="Tell me about your project, opportunity, or just say hello!"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        style={{
                          backgroundColor: "#2a2a2a",
                          border: "1px solid #3a3a3a",
                          color: "#fff",
                          borderRadius: compactBorderRadius,
                          padding: compactPadding,
                          resize: "vertical",
                          fontSize: "0.8rem",
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
                        borderRadius: compactBorderRadius,
                        padding: "0.4rem 0.9rem",
                        fontSize: "0.75rem",
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
              </Col>
            </Row>
          </section>
        </Col>
      </Row>
    </>
  );
};

export default GetInTouch;
