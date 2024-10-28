/** @format */
"use client";
import React, { useState } from "react";
import "./styles.css";

const Banner = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false); // State for submission status

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Simulate a form submission
    console.log("Form submitted:", formData);

    // Show success message
    setIsSubmitted(true);

    // Optionally reset form after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });

    // You can add API call logic here to save the data to a server

    // Hide the success message after a few seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000); // Message will disappear after 3 seconds
  };
  return (
    <section
      style={{
        backgroundImage: `url("/images/GlCars_Landing_Page_BG_Img.webp")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        padding: "4rem 0",
      }}
    >
      {/* Overlay to darken the image for better text visibility */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.75)", // Adjust opacity for overlay
        }}
      ></div>
      <div
        id="contact-form"
        className="text-white py-8 px-4 md:flex md:items-center md:justify-between md:px-10 lg:gap-10"
      >
        {/* Content Section */}
        <div className="md:w-1/2 lg:w-2/6 xl:w-2/6 ">
          <h1 className="text-5xl font-bold mb-4">
            Quality Periodic Maintenance Services
          </h1>
          <p className="mb-6">
            With over 20 years of expertise in professional auto repair and
            maintenance, GL Cars is your trusted partner for ensuring your
            vehicle runs smoothly and efficiently. Our comprehensive mechanical
            packages are designed to keep your car in top condition, providing
            you with a safe, smooth, and reliable driving experience. From
            routine maintenance to complex repairs, we’ve got everything you
            need for a trouble-free ride.
          </p>
        </div>

        {/* Form Section */}
        <div className="mt-8 md:w-1/2 lg:w-2/6 md:mt-0 ">
          <div className="bg-white p-6 rounded-lg shadow-2xl mx-auto w-full md:w-4/6 lg:w-5/6 xl:w-5/6 ">
            <h2 className="text-2xl font-bold mb-4 text-black">Contact Us</h2>
            {isSubmitted && (
              <div className="fixed top-0 left-0 right-0 z-50 flex justify-center">
                <div className="bg-green-500 text-white p-4 rounded shadow-md">
                  Form Submitted Successfully
                </div>
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-1" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border text-black border-gray-300 p-2 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-1" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border text-black border-gray-300 p-2 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-1" htmlFor="message">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full border text-black border-gray-300 p-2 rounded"
                />
              </div>
              <button
                type="submit" // Submit the form
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
