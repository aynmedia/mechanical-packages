"use client";

import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {/* Column 1 - About Us */}
        <div className="flex flex-col">
          <img
            src="/images/GLCars.webp"
            alt="GLCars Logo"
            width={200}
            height={80}
            className="w-40 h-auto mb-4"
          />
          <h3 className="text-lg font-semibold">We Are GLCARS</h3>
          <p className="mt-4 text-sm">
            Our experienced technicians deliver top-quality car services in
            Bangalore for all your vehicle’s needs.
          </p>
        </div>

        {/* Column 2 - Office Information */}
        <div className="flex flex-col">
          <h4 className="text-lg font-semibold mb-4">Office</h4>
          <address className="text-sm not-italic">
            #61/2, 4th Cross, 6th Block,
            <br />
            Koramangala, Bengaluru,
            <br />
            Karnataka - 560095
          </address>
          <p className="mt-4 text-sm">
            Email:{" "}
            <a
              href="mailto:service@glcars.in"
              className="text-blue-400 hover:underline"
            >
              service@glcars.in
            </a>
          </p>
          <p className="mt-2 text-sm">
            Phone:{" "}
            <a
              href="tel:+917899233133"
              className="text-blue-400 hover:underline"
            >
              +91 78992 33133
            </a>
            <br />
            <a
              href="tel:+919900522140"
              className="text-blue-400 hover:underline"
            >
              +91 99005 22140
            </a>
          </p>
        </div>

        {/* Column 3 - Social Links and Policies */}
        <div className="flex flex-col">
          <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
          <p className="text-sm">
            <a
              href="https://www.facebook.com/GLcarsFB"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Facebook
            </a>
            {" | "}
            <a
              href="https://www.instagram.com/_glcars/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Instagram
            </a>
          </p>

          <div className="mt-6">
            <h4 className="text-lg font-semibold mb-4">Policies</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/privacy-policy" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/refund-policy" className="hover:underline">
                  Refund Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:underline">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/shipping-policy" className="hover:underline">
                  Shipping Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        <p>© {new Date().getFullYear()} GLCars. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
