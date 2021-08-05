import Head from "next/head";
import styles from "../styles/Pages.module.css";

const cv = () => {
    return (
        <div>
            <Head>
                <title>Jason's Resume</title>
                <meta
                    name="keywords"
                    content="jason hsu resume, ucsd, software engineer, internship"
                />
            </Head>
            <div className={styles.grid}>
                <h1>Resume</h1>
                <p className={styles.bigSpace}>
                    I am currently a undergraduate studying at UC San Diego, however, I am looking for a Software Development related internship opportuinity.
                    I will be pursuing a Software Engineer position when I graduate at Summer 2023. Feel free to take a look at my resume below!
                </p>
                <a herf="/Jason_Hsu_Resume.pdf" className={styles.bigSpace}>
                    <p>Click Here</p>
                </a>
            </div>
        </div>

    );
};


export default cv;