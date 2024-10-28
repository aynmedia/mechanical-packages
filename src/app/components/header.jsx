import React from "react";
import Image from "next/image";
import "./styles.css";
const Header = () => {
  
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center sticky top-0 left-0  z-50">
      {/* Logo */}
      <div className="flex items-center cursor-pointer">
        <Image
          src="/images/GLCars.webp"
          alt="Logo"
          width={100}
          height={40}
          className="mr-3"
        />
        <div className="">
          <span className="text-xl font-bold">GL Cars</span>
        </div>
      </div>

      {/* Email ID */}
      <div>
        <a href="mailto:service@glcars.in" className="text-sm hover:underline">
          service@glcars.in
        </a>
      </div>
    </header>
  );
};

export default Header;
