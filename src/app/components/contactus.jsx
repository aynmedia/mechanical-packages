"use client";

import Link from "next/link";
import React, { useRef } from "react";
const ContactUs = () => {
  const contactRef = useRef(null);

  const scrollToForm = () => {
    const formSection = document.getElementById("contactus");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-black p-10 flex flex-col justify-center items-center mx-auto">
      <div className="text-white text-3xl text-center mb-4">
        Explore More About Mechanical Packages, Kindly Reach Us
      </div>
      <button
        onClick={scrollToForm}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200"
      >
      
          Contact Us
      
      </button>

      <div ref={contactRef} className="mt-8">
        <p className="text-gray-100 text-center">
          Please fill out the form above to get in touch with us.
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
