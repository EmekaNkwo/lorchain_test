import Head from "next/head";

function SEO({ title }) {
  const description = "An Application that fetches Data from the Github API";
  const keywords = "Github, Repositories";
  const siteURL = "";

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      <meta property="og:url" content={siteURL} key="ogurl" />
      {/* <meta property="og:image" content={imagePreview} key="ogimage" /> */}
      <meta property="og:site_name" content={siteURL} key="ogsitename" />
      <meta property="og:title" content={title} key="ogtitle" />
      <meta property="og:description" content={description} key="ogdesc" />
      <title>{title}</title>

      <link
        href="../public/favicon.ico"
        rel="icon"
        type="image/png"
        sizes="16x16"
      />

      <link rel="apple-touch-icon" href="/apple-icon.png"></link>
      <meta name="theme-color" content="#EF4444" />
    </Head>
  );
}

export default SEO;
