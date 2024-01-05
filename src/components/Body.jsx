import ResCard, { labelResCard } from "./ResCard";
import { useContext, useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = (props) => {
  const [res, setRes] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [searchText, setSearchtext] = useState("");
  const { name, setUserName } = useContext(UserContext);

  const ResCardLabelled = labelResCard(ResCard);

  console.log("Body rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.4705449&lng=94.91246249999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    // optional chaining
    const json = await data.json();
    console.log("Restaurants:", json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    setRes(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRes(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) {
    return <h1>You are Offline!! Please check your network connection.</h1>;
  }

  // conditional rendering
  return (
    <div className="w-10/12 mx-auto">
      <div className="text-center m-6 flex justify-between">
        <input
          className="p-1 px-2 border border-gray-300 outline-1 outline-gray-300 w-6/12 rounded-sm shadow-md"
          type="text"
          value={searchText}
          placeholder="Search for Restaurants and food"
          onChange={(e) => {
            setSearchtext(e.target.value);

            const filtered = res.filter((item) => item.info.name.toLowerCase().includes(searchText.toLowerCase()));
            setFilteredRes(filtered);
          }}
        />
        {/* <button
          onClick={() => {
            const filtered = res.filter((item) => item.info.name.toLowerCase().includes(searchText.toLowerCase()));
            setFilteredRes(filtered);
          }}
        >
          🔍
        </button> */}
        {/* <button
          onClick={() => {
            setFilteredRes(res.filter((x) => x.info.avgRating > 4));
          }}
        >
          Top Rated
        </button> */}

        <input
          className="border border-gray-500 p-2"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          value={name}
        />
      </div>

      {res?.length === 0 ? (
        <ShimmerUI />
      ) : (
        <div className="w-[90%] m-auto flex flex-wrap">
          {filteredRes?.map((item) => (
            <Link to={"/menu/" + item.info.id} key={item.info.id}>
              {item.info.avgRating >= 4 ? (
                <ResCardLabelled key={item.info.id} cardData={item} />
              ) : (
                <ResCard key={item.info.id} cardData={item} />
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
