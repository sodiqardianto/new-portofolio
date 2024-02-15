import Link from "next/link";
import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Lilcon from "./Lilcon";

export const experiences = [
  {
    id: 0,
    role: "Frontend Developer",
    company: "Paramadina University",
    date: "August 2022 - Present",
    desc: "Working on the frontend of the web application using NextJS, Redux, and Material Tailwind.",
    skills: [
      "ReactJS",
      "NextJS",
      "Redux",
      "Postman",
      "Material Tailwind",
      "Tailwind CSS",
      "Laravel",
      "Codeigniter",
      "Smarty",
    ],
    // doc: "https://firebasestorage.googleapis.com/v0/b/buckoid-917cf.appspot.com/o/Screenshot%20from%202023-05-28%2023-20-46.png?alt=media&token=5570f995-e8f4-4f12-bb2f-73bcf4b20730",
  },
  {
    id: 1,
    role: "Web Developer",
    company: "PT Petra Sejahtera Abadi",
    date: "September 2021 - June 2023",
    desc: "Built an employee management full stack web app used Docker and deployed on AWS ec2. I was the top performer in the program.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Codeigniter",
      "Laravel",
      "Git",
      "SQL",
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          {experiences.map((experience, index) => (
            <li
              ref={ref}
              className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
              key={index + experience.id}
            >
              <Lilcon reference={ref} />
              <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
              >
                <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
                  {experience.role} &nbsp;{" "}
                  <Link
                    href={"www.google.com"}
                    target="_blank"
                    className="text-primary capitalize dark:text-primaryDark"
                  >
                    @{experience.company}
                  </Link>
                </h3>
                <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
                  {experience.date} | {experience.company}
                </span>
                <p className="font-medium w-full md:text-sm">
                  {experience.desc}
                </p>
              </motion.div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
