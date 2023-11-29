import { CDN_URL } from "../utils/constants";
import star from "../../icons/star.png";

const ResCard = (props) => {
  const { name, cuisines, avgRating, cloudinaryImageId, sla, areaName } = props.cardData.info;
  const cuisine = cuisines.join(", ") + "";
  return (
    <div className="mx-4 mb-4 w-[250px] cursor-pointer transition-transform transform-gpu hover:scale-95 drop-shadow-lg">
      <img className="h-[165px] w-full object-cover rounded-[15px] " src={CDN_URL + cloudinaryImageId} />
      <div className="p-2">
        <h3 className="font-bold text-md">{name}</h3>
        <img className="w-4 mr-1 inline-block" alt="star" src={star} />
        <div className="font-bold inline-block text-sm">
          {avgRating} • {sla.slaString}
        </div>
        <div className="text-gray-500 w-[240px]">
          <h3 className="whitespace-nowrap overflow-ellipsis overflow-hidden ">{cuisine}</h3>
          <div>{areaName}</div>
        </div>
      </div>
    </div>
  );
};

export const labelResCard = (ResCard) => {
  return (props) => {
    return (
      <div className="transition-transform transform-gpu hover:scale-95">
        <label className="absolute bg-black text-white font-bold  z-10">High Rated</label>
        <ResCard {...props} />
      </div>
    );
  };
};

export default ResCard;
