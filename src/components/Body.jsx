import ResCard from "./ResCard";
import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  // const [res, setRes] = useState(resList);
  const [res, setRes] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [searchText, setSearchtext] = useState("");

  console.log("Body rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.888214&lng=75.7611853&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    // optional chaining
    const json = await data.json();
    console.log(
      "Restaurants:",
      json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setRes(
      json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRes(
      json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // if (res.length === 0) {
  //   return <ShimmerUI />;
  // }
  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) {
    return <h1>You are Offline!! Please check your network connection.</h1>;
  }

  // conditional rendering
  return res.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="body">
      <div>
        <input
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchtext(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const filtered = res.filter((item) =>
              item.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRes(filtered);
          }}
        >
          Search
        </button>
        <button
          onClick={() => {
            setRes(res.filter((x) => x.info.avgRating > 4));
          }}
        >
          Top Rated
        </button>
      </div>

      <div className="resContainer">
        {filteredRes.map((item) => (
          <Link to={"/menu/" + item.info.id} key={item.info.id}>
            <ResCard key={item.info.id} cardData={item} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
