import React from "react";
import "./home.style.scss";
import mainImage from "./docharkhe.jpg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Input,Divider } from "antd";
import { useNavigate } from "react-router";
import { Switch } from "antd";
import LanguageSelector from "../components/languageSelector/LanguageSelector";
import translation from "../utils/i18n/i18n";
import { useSelector } from "../utils/hooks";
import { useTranslation } from "react-i18next";
import Logo from "../images/logo.png"
import FirstAuthor from "../images/author-card-jean.jpg"
import SecondtAuthor from "../images/author-card-lucy.jpg"
import ThirdtAuthor from "../images/author-card-mark.jpg"
import FourthAuthor from "../images/author-card-robert.jpg"

function Home() {
  const navigate = useNavigate();
  const {t} = useTranslation();


  const { appLanguage } = useSelector((state:any) => state.appLanguageReducer);

  return (
    <div className="home--container">
      <header>
        <img className="header-logo" src={Logo} alt="hanabijar logo" width="400"  />
        <ul className="header-list">
          <li>Home</li>
          <li>َAbout Am I</li>
          <li>Shop</li>
          <li>Blog</li>

          <button onClick={()=>navigate("/admin-panel")}>Go to Admin Panel</button>
          
          <li onClick={() => navigate("/contact-us")}>Contact us</li>
        </ul>

      
        <LanguageSelector/>

        <Input.Search
          placeholder="input search text"
          allowClear
          // onSearch={onSearch}
          style={{ width: 200 }}
        />

        <button className="header-btn">Register</button>
        <button className="header-btn" onClick={() => navigate("/login-user")}>
          Login
        </button>

        <AiOutlineShoppingCart size={40} />
      </header>

      <main>
        <div className="main-text">
          <h1 className="main-title">{t('general.birthCertificateNumber')}</h1>

          <p className="main-dec">
            Welcome home! Now that you're back from your trip, you'd like to
            share it with others in a travel essay. You're a good writer and a
            good editor of your work, but you've never tried travel writing
            before. <br /> You can also enjoy reading other people's
            travelogues. All Tripium services are <span>free</span> for you
          </p>

          <button className="main-button-1">Free Registration</button>
          <button className="main-button-2">How it works</button>
        </div>

        <img className="main-photo" src={mainImage} alt="Bike photo" />
      </main>
      <div className="author-cards--container">
         <Divider style={{ background:"white"}}>Authors</Divider>
      <div className="author-cards">
        <img src={FirstAuthor} alt="" width={250} height={100} className="author__card"/>
        <img src={SecondtAuthor} alt="" width={250} height={100} className="author__card"/>
        <img src={ThirdtAuthor} alt="" width={250} height={100} className="author__card"/>
        <img src={FourthAuthor} alt="" width={250} height={100} className="author__card"/>
      </div>
     

      </div>
      <footer></footer>
    </div>
  );
}

export default Home;
