import React from "react";
import "./home.style.scss";
import mainImage from "./docharkhe.jpg";
import logo from "./docharkhe-logo.jpg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Input } from "antd";
import { useNavigate } from "react-router";
import { Switch } from "antd";

function Home() {
  const navigate = useNavigate();
  function onChange(checked: boolean) {
    console.log(`switch to ${checked}`);
  }
  return (
    <div className="home--container">
      <header>
        <img className="header-logo" src={logo} alt="tripium logo" />
        <ul className="header-list">
          <li>Home</li>
          <li>َAbout Am I</li>
          <li>Shop</li>
          <li>Blog</li>
          <li onClick={() => navigate("/contact-us")}>Contact us</li>
        </ul>

        <Switch
          onChange={onChange}
          checkedChildren="Persian"
          unCheckedChildren="English"
          defaultChecked
        />

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
          <h1 className="main-title">Write a Good Travel Essay</h1>

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
      <footer></footer>
    </div>
  );
}

export default Home;
