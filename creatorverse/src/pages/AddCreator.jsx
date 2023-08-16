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
          url: data.url,
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
    <div>
      <h3>Add a Creator</h3>
      <form onSubmit={addCreator}>
        <input
          name="name"
          type=" text"
          placeholder="Creator Name"
          onChange={handleChange}
        ></input>
        <input
          name="image_url"
          type="text"
          placeholder="Image/Video URL"
          onChange={handleChange}
        ></input>
        <input
          name="description"
          type="text"
          placeholder="Description"
          onChange={handleChange}
        ></input>
        <input
          name="url"
          type="text"
          placeholder="Social Media URL"
          onChange={handleChange}
        ></input>
        <input className="btn" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AddCreator;
