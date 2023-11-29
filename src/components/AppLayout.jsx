import { Header } from "./Header";
import { Outlet } from "react-router-dom";
import UserContext from "../utils/UserContext.js";
import { useState } from "react";
import CartContext from "../utils/CartContext.js";

const AppLayout = () => {
  const [userName, setUserName] = useState("Nayan");
  const [count, setCount] = useState(null);
  // setUserName("Nayan");
  return (
    <UserContext.Provider value={{ name: userName, setUserName }}>
      <CartContext.Provider value={{ count: count, setCount }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </CartContext.Provider>
    </UserContext.Provider>
  );
};

export default AppLayout;
