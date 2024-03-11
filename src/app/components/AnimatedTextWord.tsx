interface AnimatedTextWordProps {
  text: string;
}

import React from "react";
import { motion } from "framer-motion";
import styles from '../styles/home.module.scss'

const AnimatedTextWord: React.FC<AnimatedTextWordProps> = ({ text }) => {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        ease: [0.76, 0, 0.24, 1],
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  return (
    <motion.div
      className={styles.containerhuno}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      
      {words.map((word: string, index: number) => (
        <motion.h1
          variants={child}
          style={{ marginRight: "10px" }}
          key={index}
        >
          {word}
        </motion.h1>
      ))}
    </motion.div>
  );
};

export default AnimatedTextWord;