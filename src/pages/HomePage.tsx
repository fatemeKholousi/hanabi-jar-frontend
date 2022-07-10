import React from "react";
import "./home.style.scss";
import { GiFrostfire } from "react-icons/gi";

import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import Card from "../components/card/Card";
import { useSelector } from "../utils/hooks";
import Header from "../components/headers/Header";

const Home = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { appLanguage } = useSelector((state: any) => state.appLanguageReducer);

  return (
    <div className="home--container">
      <Header />
      {/* <LanguageSelector /> */}
      <section id="hanabi-jar-story">
        <GiFrostfire size={100} color="#3f87db" />

        <h1>Hanabi Jar Story</h1>
        <p>
          روزی بود روزگاری، دختری بود که هیچ دوستی نداشت و هر روز شیشه های
          مربایی که مادرش داشت را میگرفت و درونشان را با وسایلی که که برای دوست
          بند انگشتی خیالیش داشت پر میکرد، یکی از شیشه ها پر بود از رنگین کمان،
          دیگری پر بود از رایحه گل هایی که در اولین روز بهار شکوفه میدهند، اما
          شیشه مربایی که دختر قصه ما دوست داشت پر بود از آتش های ریزی که
          میرقصیدند.
        </p>
      </section>
      <main>
        {" "}
        card
        <Card />
      </main>
      {/* <div className="main-text">
          <h1 className="main-title">{t("home.home")}</h1>

          <p className="main-dec">سششسشسشسشسشسشس</p>

          <button className="main-button-1">Free Registration</button>
          <button className="main-button-2">How it works</button>
        </div>
      </main> */}
      {/* <div className="author-cards--container">
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
      </div> */}
      <footer />
    </div>
  );
};

export default Home;
