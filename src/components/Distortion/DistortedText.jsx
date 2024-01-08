import { DistortionText } from "react-text-fun";
import React, { useEffect, useState } from "react";
import styles from "./distortedtext.module.css";

const DistortedText = (props) => {
  const [noiseAmplitude, setNoiseAmplitude] = useState(1);
  const [noiseVolatility, setNoiseVolatility] = useState(1);

  useEffect(() => {
    // Function to update noise properties based on mouse position
    // Linear interpolation function
    const interpolate = (value, inMin, inMax, outMin, outMax) => {
      return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
    };
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const newAmplitude = interpolate(mouseX, 0, window.innerWidth, 0, 3);
      const newVolatility = interpolate(mouseY, 0, window.innerHeight, 0, 3);

      setNoiseAmplitude(newAmplitude);
      if (window.innerWidth <= 768) {
        setNoiseVolatility(3);
      } else {
        setNoiseVolatility(newVolatility);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); // Run effect only once on component mount

  return (
    <div className={styles["main-box"]}>
      <div className={styles["wrap"]}>
        <DistortionText
          text="GIRL ON ROAD"
          fontSize={160}
          speed={0.05}
          rotation={10.0}
          distortX={0.9}
          distortY={0.2}
          noiseAmplitude={1}
          noiseVolatility={2.1}
          fill={"rgb(0, 0, 0)"}
          paddingLeft={5}
          paddingRight={5}
        />
      </div>
    </div>
  );
};

export default DistortedText;
