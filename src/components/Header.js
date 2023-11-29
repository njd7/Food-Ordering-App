import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import CartContext from "../utils/CartContext";
import CartIcon from "./CartIcon";

export const Header = () => {
  const [btn, setBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { name } = useContext(UserContext);
  const { count } = useContext(CartContext);
  console.log("Header rendered");
  return (
    <div className="flex bg-orange-100 w-full justify-around p-2 shadow-lg">
      <Link to="/">
        <img className="w-20" src={LOGO_URL} />
      </Link>
      <ul className="flex items-center">
        <li className="m-2">Network:{onlineStatus ? "🟢" : "🔴"}</li>
        <li className="m-2">
          <Link to="/">Home</Link>
        </li>
        <li className="m-2">
          <Link to="/about">About Us</Link>
        </li>
        <li className="m-2">
          <Link to="/contact">Contact Us</Link>
        </li>
        <li className="m-2">
          <Link to="/grocery">Grocery</Link>
        </li>
        <li className="m-2">
          <button
            className="btn-login"
            onClick={() => {
              btn === "Login" ? setBtn("Logout") : setBtn("Login");
            }}
          >
            {btn}
          </button>
        </li>
        <li className="m-2">User: {name}</li>
        <li className="m-2">
          {count !== 0 && <div className="absolute pl-4 pt-[6px] text-[9px] font-bold text-white"> {count} </div>}
          <CartIcon isEmpty={count == null || count === 0} />
        </li>
      </ul>
    </div>
  );
};

export default Header;
