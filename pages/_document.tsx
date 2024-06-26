import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const meta = {
    title: "Communism Death Toll",
    description: "An accounting, with Wikipedia links, of the victims of communism.",
  };

  return (
    <Html lang="en">
      <Head>
        <meta name="description" content={meta.description} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
