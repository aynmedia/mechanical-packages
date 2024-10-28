import React from "react";

const Miles = () => {
  return (
    <div
      className="relative w-full h-[500px] bg-cover bg-center"
      style={{
        backgroundImage: `url("/images/GlCars_Miles_Section_Img.webp")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
      }}
    >
      {/* Overlay to darken the image for better text visibility */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content inside the banner */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl font-bold ">
          Miles Section for Mechanical Packages
        </h1>
        <p className="mt-4 text-lg md:text-xl lg:text-2xl">
          Explore the best mechanical packages designed to improve efficiency,
          performance, and reliability.
        </p>
        <a href="#contact-form">
          <button className="mt-6 px-6 py-2 bg-blue-500 rounded-full text-white hover:bg-blue-600 transition duration-300 ease-in-out">
            Learn More
          </button>
        </a>
      </div>
    </div>
  );
};

export default Miles;
