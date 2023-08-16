import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="text-center">
      <h1 className="mb-8">Creatorverse</h1>
      <div className="mb-8">
        <Link className="btn mr-4" to="/">
          View All Creators
        </Link>
        <Link className="btn" to="/new">
          Add a Creator
        </Link>
      </div>
      <hr className="mt-8" />
    </div>
  );
};

export default Hero;
