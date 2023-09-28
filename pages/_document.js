import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en-US">
      <Head>
        <Script
          id="googleAdSenseScript"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4106258986656665"
          crossOrigin="anonymous"
          strategy="afterInteractive"
          // data-client="ca-pub-4106258986656665"
        />
        {/* <Script
          id="show-autoads"
          dangerouslySetInnerHTML={{
            __html: `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4106258986656665"
            crossorigin="anonymous" />`,
          }}
          // strategy="beforeInteractive"
        /> */}
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
