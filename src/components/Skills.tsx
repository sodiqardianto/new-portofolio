import Image from "next/image";
import React from "react";

export default function Skills() {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center mb-10 md:text-6xl xs:text-4xl md:mb-16 sm:mb-8">
        Skills
      </h2>
      <div className="flex flex-col justify-center text-lg font-semibold text-center mx-96 xl:mx-48 lg:mx-24 sm:mx-0 sm:text-sm mb-14 text-dark dark:text-light">
        The following are some of my skills that I have worked on in
        approximately 3 years, in programming.
      </div>
      <div className="w-full flex flex-wrap gap-8 justify-center">
        <div className="border border-dark shadow-lg rounded-3xl p-10 max-w-lg relative bg-light dark:border-light dark:bg-dark">
          <div className="absolute top-1 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
          <h2 className="text-3xl font-semibold mb-10 text-center">
            Front End
          </h2>
          <div className="flex justify-center flex-wrap gap-3">
            <div className="font-semibold text-dark flex items-center justify-center border border-dark rounded-2xl p-3 gap-2 dark:text-light dark:border-light">
              <Image
                src="https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg"
                alt=""
                width={35}
                height={35}
                priority
                sizes="(min-width: 768px) 100vw,
                (max-width: 1200px)50vw, 33vw"
              />
              Material Tailwind
            </div>
            <div className="font-semibold text-dark flex items-center justify-center border border-dark rounded-2xl p-3 gap-2 dark:text-light dark:border-light">
              <Image
                src="https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg"
                alt=""
                width={35}
                height={35}
              />
              React
            </div>
            <div className="font-semibold text-dark flex items-center justify-center border border-dark rounded-2xl p-3 gap-2 dark:text-light dark:border-light">
              <Image
                src="https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg"
                alt=""
                width={35}
                height={35}
              />
              Vue
            </div>
          </div>
        </div>
        <div className="border border-dark shadow-lg rounded-3xl p-10 max-w-lg relative bg-light dark:border-light dark:bg-dark">
          <div className="absolute top-1 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
          <h2 className="text-3xl font-semibold mb-10 text-center">
            Front End
          </h2>
          <div className="flex justify-center flex-wrap gap-3">
            <div className="font-semibold text-dark flex items-center justify-center border border-dark rounded-2xl p-3 gap-2 dark:text-light dark:border-light">
              <Image
                src="https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg"
                alt=""
                width={35}
                height={35}
                priority
                sizes="(min-width: 768px) 100vw,
                (max-width: 1200px)50vw, 33vw"
              />
              Material Tailwind
            </div>
            <div className="font-semibold text-dark flex items-center justify-center border border-dark rounded-2xl p-3 gap-2 dark:text-light dark:border-light">
              <Image
                src="https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg"
                alt=""
                width={35}
                height={35}
              />
              React
            </div>
            <div className="font-semibold text-dark flex items-center justify-center border border-dark rounded-2xl p-3 gap-2 dark:text-light dark:border-light">
              <Image
                src="https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg"
                alt=""
                width={35}
                height={35}
              />
              Vue
            </div>
          </div>
        </div>
        <div className="border border-dark shadow-lg rounded-3xl p-10 max-w-lg relative bg-light dark:border-light dark:bg-dark">
          <div className="absolute top-1 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
          <h2 className="text-3xl font-semibold mb-10 text-center">
            Front End
          </h2>
          <div className="flex justify-center flex-wrap gap-3">
            <div className="font-semibold text-dark flex items-center justify-center border border-dark rounded-2xl p-3 gap-2 dark:text-light dark:border-light">
              <Image
                src="https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg"
                alt=""
                width={35}
                height={35}
                priority
                sizes="(min-width: 768px) 100vw,
                (max-width: 1200px)50vw, 33vw"
              />
              Material Tailwind
            </div>
            <div className="font-semibold text-dark flex items-center justify-center border border-dark rounded-2xl p-3 gap-2 dark:text-light dark:border-light">
              <Image
                src="https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg"
                alt=""
                width={35}
                height={35}
              />
              React
            </div>
            <div className="font-semibold text-dark flex items-center justify-center border border-dark rounded-2xl p-3 gap-2 dark:text-light dark:border-light">
              <Image
                src="https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg"
                alt=""
                width={35}
                height={35}
              />
              Vue
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
