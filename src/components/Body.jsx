import ResCard from "./ResCard";
import resList from "../utils/mockData";
import { useState } from "react";
const Body = () => {
  const [res, setRes] = useState(resList);
  return (
    <div className="body">
      <button
        onClick={() => {
          setRes(res.filter((x) => x.info.avgRating > 4.3));
        }}
      >
        Top Rated
      </button>
      <div className="resContainer">
        {res.map((item) => (
          <ResCard key={item.info.id} cardData={item} />
        ))}
      </div>
    </div>
  );
};

export default Body;
