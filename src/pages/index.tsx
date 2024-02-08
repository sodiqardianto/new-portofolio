import AnimatedText from "@/components/AnimatedText";
import HireMe from "@/components/HireMe";
import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="flex items-center text-dark w-full min-h-screen">
      <Layout className="pt-0">
        <div className="flex items-center justify-between w-full">
          <div className="w-1/2">
            <Image
              src="/images/developer-pic-1.png"
              alt="logo"
              width={500}
              height={500}
              className="w-full h-auto"
            />
          </div>
          <div className="w-1/2 flex flex-col items-center self-center">
            <AnimatedText
              text="Turning Vision Into Reality With Code and Design"
              className="!text-6xl !text-left"
            />
            <p className="my-4 text-base font-medium">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
              maiores vel dolores eligendi accusamus modi ullam nihil hic, rem
              ut iste esse, maxime deserunt eaque magnam? Molestias
              exercitationem consequatur dolores!
            </p>
            <div className="flex items-center self-start mt-2">
              <Link
                href={"/CV Sodiq Ardianto.pdf"}
                target="_blank"
                className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark"
                download={true}
              >
                Resume{" "}
                <span className="ml-2 text-[18px]">
                  <FaArrowUpRightFromSquare />
                </span>
              </Link>
              <Link
                href={"mailto:sodiqardianto@gmail.com"}
                target="_blank"
                className="ml-4 text-lg font-medium capitalize text-dark underline"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </Layout>
      <HireMe />
    </main>
  );
}
