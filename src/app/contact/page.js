"use client";
import React, { useState } from "react";
import {
  Phone,
  Mail,
  Instagram,
  Send,
  User,
  MessageCircle,
  Github,
  Linkedin,
} from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-8">
            GET <span className="text-pink-400">IN TOUCH</span>
          </h1>
          <div className="flex items-center justify-center gap-8 mb-4">
            <div className="h-px bg-pink-400 w-32"></div>
            <p className="text-gray-300 text-lg uppercase tracking-wide">
              Follow me and DM me for any queries or just to say hi
            </p>
            <div className="h-px bg-pink-400 w-32"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Contact Information */}
          <div className="space-y-12">
            {/* Phone */}
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold text-gray-300">Phone</h3>
              <div className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-pink-400" />
                <span className="text-lg">9835788229</span>
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold text-gray-300">Email</h3>
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-pink-400" />
                <span className="text-lg">akankshamahto1301@gmail.com</span>
              </div>
            </div>

            {/* Social Profiles */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-300">
                Social Profiles
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/akankshamahto1301"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 border-2 border-pink-400 rounded-full flex items-center justify-center hover:bg-pink-400 hover:text-gray-900 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/akanksha-mahto-vit/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 border-2 border-pink-400 rounded-full flex items-center justify-center hover:bg-pink-400 hover:text-gray-900 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                {/* <a
                  href="https://instagram.com/your-instagram-id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 border-2 border-pink-400 rounded-full flex items-center justify-center hover:bg-pink-400 hover:text-gray-900 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a> */}
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="space-y-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Field */}
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="YOUR NAME"
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-4 pl-12 text-white placeholder-gray-500 focus:outline-none focus:border-pink-400 focus:ring-1 focus:ring-pink-400 transition-colors"
                  />
                  <User className="absolute left-4 top-4 w-5 h-5 text-gray-500" />
                </div>

                {/* Email Field */}
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="YOUR EMAIL"
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-4 pl-12 text-white placeholder-gray-500 focus:outline-none focus:border-pink-400 focus:ring-1 focus:ring-pink-400 transition-colors"
                  />
                  <Mail className="absolute left-4 top-4 w-5 h-5 text-gray-500" />
                </div>
              </div>

              {/* Message Field */}
              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="YOUR MESSAGE"
                  rows={8}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-4 pl-12 text-white placeholder-gray-500 focus:outline-none focus:border-pink-400 focus:ring-1 focus:ring-pink-400 transition-colors resize-none"
                />
                <MessageCircle className="absolute left-4 top-4 w-5 h-5 text-gray-500" />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-4 px-8 rounded-lg flex items-center gap-3 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                <Send className="w-5 h-5" />
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
