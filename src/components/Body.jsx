import ResCard from "./ResCard";
import resList from "../utils/mockData";
const Body = () => {
  return (
    <div className="body">
      <div className="resContainer">
        {resList.map((item) => (
          <ResCard key={item.info.id} cardData={item} />
        ))}
      </div>
    </div>
  );
};

export default Body;
