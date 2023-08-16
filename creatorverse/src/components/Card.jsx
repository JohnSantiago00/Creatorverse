import React from "react";
import { FaInfoCircle, FaPencilAlt, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Card = ({ creator }) => {
  return (
    <div className="card bg-gray-100 p-4 rounded-md shadow-md max-w-xs mx-auto">
      <h3 className="text-xl font-semibold">{creator.name}</h3>
      <div
        className="bg-cover bg-center h-32 rounded-md"
        style={{ backgroundImage: `url(${creator.image_url})` }}
      ></div>
      <div className="icons mt-2 flex justify-end space-x-2">
        <Link to={`/${creator.id}`} className="text-blue-500 hover:underline">
          <FaInfoCircle />
        </Link>
        <Link
          to={`/edit/${creator.id}`}
          className="text-green-500 hover:underline"
        >
          <FaPencilAlt />
        </Link>
        <a
          href={creator.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-500 hover:underline"
        >
          <FaYoutube />
        </a>
      </div>
      <p className="mt-2 text-gray-600">{creator.description}</p>
    </div>
  );
};

export default Card;
