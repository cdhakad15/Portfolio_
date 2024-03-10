"use client";

import React from "react";
import { motion } from "framer-motion";
const quoto = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      staggerChildren: 0.08,
    },
  },
};
export default function AnimatedText({
  children,
  className,
}: {
  children: any;
  className: String;
}) {
  return (
    <motion.h1
      className={
        "text-4xl sm:text-5xl md:text-7xl text-dark dark:text-light font-bold text-center md:text-left  " +
        className
      }
      variants={quoto}
      initial="initial"
      animate="animate"
    >
      {children}
    </motion.h1>
  );
}
