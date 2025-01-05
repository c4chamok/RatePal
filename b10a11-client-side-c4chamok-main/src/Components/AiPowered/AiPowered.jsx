import React from "react";
import { FaGlobe, FaComments, FaChartLine } from "react-icons/fa";

const AiPowered = () => {
  return (
    <section className="bg-gray-50 py-10 ">
      <div className="w-[80%] mx-auto px-6 lg:flex lg:items-center lg:space-x-12">
        <div className="lg:w-1/2">
          <div className="relative">
            <img
              src="https://brand24.com/app/uploads/reputation-score.svg"
              alt="Brand reputation score"
              className="w-full h-[500px] rounded-md shadow-md"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg p-4 rounded-lg">
              <p className="text-gray-500 text-sm">Monday, Dec 20, 2021</p>
              <h4 className="font-bold text-gray-700">Brand reputation score</h4>
              <p className="text-green-500 font-semibold mt-1">+3.18</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 mt-10 lg:mt-0">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            AI-powered is not just a buzzword.
          </h2>
          <p className="text-gray-600 mb-8">
            Our AI "definitely gets sarcasm." Get it? We've just used sarcasm to talk about sarcasm. Take that AI. Honestly, though, Artificial Intelligence helps you make sense of the data to save you time.
          </p>
          <ul className="space-y-6">
            <li className="flex items-start space-x-4">
              <FaGlobe className="text-green-500 text-2xl" />
              <div>
                <h4 className="font-semibold text-gray-700">108 languages supported</h4>
                <p className="text-gray-600">Our AI-powered language detection helps you to track mentions that matter.</p>
              </div>
            </li>
            <li className="flex items-start space-x-4">
              <FaComments className="text-green-500 text-2xl" />
              <div>
                <h4 className="font-semibold text-gray-700">Context of Discussion</h4>
                <p className="text-gray-600">We distill numerous brand mentions into an actionable and easily digestible word cloud.</p>
              </div>
            </li>
            <li className="flex items-start space-x-4">
              <FaChartLine className="text-green-500 text-2xl" />
              <div>
                <h4 className="font-semibold text-gray-700">Advanced Sentiment Analysis</h4>
                <p className="text-gray-600">Easy access to positive & negative brand mentions.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AiPowered;
