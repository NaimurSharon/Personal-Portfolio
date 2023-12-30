import { useContext, useEffect } from "react";
import "./App.css";
import Heading from "./components/Heading";
import HeadingFooter from "./components/HeadingFooter";
import Nav from "./components/Nav";
import Personal from "./components/Personal";
import CallMadeIcon from "@mui/icons-material/CallMade";
import LocomotiveScroll from "locomotive-scroll";
import AuthContext from "./Context/Context";
import Showcase from "./components/Showcase";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({ smooth: true });
  }, []);

  let { position, timer, circleScale } = useContext(AuthContext);

  return (
    <div className="App" id="app">
      <div
        className="minicircle"
        style={{
          transform: `translate(${position.x}px, ${position.y}px) scale(${circleScale.x},${circleScale.y})`,
        }}
      ></div>
      <div className="home">
        <main className="main">
          <Nav />
          <div className="landscape">
            <Heading />
            <div className="clouding">
              <img
                className={timer ? "white-cloud" : " white-cloud cloudingElem"}
                src="images/white cloud.svg"
                alt=""
              />
            </div>
            <div className="clouding">
              <img
                className={
                  timer ? "black-cloud-2" : " black-cloud-2 cloudingElem2"
                }
                src="images/black cloud.svg"
                alt=""
              />
            </div>
            <div className="clouding">
              <img
                className={timer ? "moon" : "moon mooningElem"}
                src="images/moon.svg"
                alt=""
              />
            </div>
            <div className="clouding">
              <img
                className={
                  timer ? "white-cloud-2" : "white-cloud-2 cloudingElem2"
                }
                src="images/white cloud.svg"
                alt=""
              />
            </div>
            <div className="clouding">
              <img
                className={timer ? "black-cloud" : "black-cloud cloudingElem"}
                src="images/black cloud.svg"
                alt=""
              />
            </div>
          </div>

          <div className="bottomHeading">
            <div className="bounding" style={{ float: "right" }}>
              <h3 className={timer ? "" : "boundingElem"}>
                available for Freelance
              </h3>
            </div>
          </div>
          {/* <BottomHeading /> */}
          <HeadingFooter />
        </main>

        <Showcase />

        <div className="about ">
          <Personal />
        </div>

        <div class="follow">
          <p style={{ opacity: "0.6" }}>(FORGOT TO MENTION)</p>
          <a href="https://x.com/Naimur_Sharon" target="blank">
            Follow Me on Twitter
            <CallMadeIcon fontSize="small" />
          </a>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default App;
