import React, { useContext } from "react";
import AuthContext from "../Context/Context";

export default function BottomHeading() {
  const { timer } = useContext(AuthContext);
  return (
    <div className="bottomHeading">
      <div className="bounding">
        <h3 className={timer ? "" : "boundingElem"}>available for Freelance</h3>
      </div>
      <div className="bounding">
        <h3 className={timer ? "" : "boundingElem"}>Work</h3>
      </div>
    </div>
  );
}
