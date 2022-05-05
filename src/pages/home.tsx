import React from "react";
import "./home.style.scss";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Input, Divider } from "antd";
import { useNavigate } from "react-router";

import { useTranslation } from "react-i18next";
import LanguageSelector from "../components/languageSelector/LanguageSelector";
import { useSelector } from "../utils/hooks";
import Logo from "../assets/images/logo.png";
import FirstAuthor from "../assets/images/author-card-jean.jpg";
import SecondtAuthor from "../assets/images/author-card-lucy.jpg";
import ThirdtAuthor from "../assets/images/author-card-mark.jpg";
import FourthAuthor from "../assets/images/author-card-robert.jpg";

const Home = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { appLanguage } = useSelector((state: any) => state.appLanguageReducer);

  return (
    <div className="home--container">
      <header>
        <img
          className="header-logo"
          src={Logo}
          alt="hanabijar logo"
          width="400"
        />
        <ul className="header-list">
          <li>Home</li>
          <li>َAbout Am I</li>
          <li>Shop</li>
          <li>Blog</li>

          <button onClick={() => navigate("/admin-panel")}>
            Go to Admin Panel
          </button>

          <li role="presentation" onClick={() => navigate("/contact-us")}>
            Contact us
          </li>
        </ul>

        <LanguageSelector />

        <Input.Search
          placeholder="input search text"
          allowClear
          // onSearch={onSearch}
          style={{ width: 200 }}
        />

        <button type="submit" className="header-btn">
          Register
        </button>

        <button className="header-btn" onClick={() => navigate("/login-user")}>
          Login
        </button>

        <AiOutlineShoppingCart size={40} />
      </header>

      <main>
        <div className="main-text">
          <h1 className="main-title">{t("home.home")}</h1>

          <p className="main-dec">سششسشسشسشسشسشس</p>

          <button className="main-button-1">Free Registration</button>
          <button className="main-button-2">How it works</button>
        </div>
      </main>
      <div className="author-cards--container">
        <Divider style={{ background: "white" }}>Authors</Divider>
        <div className="author-cards">
          <img
            src={FirstAuthor}
            alt=""
            width={250}
            height={100}
            className="author__card"
          />
          <img
            src={SecondtAuthor}
            alt=""
            width={250}
            height={100}
            className="author__card"
          />
          <img
            src={ThirdtAuthor}
            alt=""
            width={250}
            height={100}
            className="author__card"
          />
          <img
            src={FourthAuthor}
            alt=""
            width={250}
            height={100}
            className="author__card"
          />
        </div>
      </div>
      <footer />
    </div>
  );
};

export default Home;
