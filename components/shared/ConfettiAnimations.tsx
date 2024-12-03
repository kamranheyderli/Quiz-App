"use client"

import Confetti from "react-confetti";
import { useEffect, useState } from "react";

type ConfettiAnimationsProps = {
  isScoreHigh: boolean;
};

const ConfettiAnimations: React.FC<ConfettiAnimationsProps> = ({ isScoreHigh }) => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState<number>(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isScoreHigh) {
    return (
      <Confetti
        width={windowWidth}
        height={windowHeight}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 9999,
        }}
      />
    );
  }
  return null;
};

export default ConfettiAnimations;
