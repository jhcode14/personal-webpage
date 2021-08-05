import Head from "next/head";
import styles from "../styles/Pages.module.css";

const blogs = () => {
    return (
        <div>
            <Head>
                <title>Jason's Blog</title>
                <meta
                    name="keywords"
                    content="jason hsu blog, taipe, photography"
                />
            </Head>
            <h1>Blog</h1>
            <div className={styles.grid}>
                <div className={styles.bigSpace}>
                    <img src="/taipe.jpg">
                    </img>
                </div>
                <div className={styles.bigSpace}>
                    <p>
                        Hey there! Thanks for stopping by my little blog post! I'd like to share with you this photo I took back when I was traveling in Taipe, Taiwan
                    </p>
                </div>

            </div>
        </div>

    );
};


export default blogs;