import React from "react";

export default function Personal() {
  const phoneNumber = "01628269707";
  const message = "Hello!"; // Replace with your desired message

  // Constructing the WhatsApp URL
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  return (
    <div className="personal" id="scrollToThisDiv">
      <img src="images/naimursharon.jpg" alt="" />

      <div className="textAbout">
        <h5>(ABOUT ME)</h5>
        <p>
          From interaction design to scaleable design systems, single-page apps
          to something more experimental with WebGL. I help awesome people to
          build ambitious yet accessible web projects -{" "}
          <strong>THE WILDER, THE BETTER. </strong>
          <br /> As an expert on React Js, Django and Wordpress, my design
          philosophy is simple: make it visually appealing, functional, and make
          users think,
          <strong>"Damn, THEY ARE BIG!".</strong> <br />
        </p>
        <a href={url} target="_blank" rel="noopener noreferrer">
          Let's Talk
        </a>
      </div>
    </div>
  );
}
