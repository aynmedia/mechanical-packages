import React from "react";

const Miles = () => {
  return (
    <section
      style={{
        backgroundImage: `url("/images/GLCars_Miles_Img.webp")`, // Directly reference the image from public folder
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        padding: "4rem 0", // Adjust padding as needed
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative w-full h-[500px] bg-cover bg-center">
        {/* Overlay to darken the image for better text visibility */}

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
    </section>
  );
};

export default Miles;
