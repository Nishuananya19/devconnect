
import { useState } from "react";
import { Send, Mail, MapPin } from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: ""
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (formData.message.trim().length < 10) {
      newErrors.message = "Message must contain at least 10 characters";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
      return;
    }

    setErrors({});
    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <section className="contact section" id="contact">
      <div className="section-heading">
        <span>GET IN TOUCH</span>
        <h2>Let's Start a <strong>Conversation</strong></h2>
        <p>
          Have a question or want to collaborate?
          We'd love to hear from you.
        </p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Let's Connect</h3>
          <p>
            Join our developer community and start
            building something amazing together.
          </p>

          <div className="contact-detail">
            <Mail />
            <span>hello@devconnect.example</span>
          </div>

          <div className="contact-detail">
            <MapPin />
            <span>Connect with developers worldwide</span>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            {errors.name && <small>{errors.name}</small>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <small>{errors.email}</small>}
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your message..."
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              minLength={10}
            />
            {errors.message && <small>{errors.message}</small>}
          </div>

          <button type="submit" className="submit-btn">
            Send Message <Send size={17} />
          </button>

          {submitted && (
            <p className="success-message" role="status">
              Thank you! Your form passed validation.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
