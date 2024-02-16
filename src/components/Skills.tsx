import Image from "next/image";
import React from "react";

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "Vue Js",
        image: "https://vuejs.org/images/logo.png",
      },
      // {
      //   name: "Nuxt Js",
      //   image: "https://nuxt.com/assets/design-kit/icon-green.svg",
      // },
      {
        name: "React Js",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },
      {
        name: "Redux",
        image:
          "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
      },
      {
        name: "Next Js",
        image:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACTklEQVR4Ab1XAaQqURB9DyohSykREpRIQSAlBCoECKUFCSRCBBEAaSEABQEoCIEASCwAUICALgCo83do0//9v819XX845O7VnDkzOzP7JWGaBd3C3IJpQVjAHeJ+Rs9a97vKLGrBsB1KgMhEP3FMUUwt4ENMfxr1yQIU4SSjRkbeOZtERmHk6pXQVDlnkHh9S+QLTm1hkiz4n/gzFQuny9FoFLquE+i34x+n02k0m00UCoV3BIzn3MMJrVYLtp1OJ0cS/X4f5/MZhmG8IyDsWtDfEaDIn2232/3zbrvdxuFwwGg04qRBt+VnETBNE0IIkE2n07/erdfrWK/X6Ha73Hb9ZXII3G43ivy3dNRqtZe7lUoFs9mM6oBDwCQCgquALT1FT3a5XF7qIZ/PYzgcolqtcggIIgBZAgRKB6lCRalp2uM8k8mAVMrlchwC+DEBipycE4n5fP44j8ViKJVKSCaTbAJCpgaez4vFIsjoWa/XA50FAgEkEgmEw2F2CkxZBZ5Br5tt1ITcbjd8Ph88Hg+7CBefECCsVitS4aVJcV9D/VMCVITk/Hq9YrPZyBBo2a1YMGvAcQYcj0cCtWMugcdYNhjDiBrP25mx3++x3W6RzWZZ8isfxzQLlsslJpMJpYY5jhkqcOH1ejEYDDAej9FoNOByuZxGsfqVzC7KTqcDSkkqleKsZOqX0mAwiHK5DGrJfr+fs5SqX8sjkQji8ThCoRC+v78Za7l6JagrUh3YkUuZpqgwDaecc9VYSDoV5Fg+at7n+eLN57kuE/EvzHr/Kvs31aYAAAAASUVORK5CYII=",
      },
      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
      {
        name: "Bootstrap",
        image:
          "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
      },
      {
        name: "Tailwind",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/320px-Tailwind_CSS_Logo.svg.png",
      },
      {
        name: "Material Tailwind",
        image: "https://www.material-tailwind.com/image/logo-mt.png",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "PHP",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/220px-PHP-logo.svg.png",
      },
      {
        name: "Codeigniter",
        image:
          "https://w7.pngwing.com/pngs/179/232/png-transparent-codeigniter-hd-logo-thumbnail.png",
      },
      {
        name: "Laravel",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1969px-Laravel.svg.png",
      },
      {
        name: "Node Js",
        image: "https://nodejs.org/static/images/logo.svg",
      },
      {
        name: "Express Js",
        image:
          "https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png",
      },
      {
        name: "MySQL",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      },
      {
        name: "Postgresql",
        image: "https://www.postgresql.org/media/img/about/press/elephant.png",
      },
      {
        name: "MongoDB",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
      },
    ],
  },
  {
    title: "Others",
    skills: [
      {
        name: "Git",
        image: "https://avatars.githubusercontent.com/u/18133?s=280&v=4",
      },
      {
        name: "GitHub",
        image:
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },
      {
        name: "Docker",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
      },
      {
        name: "VS Code",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      },
      {
        name: "Postman",
        image: "https://cdn.worldvectorlogo.com/logos/postman.svg",
      },
      {
        name: "Figma",
        image:
          "https://cdn.sanity.io/images/599r6htc/localized/46a76c802176eb17b04e12108de7e7e0f3736dc6-1024x1024.png?w=804&h=804&q=75&fit=max&auto=format",
      },
      {
        name: "Open VPN",
        image: "https://i.pngimg.me/thumb/f/720/m2H7K9H7N4b1i8Z5.jpg",
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
                    className="font-semibold text-dark flex items-center justify-center border border-dark rounded-2xl p-3 gap-2 dark:text-light dark:border-light"
                    key={index}
                  >
                    <Image
                      src={itemSkill.image}
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
