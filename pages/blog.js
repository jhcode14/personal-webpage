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
            <div className={styles.grid}>
                <h1>Blog</h1>
                <div className={styles.picture}>
                    <img src="/taipei.jpg">
                    </img>
                </div>
                <div className={styles.bigSpace}>
                    <p>
                        Hey there! Thanks for stopping by my little blog post! I'd like to share this photo
                        I took back when I was traveling in Taiwan in a city called Taipei. Taipei is the
                        capital of Taiwan, where the traffic and the streets are always busy. By taking this
                        picture, I hope you can see the essence and the beauty of Taiwan.
                        <br />
                        <br />
                        I started to fall in love with photography during my freshman year of my college.
                        Sometimes when I walk out of the building after a class or a long period of studying,
                        I looked up at the beautiful sky and realized how I took the beauty of California for
                        granted. With the help of my roommate Eric, who introduced me to Digital Single-Lens
                        Reflex Cameras (DSLR), I started to develop a passion for taking pictures and
                        exploring the beauty of nature.
                    </p>
                </div>

            </div>
        </div>

    );
};


export default blogs;
