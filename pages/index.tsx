import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jason Hsu</title>
        <meta
          name="keywords"
          content="jason hsu, 
        ucsd, software engineer, programming"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <span>I'm Jason Hsu</span>
        </h1>
        <p className={styles.description}>
          {" "}
          A UCSD Machine Learning Student / Aspire Software Engineer
        </p>

        <div className={styles.grid}>
          <a href="/about" className={styles.card}>
            <h2>About Me &rarr;</h2>
            <p>An introduction about myself.</p>
          </a>

          <a href="/projects" className={styles.card}>
            <h2>Coding Projects &rarr;</h2>
            <p>Find out what I have made so far!</p>
          </a>

          <a href="/cv" className={styles.card}>
            <h2>Resume &rarr;</h2>
            <p>Take a look of my resume.</p>
          </a>

          <a href="/blog" className={styles.card}>
            <h2>Blog &rarr;</h2>
            <p>Checkout my life beside working!</p>
          </a>
        </div>
      </main>
    </div>
  );
}
