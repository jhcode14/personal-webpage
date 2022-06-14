import Head from "next/head";
import Link from "next/link";
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
        <link rel="icon" href="/personal-webpage/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <span>I&apos;m Jason Hsu</span>
        </h1>
        <p className={styles.description}>
          {" "}
          A UCSD Machine Learning Student / Aspired Software Engineer
        </p>

        <div className={styles.grid}>
          <Link href="/about" passHref>
            <div className={styles.card}>
              <h2>About Me &rarr;</h2>
              <p>An introduction about myself.</p>
            </div>
          </Link>
          <Link href="/projects" passHref>
            <div className={styles.card}>
              <h2>Coding Projects &rarr;</h2>
              <p>Find out what I have made so far!</p>
            </div>
          </Link>
          <Link href="/cv" passHref>
            <div className={styles.card}>
              <h2>Resume &rarr;</h2>
              <p>Take a look of my resume.</p>
            </div>
          </Link>
          <Link href="/blog" passHref>
            <div className={styles.card}>
              <h2>Blog &rarr;</h2>
              <p>Checkout my life beside working!</p>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}
