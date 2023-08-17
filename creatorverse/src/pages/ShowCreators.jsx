import React from "react";

import CustomCard from "../components/Card";

const ShowCreators = ({ creators }) => {
  return (
    <div>
      <h2 className="text-center mb-4 text-2xl font-semibold">All Creators</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {creators.map((creator) => (
          <CustomCard key={creator.id} creator={creator} />
        ))}
      </div>
    </div>
  );
};

export default ShowCreators;
