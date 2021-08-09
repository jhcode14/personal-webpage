import Layout from "../components/Layout";
import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
      <footer>
        <p>&copy; Jason Hsu, 2021</p>
        <div>
          <a href="https://www.instagram.com/jhsu_14/" rel="noreferrer" target="_blank">
            <img src="/instagram.svg" alt="instagram" />
          </a>
          <a href="https://www.linkedin.com/in/jason-hsu-ucsd/" rel="noreferrer" target="_blank">
            <img src="/linkedin.svg" alt="linkedin" />
          </a>
          <a href="https://github.com/jhcode14" rel="noreferrer" target="_blank">
            <img src="/github.svg" alt="github" />
          </a>
        </div>
      </footer>
    </Layout>
  );
}
export default MyApp;
