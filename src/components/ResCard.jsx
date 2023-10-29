import { CDN_URL } from "../utils/constants";

const ResCard = (props) => {
  const { name, cuisines, avgRating, cloudinaryImageId } = props.cardData.info;
  return (
    <div className="card">
      <img className="cardImg" src={CDN_URL + cloudinaryImageId} />

      <h3>{name}</h3>
      <h3>Cuisines: {cuisines.join(", ")}</h3>
      <h3>Rating: {avgRating}/5 stars</h3>
    </div>
  );
};

export default ResCard;
