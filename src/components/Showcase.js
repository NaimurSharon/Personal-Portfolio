import React, { useContext, useEffect } from "react";
import AuthContext from "../Context/Context";
import gsap from "gsap";

export default function Showcase() {
  let { timer } = useContext(AuthContext);

  //   const elems = document.querySelectorAll(".elem");

  //   elems.forEach((elem) => {
  //     const image = elem.querySelector("img");

  //     elem.addEventListener("mousemove", (event) => {
  //       const rect = elem.getBoundingClientRect();
  //       const offsetX = event.clientX - rect.left - image.width / 2; // Adjust to center the image
  //       const offsetY = event.clientY - rect.top - image.height / 2; // Adjust to center the image

  //       gsap.to(image, {
  //         opacity: 1,
  //         duration: 0.3,
  //         ease: Power1.easeInOut,
  //         x: offsetX,
  //         y: offsetY,
  //       });
  //     });

  //     elem.addEventListener("mouseleave", () => {
  //       gsap.to(image, {
  //         opacity: 0,
  //         duration: 0.3,
  //       });
  //     });
  //   });
  // }, []);

  useEffect(() => {
    document.querySelectorAll(".elem").forEach((elem) => {
      let rotate = 0;
      let diffRoot = 0;

      elem.addEventListener("mouseleave", (dets) => {
        gsap.to(elem.querySelector("img"), {
          opacity: 0,
          // ease: "power1",
        });
      });
      elem.addEventListener("mousemove", (dets) => {
        diffRoot = dets.clientX - rotate;
        rotate = dets.clientX;
        gsap.to(elem.querySelector("img"), {
          opacity: 1,
          ease: "power1",
          top: dets.clientY - elem.getBoundingClientRect().top,
          left: dets.clientX,
          rotate: gsap.utils.clamp(-20, 20, diffRoot),
        });
      });
    });
  }, []);
  return (
    <div className="secondMain">
      <div className="elem">
        <img src="/images/chat-promo.png" alt="" />
        <div className="bounding">
          <h1 className={timer ? "" : "boundingElem"}>Chat App</h1>
        </div>
        <div className="bounding">
          <h3>2022</h3>
        </div>
      </div>
      <div className="elem">
        <img src="/images/believers sign.png" alt="" />
        <div className="bounding">
          <h1 className={timer ? "" : "boundingElem"}>Believers' Sign</h1>
        </div>
        <div className="bounding">
          <h3 className={timer ? "" : "boundingElem"}>2022</h3>
        </div>
      </div>
      <div className="elem">
        <img src="/images/VELTRIX.jpg" alt="" />
        <div className="bounding">
          <h1 className={timer ? "" : "boundingElem"}>dashboard</h1>
        </div>
        <div className="bounding">
          <h3 className={timer ? "" : "boundingElem"}>2022</h3>
        </div>
      </div>
      <div className="elem lastElem">
        <img src="/images/cheap-journey.jpg" alt="" />
        <div className="bounding">
          <h1 className={timer ? "" : "boundingElem"}>ai Image generator</h1>
        </div>
        <div className="bounding">
          <h3 className={timer ? "" : "boundingElem"}>2022</h3>
        </div>
      </div>
    </div>
  );
}
