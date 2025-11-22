import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion"; // ✅ import Framer Motion

const contactLinks = [
  {
    icon: "bi-envelope-fill",
    text: "mansizanjale2824@gmail.com",
    link: "mailto:mansizanjale2824@gmail.com",
  },
  {
    icon: "bi-telephone-fill",
    text: "+91 9923392829",
    link: "tel:+919923392829",
  },
  {
    icon: "bi-linkedin",
    text: "mansi-zanjale",
    link: "https://www.linkedin.com/in/mansi-zanjale",
  },
  {
    icon: "bi-github",
    text: "mansi-zanjale",
    link: "https://github.com/mansi-zanjale",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const res = await axios.post(
        "https://portfolio-backend-wcaq.onrender.com/api/contact",
        formData
      );
      setStatus(res.data.message);
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("Failed to send message. Please try again.");
      console.error(err);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      className="contact-section"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2 className="section-title" variants={itemVariants}>
        Get In Touch
      </motion.h2>
      <motion.p className="section-subtitle" variants={itemVariants}>
        I'm always open for new opportunities and collaborations
      </motion.p>

      <div className="contact-container">
        {/* Right Column: Contact Form */}
        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          variants={itemVariants}
        >
          <input
            type="text"
            placeholder="Name"
            className="form-input"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="form-input"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            placeholder="Message"
            className="form-input message-box"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <motion.button
            type="submit"
            className="submit-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>

          {status && <p className="status-message">{status}</p>}
        </motion.form>
        {/* Left Column: Contact Links */}
        <motion.div className="contact-info-card" variants={itemVariants}>
          {contactLinks.map((item, index) => (
            <motion.a
              className="contact-item"
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
            >
              <i className={`bi ${item.icon} contact-icon`}></i>
              <span className="contact-text">{item.text}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
