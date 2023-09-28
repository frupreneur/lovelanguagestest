import React from "react";
import Head from "next/head";
import { Header, Footer, Meta } from "../components";

import { Andika } from "@next/font/google";

const andika = Andika({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "optional",
});

export default function Layout({ children }) {
  React.useEffect(() => {
    // Delay 3 seconds before showing ads
    let timer = setTimeout(() => {
      try {
        // Get Ad Element
        const autoAdScript = document.querySelector("#googleAdSenseScript");

        // Remove "data-nscript"  script to avoid AdSense Warnings
        if (autoAdScript.attributes["data-nscript"]) {
          autoAdScript.removeAttribute("data-nscript");
        }

        // Remove "src"  attribute if available
        if (autoAdScript.attributes["src"]) {
          autoAdScript.removeAttribute("src");
        }

        // Add Script to initialize ads
        autoAdScript.setAttribute(
          "src",
          `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4106258986656665`
        );
      } catch (err) {
        console.error(err);
      }
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <>
      <Head>
        <title>
          Love Language Test - Take your love language quiz | Love Languages
          Test
        </title>
        <link rel="shortcut icon" href="/assets/favicon.ico" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
      </Head>
      <main className={andika.className}>
        <Header />
        <section className="main">{children}</section>
        <Footer />
      </main>
    </>
  );
}
