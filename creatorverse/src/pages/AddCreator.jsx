import { useState } from "react";
import supabase from "../config/supabaseClient";

const AddCreator = () => {
  const [data, setData] = useState({
    name: "",
    image_url: "",
    description: "",
    url: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(data);
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const addCreator = async (event) => {
    event.preventDefault();

    console.log("Data to be inserted:", data);

    try {
      const { data: insertedData, error } = await supabase
        .from("creators")
        .insert({
          name: data.name,
          image_url: data.image_url,
          description: data.description,
          twitter_url: data.twitter_url,
          instgram_url: data.instgram_url,
          youtube_url: data.youtube_url,
        });

      if (error) {
        console.error("Error adding creator:", error);
      } else {
        console.log("Inserted data:", insertedData);
        window.location = "/";
      }
    } catch (error) {
      console.error("Error adding creator:", error);
    }
  };

  return (
    <div className="bg-gray-800 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h3 className="text-2xl font-semibold mb-6">Add a Creator</h3>
        <form onSubmit={addCreator}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Creator Name
            </label>
            <input
              name="name"
              type="text"
              placeholder="Creator Name"
              onChange={handleChange}
              className="mt-1 px-4 py-2 border rounded-md w-full focus:ring focus:ring-blue-300"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Image URL
            </label>
            <input
              name="image_url"
              type="text"
              placeholder="Image URL"
              onChange={handleChange}
              className="mt-1 px-4 py-2 border rounded-md w-full focus:ring focus:ring-blue-300"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <input
              name="description"
              type="text"
              placeholder="Description"
              onChange={handleChange}
              className="mt-1 px-4 py-2 border rounded-md w-full focus:ring focus:ring-blue-300"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Twitter url
            </label>
            <input
              name="twitter_url"
              type="text"
              placeholder="Twitter url"
              onChange={handleChange}
              className="mt-1 px-4 py-2 border rounded-md w-full focus:ring focus:ring-blue-300"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Instagram url
            </label>
            <input
              name="instagram_url"
              type="text"
              placeholder="Instagram url"
              onChange={handleChange}
              className="mt-1 px-4 py-2 border rounded-md w-full focus:ring focus:ring-blue-300"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Youtube url
            </label>
            <input
              name="youtube_url"
              type="text"
              placeholder="Youtube url"
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

export default AddCreator;
