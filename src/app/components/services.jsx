"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper components
import { Autoplay, Pagination, Navigation } from "swiper/modules"; // Import Swiper modules from swiper/modules
import "swiper/css"; // Import Swiper core styles
import "swiper/css/pagination"; // Pagination styles
import "swiper/css/navigation"; // Navigation styles
import Image from "next/image";

const servicesData = [
  {
    id: 1,
    name: "Car Accessories",
    description:
      "Elevate Your Ride with Premium Accessories Designed for Ultimate Comfort and Enhanced Safety.",
    imageUrl: "/images/Car_Accessories_Img.webp",
    link: "https://glcars.in/car-accessories/",
  },
  {
    id: 2,
    name: "Car Care",
    description:
      "We ensure the vehicle stays pristine and protected with our top-notch services.",
    imageUrl: "/images/Car_Care_Img.webp",
    link: "https://glcars.in/car-care/",
  },
  {
    id: 3,
    name: "Mechanical Work",
    description:
      "Auto care for mechanical, electrical, AC service, and on-the-spot breakdown.",
    imageUrl: "/images/Mechanical_Work_Img.webp",
    link: "https://glcars.in/mechanical-work/",
  },
  {
    id: 4,
    name: "Denting & Painting",
    description:
      "Effortless car transactions: find or sell your dream ride hassle-free with us.",
    imageUrl: "/images/Denting_&_Painting_Img.webp",
    link: "https://glcars.in/denting-and-painting/",
  },
  {
    id: 5,
    name: "Electrical & A/c Repair",
    description:
      "Experience comprehensive automotive care with our range of services.",
    imageUrl: "/images/Electrical_Ac_Repair_Img.webp",
    link: "https://glcars.in/electrical-and-a-c-repair/",
  },
  {
    id: 6,
    name: "Car Selling & Buying",
    description:
      "Effortless car transactions: find or sell your dream ride hassle-free with us.",
    imageUrl: "/images/Car_Selling_&_Buying.webp",
    link: "https://glcars.in/mechanical-work/",
  },
];

const Services = () => {
  return (
    <div className="p-6">
      <div>
        <h1 className="text-4xl font-bold text-center mb-8">Our Various Services</h1>
      </div>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true} // Ensure navigation works
        modules={[Autoplay, Pagination, Navigation]} // Correct modules import
      >
        {servicesData.map((service) => (
          <SwiperSlide key={service.id}>
            <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <a href={service.link}>
                <img
                  src={service.imageUrl}
                  alt={service.name}
                  width={100}
                  height={100}
                  className="w-full h-64 object-cover cursor-pointer"
                />
              </a>
              <div className="p-4">
                <h2 className="text-xl font-bold">{service.name}</h2>
                <p className="mt-2 text-gray-600">{service.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Services;
