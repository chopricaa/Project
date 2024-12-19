/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GoalsPage from "./goals";
import Registration from "./register";

const Home = () => {
  const registrationRef = useRef(null);

  const scrollToRegistration = () => {
    if (registrationRef.current) {
      registrationRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <Navbar onRegisterClick={scrollToRegistration} />
      <div className="h-[80vh] flex items-center justify-between px-[50px] text-white">
        <h2 className="text-4xl font-bold max-w-lg italic">
          {`DELIVERING THE FUTURE, ECO-FRIENDLY PACKAGE AT A TIME.`.toUpperCase()}
        </h2>
        <img src="hero.png" alt="Delivery illustration" className="h-[400px] object-contain" />
      </div>
      <GoalsPage />
      <div ref={registrationRef}>
        <Registration />
      </div>
      <Footer />
    </div>
  );
};

export default Home;

