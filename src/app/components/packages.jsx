"use client";
import React, { useState } from "react";
import Image from "next/image";
const packagesData = [
  {
    id: 1,
    title: "Basic Package",
    image: "/images/Basic_Package_Img.webp",
    description:
      "Ideal for small businesses starting out, This is the package that covers the essential needs of your vehicle in a effective manner.",
    features: [
      "General Check-up",
      "Engine Oil Top Up (Up to 500ml)",
      "Coolant Top Up (Up to 200ml)",
      "Brake Oil Top Up (Up to 50ml)",
      "Air Filter Cleaning",
    ],
    pricing: {
      smallCars: "₹499",
      mediumCars: "₹699",
      largeCars: "₹799",
      premiumCars: "₹899",
    },
  },
  {
    id: 2,
    title: "Standard Package",
    image: "/images/Standard_Package_Img.webp",
    description:
      "Elevate your business operations with our Standard Package, tailored for companies on the rise, Best package for maintenance.",
    features: [
      "Engine Oil Change",
      "Air Filter - Replacement",
      "Oil Filter - Replacement",
      "Coolant Change",
      "Fuel Filter Check-Up",
      "Heaters / Spark Plugs Check-Up",
      "Battery Water Top Up",
      "Rear Brake Shoes Cleaned",
      "Front Brake Pads Cleaned",
      "Battery Testing with Print-Out",
      "Gear Oil Check-Up",
      "Car Body Wash",
      "Under Chassis Wash",
      "AC Filter Cleaning",
      "Interior Vacuuming (Carpets & Seats)",
    ],
    pricing: {
      smallCars: "₹4999",
      mediumCars: "₹6999",
      largeCars: "₹11999",
      premiumCars: "₹14999",
    },
  },
  {
    id: 3,
    title: "Recommended Package",
    image: "/images/Recommended_Package_Img.webp",
    description:
      "Maximize your fleet's performance with our Recommended Package—tailored for large-scale businesses",
    features: [
      "General Check-up",
      "Engine Oil Top Up (Up to 500ml)",
      "Coolant Top Up (Up to 200ml)",
      "Brake Oil Top Up (Up to 50ml)",
      "Air Filter Cleaning",
      "Engine Oil Change",
      "Air Filter - Replacement",
      "Oil Filter - Replacement",
      "Coolant Change",
      "Fuel Filter Check-Up",
      "Heaters / Spark Plugs Check-Up",
      "Battery Water Top Up",
      "Rear Brake Shoes Cleaned",
      "Front Brake Pads Cleaned",
      "Battery Testing with Print-Out",
      "Gear Oil Check-Up",
      "Car Body Wash",
      "Under Chassis Wash",
      "AC Filter Cleaning",
      "Interior Vacuuming (Carpets & Seats)",
      "Steering Oil Check (Up To 100 ML)",
      "Digital Health Check-Up",
      "Wheel Alignment",
      "Wheel Balancing",
      "Nitrogen Air Filling",
      "Radiator Flushing",
      "Engine Room Wash",
      "Door Pad Polish",
      "Dash Board Polish",
      "Tyre Polish",
    ],
    pricing: {
      smallCars: "₹7999",
      mediumCars: "₹10999",
      largeCars: "₹14999",
      premiumCars: "₹18999",
    },
  },
  {
    id: 4,
    title: "High Recommended Package",
    image: "/images/High_Recommended_Package_Img.webp",
    description:
      "Elevate your enterprise's vehicle maintenance with our High Recommended Package,",
    features: [
      "Engine Oil Change",
      "Air Filter - Replacement",
      "Oil Filter - Replacement",
      "Coolant Change",
      "Fuel Filter Check-Up",
      "Heaters / Spark Plugs Check-Up",
      "Battery Water Top Up",
      "Rear Brake Shoes Cleaned",
      "Front Brake Pads Cleaned",
      "Battery Testing with Print-Out",
      "Gear Oil Check-Up",
      "Car Body Wash",
      "Under Chassis Wash",
      "AC Filter Cleaning",
      "Interior Vacuuming (Carpets & Seats)",
      "Steering Oil Check (Up To 100 ML)",
      "Digital Health Check-Up",
      "Wheel Alignment",
      "Wheel Balancing",
      "Nitrogen Air Filling",
      "Radiator Flushing",
      "Engine Room Wash",
      "Door Pad Polish",
      "Dash Board Polish",
      "Tyre Polish",
      "Engine Flushing",
      "Throttle Body Cleaning",
      "Electrical/Lights Checks",
      "Full Body - WAX Polish",
      "Mag-Wheel Deep Cleaning",
      "AC GAS (Up To 600 Gms)",
      "Condensor Cleaning",
      "AC Filter Cleaning",
      "Compressor Oil (Up To 200 ML)",
      "AC Vents Cleaning",
      "AC Leak TEST",
      "Front Shocker Absorber Check",
      "Shocker Mount Check",
      "Jumping Rod Bush Check",
      "Rear Shocker Check",
      "Link Rod Inspection",
      "Tie Rod End Check",
      "Windshield - Shampoo",
      "Engine and Gear Mounting Check-up",
      "Expert Mechanic Advice",
    ],
    pricing: {
      smallCars: "₹12999",
      mediumCars: "₹14999",
      largeCars: "₹21999",
      premiumCars: "₹26999",
    },
  },
];

const Packages = () => {
  const [expandedPackage, setExpandedPackage] = useState(null);

  const togglePackage = (id) => {
    setExpandedPackage(expandedPackage === id ? null : id);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Our Packages</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {packagesData.map((pkg) => (
          <div
            key={pkg.id}
            className="border border-gray-300 shadow-lg p-6 rounded-lg transition-transform transform hover:scale-105"
          >
            <img
              src={pkg.image}
              alt={pkg.title}
              width={10}
              height={10}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">{pkg.title}</h2>
            <p className="text-gray-600">{pkg.description}</p>

            {/* Book Now Button triggers toggle */}
            <div className="mt-4">
              <button
                onClick={() => togglePackage(pkg.id)}
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
              >
                {expandedPackage === pkg.id ? "Hide Details" : "Book Now"}
              </button>
            </div>

            {/* Expanded Section */}
            {expandedPackage === pkg.id && (
              <div className="mt-4">
                <h3 className="text-xl font-semibold">Features:</h3>
                <ul className="list-disc ml-6 mt-2">
                  {pkg.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>

                {/* Pricing Section */}
                <div className="mt-4">
                  <h4 className="text-lg font-semibold">Pricing:</h4>
                  <ul className="ml-6 mt-2">
                    <li>Small Cars (Hatchback): {pkg.pricing.smallCars}</li>
                    <li>Medium Cars (Sedan): {pkg.pricing.mediumCars}</li>
                    <li>Large Cars (SUV): {pkg.pricing.largeCars}</li>
                    <li>
                      Premium Cars (Benz, Audi, BMW): {pkg.pricing.premiumCars}
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Packages;
