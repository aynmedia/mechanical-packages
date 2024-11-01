import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/header";
import Banner from "./components/banner";
import Title from "./components/title";
import Packages from "./components/packages";
import Miles from "./components/miles";
import Services from "./components/services";
import Work from "./components/work";
import Client from "./components/client";
import Testimonial from "./components/testimonial";
import FAQ from "./components/faq";
import WhyGLCars from "./components/whyglcars";
import Footer from "./components/footer";


export const metadata = {
  title: "Mechanical Packages | Glcars",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <Header />
        <Banner />
        <Title />
        <Packages />
        <Miles />
        <Services />
        <Work />
        <Client />
        <Testimonial />
        <FAQ />
        <WhyGLCars />
        <Footer />
      </body>
    </html>
  );
}
