import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function HireMe() {
  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden md:right-8 md:left-auto md:top-0 md:bottom-auto md:absolute">
      <div className="w-48 h-auto flex items-center justify-center relative md:w-28">
        <Image
          src={"/svgs/circular-text.svg"}
          alt="hire-me"
          width={300}
          height={300}
          priority={true}
          className="animate-spin-slow fill-dark dark:fill-light"
        />
        <Link
          href={"mailto:sodiqardianto@gmail.com"}
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark dark:bg-light dark:text-dark dark:border-light hover:dark:bg-dark hover:dark:text-light md:w-12 md:h-12 md:text-[10px]"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
}
