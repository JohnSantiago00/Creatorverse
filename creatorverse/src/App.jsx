import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import supabase from "./config/supabaseClient";
import ShowCreators from "./pages/ShowCreators";

function App() {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    const getCreators = async () => {
      const { data, error } = await supabase.from("creators").select();
      setCreators(data);
    };
    getCreators();
  }, []);

  return (
    <div className="bg-gray-800 min-h-screen flex items-center justify-center">
      <div className="max-w-xl w-full p-4">
        <div className="bg-white p-4 rounded-lg shadow">
          {creators.length > 0 ? (
            <ShowCreators creators={creators} />
          ) : (
            <p className="text-center">Add a creator to get started delete this after</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
