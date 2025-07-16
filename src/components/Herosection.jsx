
import { Link } from "react-router-dom";
import heroImage from "../assets/hero.jpg";

const HeroSection = () => {
  return (
    <section className="my-20 py-10">
      <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-2xl md:text-5xl font-extrabold text-gray-800 dark:text-gray-200 leading-tight mb-4 font-aldrich">
            Discover Inspiring Stories<br />and Powerful Insights
          </h1>
          <p className="text-sm md:text-lg text-gray-600 dark:text-gray-400 mb-6">
            Read from a collection of thoughtful blogs across tech, lifestyle, and creativity — written to spark ideas and fuel your curiosity.
          </p>
          <Link
            to="/all-posts"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white md:text-lg text-sm font-medium  px-6 py-3 rounded-xl transition duration-300"
          >
            Explore Blogs
          </Link>
        </div>

        {/* Optional illustration or image */}
        <div className="flex-1">
          <img
            src={heroImage}
            alt="Hero illustration"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
