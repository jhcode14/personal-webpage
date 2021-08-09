import Head from "next/head";
import styles from "../styles/Pages.module.css";

const cv = () => {
    return (
        <div>
            <Head>
                <title>Jason&apos;s Resume</title>
                <meta
                    name="keywords"
                    content="jason hsu resume, ucsd, software engineer, internship"
                />
            </Head>
            <div className={styles.grid}>
                <h1>Resume</h1>
                <p className={styles.bigSpace}>
                    I am currently an undergraduate studying at UC San Diego. However, I am looking for a Software Development related internship opportunity.
                    I will be pursuing a Software Engineer position when I graduate in Summer 2023. Feel free to take a look at my resume below!
                </p>
                <a href="/personal-webpage/Jason_Hsu_Resume2.pdf" className={styles.card} target="_blank">
                    View Resume
                </a>
            </div>
        </div>
    );
};


export default cv;
