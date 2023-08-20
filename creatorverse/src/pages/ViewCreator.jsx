import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import supabase from "../config/supabaseClient";

import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const ViewCreator = () => {
  const [creator, setCreator] = useState([]);
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    const getCreator = async () => {
      const { data, error } = await supabase
        .from("creators")
        .select()
        .eq("id", id);
      if (error) {
        console.error("Error fetching creator:", error);
      } else {
        setCreator(data[0]);
      }
    };
    getCreator();
  }, []);

  const deleteCreator = async (e) => {
    e.preventDefault();

    await supabase.from("creators").delete().eq("id", id);

    window.location = "/";
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-800">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md flex">
        <div className="w-1/2 pr-8">
          <h3 className="text-2xl text-center font-semibold mb-2">
            {creator.name}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            {creator.description}
          </p>
          <div className="flex justify-center space-x-2">
            <a
              href={creator.youtube_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 hover:text-red-600"
            >
              <FaYoutube />
            </a>

            <a
              href={creator.twitter_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600"
            >
              <FaTwitter />
            </a>
            <a
              href={creator.instagram_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-500 hover:text-purple-600"
            >
              <FaInstagram />
            </a>
          </div>
          <div className="flex justify-center mt-4">
            <Link
              to={`/edit/${id}`}
              className="btn bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md mr-2"
            >
              Edit
            </Link>
            <button
              onClick={deleteCreator}
              className="btn bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md"
            >
              Delete
            </button>
          </div>
        </div>
        <div className="w-1/2">
          <img
            src={creator.image_url}
            className="h-64 w-64 mx-auto rounded-md object-cover"
            alt={creator.name}
          />
        </div>
      </div>
    </div>
  );
};

export default ViewCreator;
