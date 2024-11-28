import React, { useContext } from "react";
import AuthContext from "../Context/Context";

export default function BottomHeading() {
  const { timer } = useContext(AuthContext);
  return (
    <div className="bottomHeading">
      <div className="bounding">
        <a
          href="https://www.upwork.com/services/product/development-it-website-development-as-full-stack-developer-and-design-website-1860678120887608063?ref=fl_profile"
          target="blank"
          className={timer ? "" : "boundingElem"}
        >
          available for Freelance
        </a>
      </div>
      <div className="bounding">
        <h3 className={timer ? "" : "boundingElem"}>Work</h3>
      </div>
    </div>
  );
}
