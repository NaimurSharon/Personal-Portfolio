import React, { useContext } from "react";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import AuthContext from "../Context/Context";
import { Link } from "react-scroll";

export default function HeadingFooter() {
  const { timer } = useContext(AuthContext);
  return (
    <div className="headingFooter">
      <div className="bounding">
        <h3 className={timer ? "" : "boundingElem"}>
          Currently working at Believers Sign
          <ArrowOutwardIcon fontSize="small" />
        </h3>
      </div>
      <div className="bounding">
        <h3 className={timer ? "" : "boundingElem"}>
          PROTOPIE AMBASSADOR
          <ArrowOutwardIcon fontSize="small" />
        </h3>
      </div>
      <div className="bounding">
        <Link
          className={timer ? "btn" : "btn boundingElem"}
          activeClass="active"
          to="scrollToThisDiv"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <ExpandCircleDownIcon fontSize="large" />
        </Link>
      </div>
    </div>
  );
}
