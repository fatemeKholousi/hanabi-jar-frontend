import React from "react";
import "./card.styles.scss";

const Card = (props: any) => {
  const { image } = props;
  return (
    // <div className="card">
    //   <img
    //     src="https://stackoverflow.com/questions/50433001/how-to-customize-the-image-shown-when-posting-a-url-of-a-website-on-social-media"
    //     alt="Denim Jeans"
    //     style={{ width: "100%" }}
    //   />
    //   <h1>Tailored Jeans</h1>
    //   <p className="price">$19.99</p>
    //   <p>Some text about the jeans..</p>
    //   <p>
    //     <button>Add to Cart</button>
    //   </p>
    // </div>
    <div className="card">
      <div className="card-content">
        <h2 className="card-title">sth awsome</h2>
        <p className="card-body">
          Lorem ipsum dolor sit
          amet.saaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          <a href="/s" className="card--more-button">
            learn more
          </a>
        </p>
      </div>
    </div>
  );
};
export default Card;
