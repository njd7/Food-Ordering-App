import { useParams } from "react-router-dom";
import useResMenu from "../utils/useResMenu";

const ResMenu = () => {
  const { resId } = useParams();
  const resInfo = useResMenu(resId);

  if (resInfo.length === 0) {
    return <h1>Dummy Data</h1>;
  }

  const { name, locality, cuisines, costForTwoMessage } =
    resInfo[0]?.card?.card?.info;

  const itemList =
    resInfo[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards;
  return (
    <div>
      <h1>{name}</h1>
      <small>{locality}</small>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemList.map((item) => (
          <li key={item.card.info.id} className="menuItem">
            {item.card.info.name} - Rs. {item.card.info.price / 100}/-
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResMenu;
