import React, { useContext } from "react";
import AuthContext from "../Context/Context";

export default function Nav() {
  const { timer } = useContext(AuthContext);
  return (
    <div className="nav">
      <div className="reverseBounding">
        <p className={timer ? "" : "boundingElem"}>Naimur Sharon</p>
      </div>
      <div className="reverseBounding">
        <p className={timer ? "" : "boundingElem"}>Menu+</p>
      </div>
    </div>
  );
}
