import { URL } from "../utils/constants";

export const Header = () => {
  return (
    <div className="header">
      <div className="navbar">
        <img className="logo" src={URL} />
        <ul className="list">
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
