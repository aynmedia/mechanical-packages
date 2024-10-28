/** @format */
"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import "./styles.css";
import Link from "next/link";

const Banner = () => {
  const handleScrollToSection = (id) => {
    const section = document.querySelector(id);
    const offset = 250;
    const elementPosition = section.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div
      id="contact-form"
      className="bgimg text-white py-8 px-4 md:flex md:items-center md:justify-between md:px-10 lg:gap-10"
    >
      {/* Content Section */}
      <div className="md:w-1/2 lg:w-2/6 xl:w-2/6 ">
        <h1 className="text-5xl font-bold mb-4">
          Quality Periodic Maintenance Services
        </h1>
        <p className="mb-6">
          With over 20 years of expertise in professional auto repair and
          maintenance, GL Cars is your trusted partner for ensuring your vehicle
          runs smoothly and efficiently. Our comprehensive mechanical packages
          are designed to keep your car in top condition, providing you with a
          safe, smooth, and reliable driving experience. From routine
          maintenance to complex repairs, we’ve got everything you need for a
          trouble-free ride.
        </p>
      </div>

      {/* <div className="relative mb-6 md:w-1/2 md:mb-0 group -top-2 -left-40">
        <div className="flex justify-center items-center gap-5">
          <div className="relative group">
            <Image
              src="/images/Basic_Package_Button_Img.webp"
              alt="Basic Package"
              width={600}
              height={400}
              className="w-60 h-52 rounded-lg opacity-100 transition-opacity duration-300"
            />
            <button
              onClick={() => handleScrollToSection("#basic-package")}
              className="absolute inset-0 flex justify-center items-center bg-black text-white px-4 py-2 rounded-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"
            >
              Basic Package
            </button>
          </div>
          <div className="relative group">
            <Image
              src="/images/Standard_Package_Button_Img.webp"
              alt="Standard Package"
              width={600}
              height={400}
              className="w-80 h-52 rounded-lg opacity-100 transition-opacity duration-300"
            />
            <button
              onClick={() => handleScrollToSection("#standard-package")}
              className="absolute inset-0 flex justify-center items-center bg-black text-white px-4 py-2 rounded-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"
            >
              Standard Package
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center gap-5 pt-5">
          <div className="relative group">
            <Image
              src="/images/Recommended_Package_Button_Img.webp"
              alt="Recommended Package"
              width={600}
              height={400}
              className="w-80 h-80 rounded-lg opacity-100 transition-opacity duration-300"
            />
            <button
              onClick={() => handleScrollToSection("#recommended-package")}
              className="absolute inset-0 flex justify-center items-center bg-black text-white px-4 py-2 rounded-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"
            >
              Recommended Package
            </button>
          </div>

          <div className="relative group">
            <Image
              src="/images/High_Recommended_Package_Button_Img.webp"
              alt="High Recommended Package"
              width={600}
              height={400}
              className="w-80 h-full rounded-lg opacity-100 transition-opacity duration-300"
            />
            <button
              onClick={() => handleScrollToSection("#highrecommended-package")}
              className="absolute inset-0 flex justify-center items-center bg-black text-white px-4 py-2 rounded-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"
            >
              High Recommended Package
            </button>
          </div>
        </div>
      </div> */}

      {/* Form Section */}
      <div className="mt-8 md:w-1/2 lg:w-2/6 md:mt-0 ">
        <div className="bg-white p-6 rounded-lg shadow-2xl mx-auto w-full md:w-4/6 lg:w-5/6 xl:w-5/6 ">
          <h2 className="text-2xl font-bold mb-4 text-black">Contact Us</h2>
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
                className="w-full border border-gray-300 p-2 rounded"
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
                className="w-full border border-gray-300 p-2 rounded"
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
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <button
              onClick={handleScrollToSection}
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Banner;
