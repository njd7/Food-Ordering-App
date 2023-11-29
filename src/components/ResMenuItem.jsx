import React, { useContext, useState } from "react";
import { CDN_URL, VEG, NON_VEG } from "../utils/constants.js";
import CartContext from "../utils/CartContext.js";

const ResMenuItem = (props) => {
  const menuItem = props.item;
  const { count, setCount } = useContext(CartContext);
  const [itemCount, setItemCount] = useState(0);

  return (
    <>
      <div className="p-4 m-4 flex justify-between border-b border-gray-200">
        <div className="text-left">
          {menuItem?.card?.info?.isVeg ? (
            <img className="h-4" src={VEG} alt="veg" />
          ) : (
            <img className="h-4" alt="nonveg" src={NON_VEG} />
          )}
          <div>{menuItem?.card?.info?.name}</div>
          <div>
            ₹{menuItem?.card?.info?.price / 100 || menuItem?.card?.info?.defaultPrice / 100}
            {menuItem?.card?.info?.offerTags?.[0]?.title && (
              <span className="mx-2 px-2 py-[2px] text-[10px] bg-[#FAE8E3] text-[#DB6742] border-l border-current">
                <span className="font-bold">{menuItem?.card?.info?.offerTags?.[0]?.title} </span>
                {" | "}
                {menuItem?.card?.info?.offerTags?.[0]?.subTitle}
              </span>
            )}
          </div>
          <p className="mr-3 mt-2 text-xs text-gray-500">{menuItem?.card?.info?.description}</p>
        </div>
        <div>
          <div className="w-[120px] h-[96px]">
            <div className="absolute">
              {itemCount === 0 ? (
                <button
                  onClick={() => {
                    setCount(count + 1);
                    setItemCount(1);
                  }}
                  className="ml-8 w-[60px] h-6 bg-white shadow-md rounded-sm text-xs font-bold text-green-600 border-[1px] border-gray-200 absolute"
                >
                  ADD
                </button>
              ) : (
                <div className="flex justify-between items-center pb-[7px] p-[5px] ml-8 w-[60px] h-6 bg-white shadow-md rounded-sm text-xs font-bold text-green-600 border-[1px] border-gray-200 absolute">
                  <button
                    className="font-bold text-lg"
                    onClick={() => {
                      setCount(count - 1);
                      setItemCount(itemCount - 1);
                    }}
                  >
                    -
                  </button>
                  <span>{itemCount}</span>
                  <button
                    className="font-bold text-lg"
                    onClick={() => {
                      setCount(count + 1);
                      setItemCount(itemCount + 1);
                    }}
                  >
                    +
                  </button>
                </div>
              )}
            </div>
            {menuItem?.card?.info?.imageId && (
              <img
                className="h-[96px] w-[120px] rounded-[9px] object-cover"
                alt="food-icon"
                src={CDN_URL + menuItem?.card?.info?.imageId}
              />
            )}
          </div>
        </div>
      </div>
      {/* <hr className="ml-4 my-[20px]" /> */}
    </>
  );
};

export default ResMenuItem;
