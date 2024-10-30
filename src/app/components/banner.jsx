"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com"; // Import EmailJS
import "./styles.css";

const Banner = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    vehicleType: "", // New field for vehicle type
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

  // New state for validation errors
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    vehicleType: "", // New field for vehicle type errors
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.name) {
      newErrors.name = "Name is required";
    }

    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    // Phone number validation
    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    // Vehicle type validation
    if (!formData.vehicleType) {
      newErrors.vehicleType = "Vehicle type is required";
    }

    if (!formData.message) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form
    if (!validateForm()) {
      return;
    }

    // Prepare EmailJS parameters
    const emailParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      vehicleType: formData.vehicleType, // Include vehicle type in the email
    };

    // Sending email using EmailJS
    emailjs
      .send(
        "service_aauygfh",
        "template_pejk3xd",
        emailParams,
        "ShreeRam_Gmail"
      )
      .then(
        (response) => {
          console.log(
            "Email sent successfully:",
            response.status,
            response.text
          );
          setIsSubmitted(true);
          setIsError(false);
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
            vehicleType: "", // Reset vehicle type field
          });
          setTimeout(() => {
            setIsSubmitted(false);
          }, 3000);
        },
        (error) => {
          console.error("Failed to send email:", error);
          setIsError(true);
        }
      );
  };

  return (
    <section
      style={{
        backgroundImage: `url("/images/GLCars_Banner_Img.webp")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        padding: "4rem 0",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div
        id="contact-form"
        className="relative z-10 text-white py-8 px-4 md:flex md:items-center md:justify-between md:px-10 lg:gap-10"
      >
        {/* Content Section */}
        <div className="md:w-1/2 lg:w-2/6 xl:w-2/6">
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
        <div className="mt-8 md:w-1/2 lg:w-2/6 md:mt-0">
          <div className="bg-white p-6 rounded-lg shadow-2xl mx-auto w-full md:w-4/6 lg:w-5/6 xl:w-5/6">
            <h2 className="text-2xl font-bold mb-4 text-black">Contact Us</h2>
            {isSubmitted && (
              <div className="bg-green-500 text-white p-4 rounded mb-4">
                Form Submitted Successfully
              </div>
            )}
            {isError && (
              <div className="bg-red-500 text-white p-4 rounded mb-4">
                Failed to Submit Form
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
                  className="w-full border text-black border-gray-300 outline-none p-2 rounded"
                />
                {errors.name && <p className="text-red-500">{errors.name}</p>}
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
                  className="w-full border text-black border-gray-300 outline-none p-2 rounded"
                />
                {errors.email && <p className="text-red-500">{errors.email}</p>}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-1" htmlFor="phone">
                  Phone
                </label>
                <input
                  type="tel" // Use 'tel' for phone number input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full border text-black border-gray-300 outline-none p-2 rounded"
                />
                {errors.phone && <p className="text-red-500">{errors.phone}</p>}
              </div>

              {/* Vehicle Type Dropdown */}
              <div className="mb-4">
                <label
                  className="block text-gray-700 mb-1"
                  htmlFor="vehicleType"
                >
                  Vehicle Type
                </label>
                <select
                  name="vehicleType"
                  value={formData.vehicleType}
                  onChange={handleChange}
                  required
                  className="w-full border text-gray-700 border-gray-300 outline-none p-2 rounded"
                >
                  <option selected disabled hidden value="">Select your vehicle type</option>
                  <option value="Sedan">Sedan</option>
                  <option value="SUV">SUV</option>
                  <option value="Hatchback">Hatchback</option>
                  <option value="Convertible">Convertible</option>
                  <option value="Coupe">Coupe</option>
                  <option value="Crossover">Crossover</option>
                </select>
                {errors.vehicleType && (
                  <p className="text-red-500">{errors.vehicleType}</p>
                )}
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
                  className="w-full border text-black border-gray-300 outline-none p-2 rounded"
                />
                {errors.message && (
                  <p className="text-red-500">{errors.message}</p>
                )}
              </div>
              <button
                type="submit"
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
