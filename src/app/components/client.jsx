import React from "react";
import Image from "next/image"; // Ensure you import Image from Next.js

const howGLCarsWorksData = [
  {
    id: 1,
    number: "10,000+",
    title: "Happy Customers",
    logo: "/images/Happy_Customers_Img.jpg", // Replace with your actual image path
  },
  {
    id: 2,
    number: "1,500+",
    title: "Cars Available",
    logo: "/images/Cars_Available.jpg", // Replace with your actual image path
  },
  {
    id: 3,
    number: "24/7",
    title: "Customer Support",
    logo: "/images/24x7_Customer_Support.jpg", // Replace with your actual image path
  },
  {
    id: 4,
    number: "98%",
    title: "Satisfaction Rate",
    logo: "/images/Satisfaction_Rate.png",
  },
];

const Client = () => {
  return (
    <section>
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Why Choose US</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {howGLCarsWorksData.map((item) => (
            <div
              key={item.id}
              className="border border-gray-300 shadow-lg p-6 rounded-lg flex flex-col items-center transition-transform transform hover:scale-105"
            >
              <Image
                src={item.logo}
                alt={item.title}
                width={100} // Set width as per your design
                height={100} // Set height as per your design
                className="mb-4 rounded-lg"
              />
              <h2 className="text-3xl font-bold text-blue-600">
                {item.number}
              </h2>
              <p className="text-lg text-center mt-2">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Client;
