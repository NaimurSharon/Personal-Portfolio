import { gsap } from "gsap";

import React, { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [circleScale, setCircleScale] = useState({ x: 1, y: 1 });
  const [timer, setTimer] = useState(false);

  let xPrev = 0;
  let yPrev = 0;

  const updatePosition = (e) => {
    setPosition({ x: e.clientX, y: e.clientY + window.scrollY });

    setCircleScale({
      x: gsap.utils.clamp(0.8, 1.2, e.clientX - xPrev),
      y: gsap.utils.clamp(0.8, 1.2, e.clientY - yPrev),
    });
    xPrev = e.clientX;
    yPrev = e.clientY;
  };

  useEffect(() => {
    clearTimeout(timeout);
    window.addEventListener("mousemove", updatePosition);

    var timeout = setInterval(() => {
      setCircleScale({ x: 1, y: 1 });
    }, 1000);

    if (!timer) {
      setTimeout(() => {
        setTimer(true);
      }, 1000); // Remove the class after 2000 milliseconds (2 seconds)
    }

    return () => {
      window.removeEventListener("mousemove", updatePosition);
    };
  }, []);

  // useEffect(() => {
  //   // Replace 'myDiv' with your div's ID

  // }, []);

  return (
    <AuthContext.Provider
      value={{
        position: position,
        timer: timer,
        circleScale: circleScale,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
