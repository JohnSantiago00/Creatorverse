import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import supabase from "../config/supabaseClient";

const EditCreator = () => {
  const [creator, setCreator] = useState({});
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
        // console.log('Fetched creator:', data[0]); // Log the fetched data
      }
    };
    getCreator();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(creator);
    setCreator((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const editCreator = async (event) => {
    event.preventDefault();

    await supabase
      .from("creators")
      .update({
        name: creator.name,
        image_url: creator.image_url,
        description: creator.description,
        twitter_url: creator.twitter_url,
        instagram_url: creator.instagram_url,
        youtube_url: creator.youtube_url,
      })
      .eq("id", id);

    window.location = "/";
  };
  return (
    <div className="bg-gray-800 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h3 className="text-2xl font-semibold mb-6">
          Edit {creator.name}'s Information
        </h3>
        <form onSubmit={editCreator}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Edit Creator Name
            </label>
            <input
              name="name"
              type="text"
              placeholder="Creator Name"
              value={creator.name}
              onChange={handleChange}
              className="mt-1 px-4 py-2 border rounded-md w-full focus:ring focus:ring-blue-300"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Edit Image URL
            </label>
            <input
              name="image_url"
              type="text"
              placeholder="Image/Video URL"
              value={creator.image_url}
              onChange={handleChange}
              className="mt-1 px-4 py-2 border rounded-md w-full focus:ring focus:ring-blue-300"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Edit Description
            </label>
            <input
              name="description"
              type="text"
              placeholder="Description"
              value={creator.description}
              onChange={handleChange}
              className="mt-1 px-4 py-2 border rounded-md w-full focus:ring focus:ring-blue-300"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Edit Twitter url
            </label>
            <input
              name="twitter_url"
              type="text"
              placeholder="Twitter_url"
              value={creator.twitter_url}
              onChange={handleChange}
              className="mt-1 px-4 py-2 border rounded-md w-full focus:ring focus:ring-blue-300"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Edit Instagram url
            </label>
            <input
              name="instagram_url"
              type="text"
              placeholder="Instagram URL"
              value={creator.instagram_url}
              onChange={handleChange}
              className="mt-1 px-4 py-2 border rounded-md w-full focus:ring focus:ring-blue-300"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Edit Youtube url
            </label>
            <input
              name="youtube_url"
              type="text"
              placeholder="Youtube URL"
              value={creator.youtube_url}
              onChange={handleChange}
              className="mt-1 px-4 py-2 border rounded-md w-full focus:ring focus:ring-blue-300"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditCreator;
