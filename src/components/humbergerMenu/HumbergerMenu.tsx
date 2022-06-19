import React, { useState } from "react";
import { ImMenu } from "react-icons/im";
import { AiFillCloseCircle } from "react-icons/ai";
import "./humbergerMenu.style.scss";

const HumbergerMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="humberger-menu">
      {!open ? (
        <ImMenu onClick={() => setOpen(true)} />
      ) : (
        <div>
          <ul>
            <AiFillCloseCircle onClick={() => setOpen(false)} />
            <li>فروشگاه</li>
            <li>بلاگ</li>
            <li>تماس با ما</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HumbergerMenu;
