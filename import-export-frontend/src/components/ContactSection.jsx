import React, { useState } from 'react';
import { Send } from 'lucide-react';
import emailjs from "@emailjs/browser";

const ContactSection = () => {

  const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID_CONTACT;
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await fetch('/api/contact', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(formData)
  //     });
  //     if (response.ok) {
  //       alert('Message sent successfully!');
  //       setFormData({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' });
  //     }
  //   } catch (error) {
  //     console.error('Error submitting form:', error);
  //     alert('Failed to send message. Please try again.');
  //   }
  // };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    phone: formData.phone,
    subject: formData.subject,
    message: formData.message,
  };

  try {
      await emailjs.send(
      SERVICE_ID,        // Replace with your service ID
     TEMPLATE_ID,       // Replace with your template ID
      templateParams,
        PUBLIC_KEY         // Replace with your public key
    );

    alert("Message sent successfully!");

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "General Inquiry",
      message: "",
    });

  } catch (error) {
    console.error("Email send error:", error);
    alert("Failed to send message. Please try again.");
  }
};


  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600">
            Fill out the form and we'll get back to you promptly
          </p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-xl">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your Name*"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Your Email*"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Phone/WhatsApp*"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
            <select
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option>General Inquiry</option>
              <option>Support</option>
              <option>Feedback</option>
            </select>
          </div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Your Message"
            rows="5"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent mb-6"
          />
          <button
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
          >
            Submit Now
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;