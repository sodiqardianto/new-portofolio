import Image from "next/image";
import React from "react";

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "Vue Js",
        image: "vue.png",
      },
      // {
      //   name: "Nuxt Js",
      //   image: "https://nuxt.com/assets/design-kit/icon-green.svg",
      // },
      {
        name: "React Js",
        image: "react.png"
      },
      {
        name: "Redux",
        image: "redux.png"
      },
      {
        name: "Next Js",
        image: "nextjs.png",
      },
      {
        name: "HTML",
        image: "html.png",
      },
      {
        name: "CSS",
        image: "css.png",
      },
      {
        name: "JavaScript",
        image: "js.png",
      },
      {
        name: "Bootstrap",
        image: "bootstrap.png",
      },
      {
        name: "Tailwind",
        image: "tailwind.png",
      },
      {
        name: "Material Tailwind",
        image: "material-tailwind.png",
      },
      {
        name: "Shadcn UI",
        image: "shadcn.png",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "PHP",
        image: "php.png",
      },
      {
        name: "Codeigniter",
        image: "codeigniter.png",
      },
      {
        name: "Laravel",
        image: "laravel.png",
      },
      {
        name: "Node Js",
        image: "node.png",
      },
      {
        name: "Express Js",
        image: "express.png",
      },
      {
        name: "MySQL",
        image: "mysql.png",
      },
      // {
      //   name: "Postgresql",
      //   image: "https://www.postgresql.org/media/img/about/press/elephant.png",
      // },
      {
        name: "MongoDB",
        image: "monggo.png",
      },
    ],
  },
  {
    title: "Others",
    skills: [
      {
        name: "Git",
        image: "git.png",
      },
      {
        name: "GitHub",
        image: "github.png",
      },
      {
        name: "Docker",
        image: "docker.png",
      },
      {
        name: "VS Code",
        image: "vs-code.png",
      },
      {
        name: "Postman",
        image: "postman.png",
      },
      {
        name: "Figma",
        image: "figma.png",
      },
      {
        name: "Open VPN",
        image: "open-vpn.png",
      },
    ],
  },
];

export default function Skills() {
  return (
    <>
      <h2 className="font-bold text-8xl mt-32 w-full text-center mb-10 md:text-6xl xs:text-4xl md:mb-16 sm:mb-8 sm:mt-28">
        Skills
      </h2>
      <div className="flex flex-col justify-center text-lg font-semibold text-center mx-96 xl:mx-48 lg:mx-24 sm:mx-0 sm:text-sm mb-14 text-dark dark:text-light">
        The following are some of my skills that I have worked on in
        approximately 3 years, in programming.
      </div>
      <div className="w-full flex flex-wrap gap-8 justify-center">
        {skills.map((skill, index) => {
          return (
            <div
              className="border border-dark shadow-lg rounded-3xl p-10 max-w-lg relative my-3 bg-light dark:border-light dark:bg-dark"
              key={index}
            >
              <div className="absolute top-1 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <h2 className="text-3xl font-semibold mb-10 text-center">
                {skill.title}
              </h2>
              <div className="flex justify-center flex-wrap gap-3">
                {skill.skills.map((itemSkill, index) => (
                  <div
                    className="font-semibold text-dark flex items-center justify-center border border-dark rounded-2xl p-3 gap-2 dark:text-light dark:border-light sm:p-2 sm:text-sm"
                    key={index}
                  >
                    <Image
                      src={`/images/logos/${itemSkill.image}`}
                      alt=""
                      width={35}
                      height={35}
                      priority
                      sizes="(min-width: 768px) 100vw,
                      (max-width: 1200px)50vw, 33vw"
                    />
                    {itemSkill.name}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
