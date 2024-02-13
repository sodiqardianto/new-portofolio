import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Transition from "@/components/Transition";
import "@/styles/globals.css";
import { motion, AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import { Montserrat } from "next/font/google";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const pathname = usePathname();
  const isNotHomePage = pathname !== "/";

  return (
    <main
      className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}
    >
      <NavBar />
      <AnimatePresence mode="wait">
        <motion.div key={router.route} className="h-full">
          <Transition />
          <Component key={router.asPath} {...pageProps} />
        </motion.div>
      </AnimatePresence>
      {isNotHomePage && <Footer />}
    </main>
  );
}
