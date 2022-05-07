import React from "react";
import "./withRandomTheme.scss";

function withRandomTheme(WrappedComponent: any) {
  const colours = ["pink", "yellow", "blue"];
  const randomTheme = Math.floor(Math.random() * 2);
  const className = `${colours[randomTheme]}--happy-hues`;

  return function result(props: any) {
    return (
      <div className={className}>
        <WrappedComponent {...props} />
      </div>
    );
  };
}

export default withRandomTheme;
