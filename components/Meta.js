import React from "react";
import Head from "next/head";

export default function Meta({
  title = "Love Language Test - Take your love language quiz",
  description = "Take this free love language test to discover your primary love language, taking this love language quiz helps you better connect with your loved ones.",
  url = "https://www.lovelanguagestest.com",
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="article" />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
    </Head>
  );
}
