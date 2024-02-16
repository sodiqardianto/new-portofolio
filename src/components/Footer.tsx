import React from "react";
import Layout from "./Layout";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:border-light sm:text-base">
      <Layout className="py-8 flex items-center justify-between lg:flex-col md:py-6">
        <span className="text-dark dark:text-light">
          {new Date().getFullYear()} All Rights Reserved.
        </span>
        <div className="flex items-center text-dark dark:text-light md:py-2">
          Build with{" "}
          <span className="text-2xl text-primary dark:text-primaryDark px-1">
            &#9825;
          </span>
          by&nbsp;
          <Link
            href={"/"}
            className="underline underline-offset-4"
            target="_blank"
          >
            Sodiq Ardianto
          </Link>
        </div>
        {/* <Link
          href={"/"}
          className="underline underline-offset-2 text-dark dark:text-light"
          target="_blank"
        >
          Say hello
        </Link> */}
      </Layout>
    </footer>
  );
}
