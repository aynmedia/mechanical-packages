import React from "react";
// import BGImage from "..//..//../public/images/Why_GLCars_FAQ.webp"; // Adjust the path to your image

const WhyGLCars = () => {
  return (
    <section
      style={{
        backgroundImage: `url("/images/Why_GLCars_FAQ.webp")`, // Directly reference the image from public folder
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        padding: "4rem 0", // Adjust padding as needed
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

     
      <div className="relative z-10 container mx-auto p-4 text-white">
        <div className="mb-4">
        </div>

        <h1 className="text-3xl text-center font-bold mb-4">
          Why Choose GLCars in Bangalore
        </h1>

        {/* Extensive Fleet Section */}
        <div>
          <p>
            When it comes to renting a car in Bangalore, GLCars is a name you
            can trust. Known for its excellent fleet, customer service, and
            affordable prices, GLCars is the ideal solution for anyone looking
            for a convenient and comfortable ride. Here&apos;s why GLCars stands
            out among the rest:
          </p>
        </div>
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-2">
            1. Extensive Fleet of Vehicles
          </h2>
          <ul className="list-disc pl-5 mb-4">
            <li>
              <strong>Variety of Options:</strong> Choose from economy, luxury,
              and SUVs to suit any occasion.
            </li>
            <li>
              <strong>Latest Models:</strong> Enjoy the comfort of modern
              vehicles equipped with the latest technology.
            </li>
            <li>
              <strong>Well-Maintained:</strong> Every vehicle undergoes regular
              maintenance for safety and comfort.
            </li>
          </ul>
        </section>

        {/* Competitive Pricing Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">
            2. Competitive Pricing
          </h2>
          <ul className="list-disc pl-5 mb-4">
            <li>
              <strong>No Hidden Fees:</strong> Transparent pricing ensures you
              know exactly what you’re paying for.
            </li>
            <li>
              <strong>Affordable Rates:</strong> GLCars offers some of the best
              prices in Bangalore without compromising on quality.
            </li>
            <li>
              <strong>Special Discounts:</strong> Look out for seasonal
              promotions and loyalty rewards for repeat customers.
            </li>
          </ul>
        </section>

        {/* Hassle-Free Booking Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">
            3. Hassle-Free Booking
          </h2>
          <ul className="list-disc pl-5 mb-4">
            <li>
              <strong>24/7 Customer Support:</strong> Our support team is always
              ready to assist you.
            </li>
            <li>
              <strong>Flexible Pickup & Drop-off:</strong> Convenient options to
              pick up and return your car at multiple locations.
            </li>
          </ul>
        </section>

        {/* Safety and Reliability Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">
            4. Safety and Reliability
          </h2>
          <ul className="list-disc pl-5 mb-4">
            <li>
              <strong>Regular Maintenance:</strong> All vehicles are routinely
              inspected for safety and performance.
            </li>
            <li>
              <strong>Comprehensive Insurance:</strong> Rentals include full
              insurance coverage for peace of mind.
            </li>
          </ul>
        </section>

        {/* Exceptional Customer Service Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">
            5. Exceptional Customer Service
          </h2>
          <ul className="list-disc pl-5 mb-4">
            <li>
              <strong>24/7 Support:</strong> Our team is available around the
              clock to assist with any inquiries or issues.
            </li>
            <li>
              <strong>Personalized Assistance:</strong> We cater to individual
              needs, ensuring a tailored experience for every customer.
            </li>
            <li>
              <strong>Positive Reviews:</strong> GLCars is highly rated by
              customers for its professionalism and efficiency.
            </li>
          </ul>
        </section>

        {/* Conclusion Section */}
        <h2 className="text-2xl font-semibold mb-2">Conclusion</h2>
        <p className="mb-4">
          Choosing GLCars in Bangalore means opting for a reliable,
          customer-focused car rental experience that prioritizes safety,
          convenience, and satisfaction. Our extensive fleet, competitive
          pricing, and exceptional service set us apart in the bustling car
          rental market. Whether you&apos;re a local or a visitor, we are
          committed to making your journey memorable and enjoyable. Experience
          the GLCars difference—where quality meets affordability and every ride
          is an adventure waiting to happen. Book with us today and explore
          Bangalore your way!
        </p>
      </div>
    </section>
  );
};

export default WhyGLCars;
