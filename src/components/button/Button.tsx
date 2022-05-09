import React from "react";
import "./Button.scss";

const Button = () => {
  return (
    <div>
      <div className="col">
        <div className="bbcontainer-1">
          <div className="btn btn-one">
            <span>BUTTON ONE</span>
          </div>
        </div>

        <div className="bbcontainer-2">
          <div className="btn btn-two">
            <span>Sign up</span>
          </div>
        </div>

        <div className="bbcontainer-3">
          <div className="btn btn-three">
            <span>BUTTON THREE</span>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="bbcontainer-4">
          <div className="btn btn-four">
            <span>BUTTON FOUR</span>
          </div>
        </div>

        <div className="bbcontainer-5">
          <div className="btn btn-five">
            <span>BUTTON FIVE</span>
          </div>
        </div>

        <div className="bbcontainer-6">
          <div className="btn btn-six">
            <span>BUTTON SIX</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Button;
