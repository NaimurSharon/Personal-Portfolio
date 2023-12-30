import React, { useContext } from "react";
import AuthContext from "../Context/Context";
import Textspan from "./Textspan";

export default function Heading() {
  let { timer } = useContext(AuthContext);
  const web = "WEB".split("");
  const developer = "DEVELOPER".split("");

  return (
    <div className="heading">
      <div className="heading-top">
        <div className="bounding">
          <h1 className={timer ? "" : "boundingElem"}>
            {web.map((letter, index) => {
              return <Textspan key={index}>{letter}</Textspan>;
            })}
          </h1>
        </div>
      </div>

      <div className="heading-bottom">
        <div className="bounding">
          <h1 className={timer ? "" : "boundingElem"}>
            {developer.map((letter, index) => {
              return <Textspan key={index}>{letter}</Textspan>;
            })}
          </h1>
        </div>
        <div className="reverseBounding">
          <span className={timer ? "" : "boundingElem"}>
            FULL-STACK DEVELOPER / WORDPRESS EXPERT
          </span>
        </div>
      </div>
    </div>
  );
}
