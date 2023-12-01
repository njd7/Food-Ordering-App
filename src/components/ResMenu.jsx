import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import ResMenuCategory from "./ResMenuCategory";
import ShimmerMenuUI from "./ShimmerMenuUI";

const ResMenu = () => {
  const { resId } = useParams();

  const [resInfo, setResInfo] = useState([]);
  const [showIndex, setShowIndex] = useState(null);

  useEffect(() => {
    fetchInfo();
  }, []);

  const fetchInfo = async () => {
    console.log("Res ID->  " + resId);
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    setResInfo(json.data.cards);
  };

  if (resInfo.length === 0) {
    return <ShimmerMenuUI />;
  }

  const { name, locality, cuisines, costForTwoMessage } = resInfo[0]?.card?.card?.info;

  console.log("info " + name, locality, cuisines, costForTwoMessage);

  const itemList = resInfo[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
  const categoryTitle = resInfo[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  console.log("items: " + itemList);
  return (
    <div className="text-center">
      <h1 className="font-bold text-2xl mt-6">{name}</h1>
      <p className="font-bold text-lg my-3">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <div className="flex flex-col w-6/12 m-auto">
        {categoryTitle
          .filter((item) => {
            return item?.card?.card["@type"].includes("ItemCategory");
          })
          .map((item, index) => (
            <ResMenuCategory
              setShowIndex={setShowIndex}
              showItems={index === showIndex}
              key={index}
              data={item?.card?.card}
              index={index}
            />
          ))}
      </div>
    </div>
  );
};

export default ResMenu;
