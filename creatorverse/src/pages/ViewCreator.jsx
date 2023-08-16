import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import supabase from "../config/supabaseClient";

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
    <div className="creator flex justify-center items-center h-screen">
      <div className="content text-center">
        <h3 className="text-xl font-semibold">{creator.name}</h3>
        <p className="mt-2">
          {creator.description}{" "}
          <a
            href={creator.url}
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 hover:underline"
          >
            Check out their socials!
          </a>
        </p>
        <img
          src={creator.image_url}
          className="h-64 w-64 mx-auto mt-4"
          alt={creator.name}
        />
      </div>
      <div className="btns mt-4">
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
  );
};

export default ViewCreator;
