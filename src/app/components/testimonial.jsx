"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper components
import { Autoplay, Pagination, Navigation } from "swiper/modules"; // Import Swiper modules from swiper/modules
import "swiper/css"; // Import Swiper core styles
import "swiper/css/pagination"; // Pagination styles
import "swiper/css/navigation"; // Navigation styles
import Image from "next/image";

// Testimonials array with images
const testimonials = [
  {
    id: 1,
    name: "Ravi Kumar",
    feedback:
      "GL Cars Bangalore exceeded my expectations! Their service was prompt, and I was able to track everything in real-time. Highly recommend for anyone looking for reliable car services!",
    location: "Koramangala, Bangalore",
    image: "/images/User_Men.jpg", // Replace with actual image path
  },
  {
    id: 2,
    name: "Anjali Menon",
    feedback:
      "Fantastic experience with GL Cars! From booking my test drive to getting my car serviced, everything was seamless. Their customer support is top-notch.",
    location: "Indiranagar, Bangalore",
    image: "/images/User_Women.jpg", // Replace with actual image path
  },
  {
    id: 3,
    name: "Karthik Sharma",
    feedback:
      "The team at GL Cars Bangalore provided excellent advice on picking the perfect car for my family. The doorstep pick-up service for maintenance is so convenient!",
    location: "Jayanagar, Bangalore",
    image: "/images/User_Men.jpg", // Replace with actual image path
  },
  {
    id: 4,
    name: "Priya Patel",
    feedback:
      "GL Cars not only has a great fleet but also offers amazing benefits like their loyalty rewards. I’ve earned so much while servicing my car here!",
    location: "Whitefield, Bangalore",
    image: "/images/User_Women.jpg", // Replace with actual image path
  },
  {
    id: 5,
    name: "Rahul Desai",
    feedback:
      "Smooth and hassle-free experience. The real-time tracking feature for car service gave me peace of mind. GL Cars Bangalore is the place to go for premium services.",
    location: "HSR Layout, Bangalore",
    image: "/images/User_Men.jpg", // Replace with actual image pathc:\Users\admin\Downloads\speech-bubbles-with-smiley-faces\Happy_Customers_Img.jpg
  },
];

// Testimonial component
const Testimonial = () => {
  return (
    <section className="pt-10 pb-10">
      <div className="container mx-auto">
        <div>
          <h1 className="text-4xl font-bold text-center mb-8">
            What Car Owners in Bangalore Say
          </h1>
        </div>
        <Swiper
          spaceBetween={30}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="border p-6 shadow-md rounded-md flex flex-col items-center">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={100}
                  height={100}
                  className="w-24 h-24 rounded-full object-cover mb-4"
                />
                <h3 className="font-bold text-xl">{testimonial.name}</h3>
                <p className="italic text-center mt-2">
                  &quot;{testimonial.feedback}&quot;
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  - {testimonial.location}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
