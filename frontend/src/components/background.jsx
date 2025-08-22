import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const NUM_BUBBLES = 90;

const random = (min, max) => Math.random() * (max - min) + min;

const Background = () => {
  const bubbles = Array.from({ length: NUM_BUBBLES });

  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black -z-10 overflow-hidden">
      {bubbles.map((_, i) => {
        const size = random(12, 26);
        const hue = random(120, 320);

        return (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-80 mix-blend-screen"
            style={{
              width: size,
              height: size,
              top: `${random(0, 100)}%`,
              left: `${random(0, 100)}%`,
              backgroundColor: `hsla(${hue}, 80%, 85%, 0.7)`,
              boxShadow: `0 0 12px hsla(${hue}, 100%, 80%, 0.8),
                          0 0 25px hsla(${hue}, 100%, 70%, 0.6)`,
              filter: "blur(1px)",
            }}
            animate={{
              x: [0, random(-60, 60), random(-100, 100)],
              y: [0, random(-60, 60), random(-100, 100)],
            }}
            transition={{
              duration: random(3, 8), // smooth slow drift
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{
              x: random(-150, 550), // jump away randomly
              y: random(0, 550),
              transition: { duration: 0.6, ease: "easeOut" },
            }}
          />
        );
      })}
    </div>
  );
};

export default Background;
