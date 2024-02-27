import React from "react";

export default function Layout({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  return (
    <>
      <div
        className={`w-full h-full inline-block z-0 bg-light px-32 pt-24 dark:bg-dark xl:p-24 lg:p-16 md:p-12 sm:p-8 ${className}`}
      >
        {children}
      </div>
    </>
  );
}
