import React, { useState } from "react";
import closeIcon from "../../icons/up.png";
import openIcon from "../../icons/arrow-down-sign-to-navigate.png";
import ResMenuItem from "./ResMenuItem";

export default function ResMenuCategory(props) {
  const item = props.data;
  const { showItems, setShowIndex, index } = props;
  const menuItems = item?.itemCards || item?.categories?.[0]?.itemCards;
  const icon = showItems ? closeIcon : openIcon;
  return (
    <>
      <div
        className="py-2 px-4 my-1 flex justify-between hover:cursor-pointer"
        onClick={() => {
          const newIndex = showItems ? null : index;
          setShowIndex(newIndex);
        }}
      >
        <div className="font-bold text-lg">
          {item.title} ({menuItems.length})
        </div>
        <img className="object-contain h-3" alt="arrow" src={icon} />
      </div>
      {showItems && menuItems && menuItems.map((menuItem, index) => <ResMenuItem key={index} item={menuItem} />)}
      <div className="my-4 border-t-4 border-gray-300"></div>
    </>
  );
}
