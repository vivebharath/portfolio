import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  // 1. Manage form input state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    time:""
  });

  // 2. Manage submission status state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resultMessage, setResultMessage] = useState("");
  const [statusType, setStatusType] = useState(""); // "success" or "error"

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResultMessage("Sending your message...");
    setStatusType("");
    const serviceID = "service_p75mtec";
    const templateID = "template_bdgus0w";
    const publicKey = "CZN3GHE10X7yh6BWx";

    // Map your React state to the variables in your EmailJS template
    const templateParams = {
      name: formData.name, 
      email: formData.email, 
      message: formData.message, 
      time: new Date().toLocaleString()
    };

    // Use emailjs.send() instead of sendForm()
    emailjs.send(serviceID, templateID, templateParams, publicKey).then(
      (result) => {
        setStatusType("success");
        setResultMessage("Thank you! Your message has been sent successfully.");
        // Clear the form fields by resetting state
        setFormData({ name: "", email: "", message: "" });
        setIsSubmitting(false);
      },
      (error) => {
        console.error(error.text);
        setStatusType("error");
        setResultMessage("Something went wrong. Please try again later.");
        setIsSubmitting(false);
      },
    );
  };

  return (
    <section id="contact" className="py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 uppercase tracking-wider">
            Contact
          </h2>
          <div className="w-8 h-1 bg-blue-600 mx-auto rounded mb-4"></div>
          <p className="text-gray-600 text-lg font-medium">
            Feel free to contact me for job opportunities or collaborations. I
            will get back to you as soon as possible.
          </p>
        </div>

        <form
          onSubmit={sendEmail}
          className="bg-white p-8 md:p-14 shadow-2xl rounded-lg space-y-8 border border-gray-100"
        >
          {/* Notification Banner */}
          {resultMessage && (
            <div
              className={`p-4 rounded font-medium text-center border ${
                statusType === "success"
                  ? "bg-green-50 border-green-200 text-green-700"
                  : statusType === "error"
                    ? "bg-red-50 border-red-200 text-red-700"
                    : "bg-blue-50 border-blue-200 text-blue-700"
              }`}
            >
              {resultMessage}
            </div>
          )}

          <div>
            <label className="block text-gray-700 font-bold mb-3 text-sm uppercase tracking-wide">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Your Name"
              className="w-full bg-gray-50 border border-gray-200 p-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-700"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-bold mb-3 text-sm uppercase tracking-wide">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Your Email"
              className="w-full bg-gray-50 border border-gray-200 p-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-700"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-bold mb-3 text-sm uppercase tracking-wide">
              Message
            </label>
            <textarea
              rows="6"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter Your Message"
              className="w-full bg-gray-50 border border-gray-200 p-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-700"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full text-white py-4 rounded font-bold transition shadow-md uppercase tracking-wider ${
              isSubmitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
}
