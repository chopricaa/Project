import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="h-[80vh] flex items-center justify-between px-[50px] text-gray-300">
        {/* Left section for the text */}
        <h2 className="text-4xl font-bold max-w-lg italic">
          {`DELIVERING THE FUTURE, ECO-FRIENDLY PACKAGE AT A TIME.`.toUpperCase()}
        </h2>

        {/* Right section for the image */}
        <img src="/hero.png" alt="Delivery illustration" className="h-[400px] object-contain" />
      </div>
      <Footer />
    </div>
  );
};

export default Home;

