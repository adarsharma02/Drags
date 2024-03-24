import React from "react";
import { motion } from "framer-motion";
function Card() {
  return (
    <motion.div
      drag
      animate={{ rotate: 360 }}
      transition={{ type: "spring" }}
      className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden"
    >
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Welcome to Our Website</div>
        <p className="text-gray-700 text-base mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit
          amet purus non ipsum consequat pretium. Integer semper nisi et est
          vestibulum, euismod ultricies dolor tristique. Ut consectetur nunc id
          nibh venenatis hendrerit.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Learn More
        </button>
      </div>
      <div className="px-6 py-4 bg-gray-100">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #WebDesign
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #ReactJS
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #TailwindCSS
        </span>
      </div>
    </motion.div>
  );
}

export default Card;
