import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";

const useResMenu = (resId) => {
  const [resInfo, setResInfo] = useState([]);

  useEffect(() => {
    fetchInfo();
  }, []);

  const fetchInfo = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    setResInfo(json.data.cards);
  };

  return resInfo;
};

export default useResMenu;
