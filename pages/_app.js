import Layout from "../components/Layout";
import SEO from "../components/SEO";
import "../styles/globals.css";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  const title = "Github Application";
  return (
    <>
      <Layout>
        <SEO title={title} />
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
