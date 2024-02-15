import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Lilcon from "./Lilcon";

const educations = [
  {
    location: "Raharja University, Tangerang",
    graduate: "Bachelor of Science In Computer Science",
    grade: "3.35 GPA",
    date: "September 2015 - Maret 2020",
    desc: "I completed 4.5 years of education with a GPA of 3.35 at Raharja University, majoring in informatics engineering, and a concentration in software engineering.",
  },
  {
    location: "SMA N 1 Jatisrono, Wonogiri",
    graduate: "Senior High School - Natural Science",
    grade: "100 %",
    date: "April 2012 - August 2015",
    desc: "I'm graduated on 2015, in Senior High School at SMA N 1 Jatisrono, majoring in natural science. Also I learned about computer science, like make a blog site, and customize a website.",
  },
];

export default function Education() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Education
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          {educations.map((education, index) => (
            <li
              ref={ref}
              className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
              key={index}
            >
              <Lilcon reference={ref} />
              <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
              >
                <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
                  {education.graduate}
                </h3>
                <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
                  {education.date} | {education.location}
                </span>
                <p className="font-medium w-full md:text-sm">
                  {education.desc}
                </p>
              </motion.div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
