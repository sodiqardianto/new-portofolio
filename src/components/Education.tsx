import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Lilcon from "./Lilcon";

export default function Education() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">Education</h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <li
            ref={ref}
            className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
          >
            <Lilcon reference={ref} />
            <motion.div
              initial={{ y: 50 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.5, type: "spring" }}
            >
              <h3 className="capitalize font-bold text-2xl">
                Bachelor of Science In Computer Science
              </h3>
              <span className="capitalize font-medium text-dark/75">
                2024-Present | Mountain View, CA
              </span>
              <p className="font-medium w-full">
                Relevant courses included Data Structure and Algorithm, Computer
                System.
              </p>
            </motion.div>
          </li>
          <li
            ref={ref}
            className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
          >
            <Lilcon reference={ref} />
            <motion.div
              initial={{ y: 50 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.5, type: "spring" }}
            >
              <h3 className="capitalize font-bold text-2xl">
                Bachelor of Science In Computer Science
              </h3>
              <span className="capitalize font-medium text-dark/75 dark:text-light/75">
                2024-Present | Mountain View, CA
              </span>
              <p className="font-medium w-full">
                Relevant courses included Data Structure and Algorithm, Computer
                System.
              </p>
            </motion.div>
          </li>
          <li
            ref={ref}
            className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
          >
            <Lilcon reference={ref} />
            <motion.div
              initial={{ y: 50 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.5, type: "spring" }}
            >
              <h3 className="capitalize font-bold text-2xl">
                Bachelor of Science In Computer Science
              </h3>
              <span className="capitalize font-medium text-dark/75">
                2024-Present | Mountain View, CA
              </span>
              <p className="font-medium w-full">
                Relevant courses included Data Structure and Algorithm, Computer
                System.
              </p>
            </motion.div>
          </li>
        </ul>
      </div>
    </div>
  );
}
