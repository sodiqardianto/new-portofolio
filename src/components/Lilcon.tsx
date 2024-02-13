import React from "react";
import { motion } from "framer-motion";

interface LilconProps {
  reference: React.Ref<HTMLDivElement>;
}

const Lilcon: React.FC<LilconProps> = ({ reference }) => {
  return (
    <figure className="absolute left-0 stroke-dark dark:stroke-light">
      <svg
        width={75}
        height={75}
        viewBox="0 0 100 100"
        className="-rotate-90 md:w-[60px] md:h-[60px] xs:w-[40px] xs:h-[40px]"
      >
        <circle
          cx={75}
          cy={50}
          r={20}
          className="stroke-primary stroke-1 fill-none dark:stroke-primaryDark"
        />
        <motion.circle
          cx={75}
          cy={50}
          r={20}
          style={{ pathLength: 0 }} // Placeholder for scrollYProgress
          className="stroke-[5px] fill-light dark:fill-dark"
        />
        <circle
          cx={75}
          cy={50}
          r={10}
          className="animate-pulse stroke-1 fill-primary dark:fill-primaryDark"
        />
      </svg>
    </figure>
  );
};

export default Lilcon;
