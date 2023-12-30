import { motion, useAnimationControls } from "framer-motion";
import React, { useState } from "react";

export default function Textspan({ children }) {
  const controls = useAnimationControls();

  const [isPlaying, setIsPlaying] = useState(false);
  const rubberBand = () => {
    controls.start({
      transform: [
        "scale3d(1,1,1)",
        "scale3d(1.4,0.55,1)",
        "scale3d(0.75,1.25,1)",
        "scale3d(1.25,0.85,1)",
        "scale3d(0.9,1.05,1)",
        "scale3d(1,1,1)",
      ],
      transition: {
        duration: 0.8, // Adjust the duration as needed
        ease: "easeInOut", // Adjust the easing function as needed
      },
    });
    setIsPlaying(true);
  };
  return (
    <motion.span
      style={{
        display: "inline-block",
        backgroundColor: "transparent",
        color: isPlaying ? "#ff4d5a" : "#fff",
        transition: "0.1s all",
        opacity: isPlaying ? "1" : "0.6",
        zIndex: "600",
      }}
      onMouseEnter={() => {
        if (!isPlaying) {
          rubberBand();
        }
      }}
      animate={controls}
      onAnimationComplete={() => setIsPlaying(false)}
    >
      {children}
    </motion.span>
  );
}
