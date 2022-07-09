import React, { useContext } from "react";
import authContext from "../../context/auth/authContext";
import "./header.style.scss";

const Header = () => {
  const authInfo = useContext(authContext);
  console.log(authInfo);
  return (
    <div>
      <header className="header-list">
        خوش آمدی
        {authInfo.name}
        <button onClick={() => window.localStorage.removeItem("token")}>
          logout
        </button>
        cart
      </header>
    </div>
  );
};

export default Header;
