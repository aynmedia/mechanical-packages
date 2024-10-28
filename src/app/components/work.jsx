import React from "react";
import Image from "next/image"; // Import Image from Next.js for optimized image handling

const howGLCarsWorksData = [
  {
    id: 1,
    title: "Choose Your Ideal Car from Our Fleet",
    description:
      "Explore GL Cars Bangalore's extensive range of vehicles, from hatchbacks to luxury cars, catering to all your needs.",
    logo: "/images/GLCars_Works1_Img.png", // Replace with actual image path
  },
  {
    id: 2,
    title: "Book a Test Drive or Doorstep Service",
    description:
      "Easily schedule a test drive or book car service directly to your doorstep anywhere in Bangalore.",
    logo: "/images/GLCars_Works2_Img.png", // Replace with actual image path
  },
  {
    id: 3,
    title: "Real-Time Service Tracking",
    description:
      "Track your vehicle’s maintenance or repair status in real-time through our online platform, ensuring transparency.",
    logo: "/images/GLCars_Works3_Img.jpg", // Replace with actual image path
  },
  {
    id: 4,
    title: "Experience Exclusive Benefits",
    description:
      "Earn loyalty rewards and gain access to exclusive offers while we take care of your car at GL Cars Bangalore.",
    logo: "/images/GLCars_Work4_Img.jpg", // Replace with actual image path
  },
];

const Work = () => {
  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">How GLcars Works</h1>
      <div className="flex flex-col space-y-8">
        {howGLCarsWorksData.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border border-gray-300 p-4 rounded-lg"
          >
            <div className="flex-shrink-0 w-12">
              <span className="text-2xl font-bold">{item.id}.</span>{" "}
              {/* Display the number */}
            </div>
            <div className="flex-grow text-center mx-4">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="text-gray-600">{item.description}</p>
            </div>
            <div className=" w-52 ">
              <Image
                src={item.logo}
                alt={item.title}
                width={200} // Adjust width as needed
                height={100} // Adjust height as needed
                className="mx-auto" // Center the logo
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
