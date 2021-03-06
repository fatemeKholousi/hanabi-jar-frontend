import { Button } from "antd";
import React, { useContext } from "react";
import { useNavigate } from "react-router";
import HeaderImage from "../../assets/images/howel.jpg";
import authContext from "../../context/auth/authContext";
import HumbergerMenu from "../humbergerMenu/HumbergerMenu";
import "./header.style.scss";

const Header = () => {
  const navigate = useNavigate();
  const authInfo = useContext(authContext);
  console.log(authInfo);
  return (
    <>
      <HumbergerMenu />

      <header className="header-list">
        <h1 className="header-list--title">Hanabi Jar</h1>
        <div className="header-list--items-list">
          <p className="header-list--items-list__item">Home</p>
          <p className="header-list--items-list__item">َAbout Us</p>
          <p className="header-list--items-list__item">Shop</p>
          <p className="header-list--items-list__item">Blog</p>
          <p
            className="header-list--items-list__item"
            role="presentation"
            onClick={() => navigate("/contact-us")}
          >
            Contact us
          </p>
        </div>
        <div className="header-list--button-row">
          <Button
            onClick={() => navigate("/login")}
            type="primary"
            className="header-list--button-row__signin"
          >
            Login
          </Button>
          <Button
            onClick={() => navigate("/admin-panel")}
            type="primary"
            className="header-list--button-row__signup"
          >
            Sign Up
          </Button>
        </div>
      </header>
      <div>
        <img src={HeaderImage} alt="" />
      </div>
    </>
  );
};

export default Header;
