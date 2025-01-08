import React from "react";
import { FaGooglePlay } from "react-icons/fa";
import Lottie from "lottie-react";
import googlePlayAnimation from "../../assets/Animation - 1735219587602.json";

const DownloadApp = () => {
  return (
    <section className="bg-gray-100 flex justify-center">
      <div className="w-[80%] flex flex-col md:flex-row items-center gap-8">
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Download the <span className="text-indigo-600">RatePal</span> App
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            Experience the best way to review and explore services on the go. 
            Available now on Google Play.
          </p>
          <a
            href="https://play.google.com"
            className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition"
          >
            <FaGooglePlay size={20} />
            Get it on Google Play
          </a>
        </div>
        <div className="w-[35%] h-[400px]">
          <Lottie style={{height: "400px"}} animationData={googlePlayAnimation} loop={true} />
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
