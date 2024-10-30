import React from "react";

const Work = () => {
  return (
    <section
      style={{
        backgroundImage: `url("/images/Work_BG.webp")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        padding: "4rem 0",
      }}
    >
      {/* Overlay to darken the image for better text visibility */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.75)", // Adjust opacity for overlay
        }}
      ></div>
      <div className="relative z-10 max-w-7xl mx-auto py-8 px-4">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-center mb-8">
            How GLcars Works
          </h1>
          <h2 className="text-4xl font-bold mb-6">Our Expertise Lies In</h2>
          <p className="text-lg text-gray-300 mb-4">
            Our expertise lies in professional treatments to keep your vehicle
            looking and running its best.
          </p>
          <p className="text-lg text-gray-300 mb-4">
            Our commitment to excellence is unwavering as we deliver the premium
            car detailing services in Bangalore without compromise. Trust our
            skilled technicians to work their magic when you bring your vehicle
            to us.
          </p>
          <p className="text-lg text-gray-300 mb-4">
            We focus on every detail, carefully removing imperfections to reveal
            a stunning transformation. Prepare to be amazed by the results of
            the best car detailing in Bangalore.
          </p>
          <p className="text-lg text-gray-300">
            Prepare to be amazed by the results of our car detailing services.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Work;
