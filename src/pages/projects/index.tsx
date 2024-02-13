import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa6";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects | Sodiq Ardianto</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className="w-full flex flex-col items-center justify-center overflow-hidden mb-16 text-dark dark:text-light">
        <Layout className="pt-36">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid grid-cols-12 gap-24 my-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 rounded-br-2xl relative dark:border-light dark:bg-dark lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
                <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light" />
                <Link
                  href={""}
                  target="_blank"
                  className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
                >
                  <Image
                    src={"/images/projects/crypto-screener-cover-image.jpg"}
                    width={700}
                    height={700}
                    alt=""
                    className="w-full h-auto hover:scale-110 hover:duration-200"
                    priority
                    sizes="(min-width: 768px) 100vw,
                    (max-width: 1200px)50vw, 33vw"
                  />
                </Link>
                <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
                  <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
                    Featured Project
                  </span>
                  <Link
                    href={""}
                    target="_blank"
                    className="hover:underline underline-offset-2"
                  >
                    <h2 className="my-2 w-full font-bold text-left text-4xl dark:text-light  sm:text-sm">
                      Crypto Screnner
                    </h2>
                  </Link>
                  <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis officia amet incidunt, itaque facere quam
                    inventore facilis molestias maxime illo eaque, deleniti ex
                    necessitatibus. Dolores ratione quod accusamus nobis rem.
                  </p>
                  <div className="mt-2 flex items-center">
                    <Link href={"/"} target="_blank" className="">
                      <FaGithub className="text-4xl" />
                    </Link>
                    <Link
                      href={"/"}
                      target="_blank"
                      className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base"
                    >
                      Visit Project
                    </Link>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-span-6 sm:col-span-12">
              <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:border-light dark:bg-dark xs:p-4">
                <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h[102%] xs:w-full xs:rounded=[1.5rem] md:-right-2 md:w-[101%] xs:h-0[102%] xs:rounded-[1.5rem]" />
                <Link
                  href={""}
                  target="_blank"
                  className="w-full cursor-pointer overflow-hidden rounded-lg"
                >
                  <Image
                    src={"/images/projects/crypto-screener-cover-image.jpg"}
                    width={700}
                    height={700}
                    alt=""
                    className="w-full h-auto hover:scale-110 hover:duration-200"
                    priority
                    sizes="(min-width: 768px) 100vw,
                    (max-width: 1200px)50vw, 33vw"
                  />
                </Link>
                <div className="w-full flex flex-col items-start justify-between mt-4">
                  <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
                    Featured Project
                  </span>
                  <Link
                    href={""}
                    target="_blank"
                    className="hover:underline underline-offset-2"
                  >
                    <h2 className="my-2 w-full font-bold text-left text-3xl lg:text-2xl">
                      Crypto Screnner
                    </h2>
                  </Link>
                  <div className="w-full mt-2 flex items-center justify-between">
                    <Link
                      href={"/"}
                      target="_blank"
                      className="text-lg font-semibold underline md:text-base"
                    >
                      Visit
                    </Link>
                    <Link href={"/"} target="_blank" className="">
                      <FaGithub className="text-3xl md:text-2xl" />
                    </Link>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-span-6 sm:col-span-12">
              <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:border-light dark:bg-dark xs:p-4">
                <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h[102%] xs:w-full xs:rounded=[1.5rem] md:-right-2 md:w-[101%] xs:h-0[102%] xs:rounded-[1.5rem]" />
                <Link
                  href={""}
                  target="_blank"
                  className="w-full cursor-pointer overflow-hidden rounded-lg"
                >
                  <Image
                    src={"/images/projects/crypto-screener-cover-image.jpg"}
                    width={700}
                    height={700}
                    alt=""
                    className="w-full h-auto hover:scale-110 hover:duration-200"
                    priority
                    sizes="(min-width: 768px) 100vw,
                    (max-width: 1200px)50vw, 33vw"
                  />
                </Link>
                <div className="w-full flex flex-col items-start justify-between mt-4">
                  <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
                    Featured Project
                  </span>
                  <Link
                    href={""}
                    target="_blank"
                    className="hover:underline underline-offset-2"
                  >
                    <h2 className="my-2 w-full font-bold text-left text-3xl lg:text-2xl">
                      Crypto Screnner
                    </h2>
                  </Link>
                  <div className="w-full mt-2 flex items-center justify-between">
                    <Link
                      href={"/"}
                      target="_blank"
                      className="text-lg font-semibold underline md:text-base"
                    >
                      Visit
                    </Link>
                    <Link href={"/"} target="_blank" className="">
                      <FaGithub className="text-3xl md:text-2xl" />
                    </Link>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
