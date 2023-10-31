import { URL } from "../utils/constants";
import { useState } from "react";

export const Header = () => {
  const [btn, setBtn] = useState("Login");
  console.log("Header rendered");
  return (
    <div className="header">
      <div className="navbar">
        <img className="logo" src={URL} />
        <ul className="list">
          <li>About Us</li>
          <li>Contact Us</li>
          <li>
            <button
              className="btn-login"
              onClick={() => {
                btn === "Login" ? setBtn("Logout") : setBtn("Login");
              }}
            >
              {btn}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
