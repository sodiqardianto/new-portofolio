import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Montserrat } from "next/font/google";
import { usePathname } from "next/navigation";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export default function App({ Component, pageProps }: AppProps) {
  const pathname = usePathname();
  const isNotHomePage = pathname !== "/";

  return (
    <main
      className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}
    >
      <NavBar />
      <Component {...pageProps} />
      {isNotHomePage && <Footer />}
    </main>
  );
}
