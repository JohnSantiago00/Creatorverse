import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className="text-center bg-cover bg-top bg-no-repeat bg-fixed h-96 flex flex-col justify-center"
      style={{
        backgroundImage:
          "url(https://cdn.pixabay.com/photo/2016/10/20/18/35/earth-1756274_1280.jpg)",
      }}
    >
      <h1 className="text-4xl font-bold text-white mb-4">Creatorverse</h1>
      <div className="mb-8">
        <Link
          className="inline-block bg-white text-blue-500 hover:text-blue-700 px-4 py-2 rounded-full mr-4"
          to="/"
        >
          View All Creators
        </Link>
        <Link
          className="inline-block bg-blue-500 text-white hover:bg-blue-700 px-4 py-2 rounded-full"
          to="/new"
        >
          Add a Creator
        </Link>
      </div>
    </div>
  );
};

export default Hero;
