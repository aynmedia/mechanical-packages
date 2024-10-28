"use client";

import React, { useState } from "react";

// FAQ data
const faqs = [
  {
    id: 1,
    question: "What types of services does GL Cars offer in Bangalore?",
    answer:
      "GL Cars offers a wide range of services including regular maintenance, engine repair, wheel alignment, detailing, and much more. We provide doorstep pick-up and drop services to make it convenient for you.",
  },
  {
    id: 2,
    question:
      "Do you offer doorstep pick-up and drop-off service for car repairs?",
    answer:
      "Yes, we provide free doorstep pick-up and drop-off services across Bangalore for all the services booked with GL Cars.",
  },
  {
    id: 3,
    question: "How can I track my car service in real-time?",
    answer:
      "Once your car is picked up, you can track the service real-time through our app or website. You will also receive timely updates via SMS and email.",
  },
  {
    id: 4,
    question: "What is the warranty period on services provided?",
    answer:
      "GL Cars provides a warranty on all repairs and services, which varies depending on the type of service. You can check specific warranty details on the invoice provided after the service.",
  },
  {
    id: 5,
    question: "How can I book a car service with GL Cars?",
    answer:
      "You can easily book a service through our website, mobile app, or by calling our customer care. We will assist you in scheduling a convenient time for the service.",
  },
];

// FAQ component
const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null); // Track which FAQ is open

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle active index
  };

  return (
    <div className="p-4 max-w-4xl mx-auto mt-10 pb-10">
      <h1 className="text-4xl font-bold text-center mb-8">
        Common GLCars Services Questions in Bangalore
      </h1>
      {faqs.map((faq, index) => (
        <div key={faq.id} className="mb-4 border-b pb-4">
          <div
            className="cursor-pointer flex justify-between items-center"
            onClick={() => toggleFAQ(index)}
          >
            <h2 className="text-xl font-semibold">{faq.question}</h2>
            <span>{activeIndex === index ? "-" : "+"}</span>
          </div>
          {activeIndex === index && (
            <p className="mt-2 text-gray-600">{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
