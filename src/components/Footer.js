import React, { useEffect, useState } from "react";

export default function Footer() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every second

    return () => clearInterval(timer); // Cleanup the interval on component unmount
  }, []);
  return (
    <section class="footer">
      <div class="footerLeft">
        <p>{currentYear}©</p>
        <p>
          {currentTime.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}{" "}
          EST
        </p>
      </div>
      <div class="footerRight">
        <a
          href="https://www.linkedin.com/in/naimur-sharon-00344529b/"
          target="blank"
        >
          Linkedin
        </a>
        <a href="https://www.facebook.com/naimur.saron" target="blank">
          Facebook
        </a>
        <a href="https://www.instagram.com/naimursharon/" target="blank">
          Instagram
        </a>
      </div>
    </section>
  );
}
