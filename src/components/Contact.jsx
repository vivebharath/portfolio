import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Download, Send, CheckCircle, AlertCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resultMessage, setResultMessage] = useState("");
  const [statusType, setStatusType] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusType("sending");
    setResultMessage("Sending your message...");

    const serviceID = "service_p75mtec";
    const templateID = "template_bdgus0w";
    const publicKey = "CZN3GHE10X7yh6BWx";

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      time: new Date().toLocaleString(),
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey).then(
      (result) => {
        if (result) {
          setStatusType("success");
          setResultMessage(
            "Thank you! Your message has been sent successfully.",
          );
          setFormData({ name: "", email: "", message: "" });
          setIsSubmitting(false);
        }
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
    <section id="contact" className="py-24 px-6 bg-white text-slate-900">
      <div className="max-w-2xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-4 uppercase tracking-wider text-slate-900">
            Contact
          </h2>
          <div className="w-12 h-1.5 bg-blue-600 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 text-base font-medium leading-relaxed max-w-lg mx-auto">
            Feel free to contact me for job opportunities or collaborations. I
            will get back to you as soon as possible.
          </p>
        </div>

        {/* Form Card */}
        <form
          onSubmit={sendEmail}
          className="bg-white p-6 md:p-10 shadow-xl rounded-2xl space-y-6 border border-gray-100"
        >
          {/* Notification Banner - CLEAN TEXT ONLY */}
          {resultMessage && (
            <div
              className={`p-4 rounded-xl border flex items-center gap-3 transition-all duration-300 text-sm ${
                statusType === "success"
                  ? "bg-emerald-50 border-emerald-200 text-emerald-800"
                  : statusType === "error"
                    ? "bg-red-50 border-red-200 text-red-800"
                    : "bg-blue-50 border-blue-200 text-blue-800"
              }`}
            >
              {statusType === "success" && (
                <CheckCircle className="text-emerald-600 shrink-0" size={20} />
              )}
              {statusType === "error" && (
                <AlertCircle className="text-red-600 shrink-0" size={20} />
              )}
              <p className="font-semibold">{resultMessage}</p>
            </div>
          )}

          {/* Form Fields */}
          <div>
            <label className="block text-gray-700 font-bold mb-2 text-xs uppercase tracking-wide">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Your Name"
              className="w-full bg-gray-50 border border-gray-200 p-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm text-gray-700 transition"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-bold mb-2 text-xs uppercase tracking-wide">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Your Email"
              className="w-full bg-gray-50 border border-gray-200 p-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm text-gray-700 transition"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-bold mb-2 text-xs uppercase tracking-wide">
              Message
            </label>
            <textarea
              rows="5"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter Your Message"
              className="w-full bg-gray-50 border border-gray-200 p-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm text-gray-700 transition resize-none"
              required
            ></textarea>
          </div>

          {/* Action Buttons Row (Always Visible - No Duplicates) */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            {/* Send Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`flex-1 text-white py-3.5 rounded-xl font-bold transition-all shadow-md uppercase text-sm tracking-wider flex items-center justify-center gap-2 ${
                isSubmitting
                  ? "bg-gray-400 cursor-not-allowed shadow-none"
                  : "bg-blue-600 hover:bg-blue-700 shadow-blue-600/10"
              }`}
            >
              <Send size={16} />
              {isSubmitting ? "Submitting..." : "Send Message"}
            </button>

            {/* Resume Download Button - Permanent & Clean */}
            {/* <a
              href={`${import.meta.env.BASE_URL}Vivek_Resume.pdf`}
              download="Vivek_Narasingaperumal_Resume.pdf"
              className="flex-1 bg-slate-900 hover:bg-slate-800 text-white py-3.5 rounded-xl font-bold transition-all shadow-md shadow-slate-900/10 uppercase text-sm tracking-wider flex items-center justify-center gap-2 text-center"
            >
              <Download size={16} />
              Download Resume
            </a> */}
          </div>
        </form>
      </div>
    </section>
  );
}
