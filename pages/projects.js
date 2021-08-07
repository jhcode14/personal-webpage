import Head from "next/head";
import styles from "../styles/Pages.module.css";

const projects = () => {
  return (
    <div>
      <Head>
        <title>Projects</title>
        <meta
          name="keywords"
          content="jason hsu projects, 
        ucsd, software engineer, programming"
        />
      </Head>
      <div className={styles.grid}>
        <h1>Projects</h1>
        <div className={styles.bigSpace}>
          <h3>Personal Webpage</h3>
          <p>
            This project is this website that you are on right now! Feel free to look at how I
            built it with the GitHub link above!
            <br />
            <br />
            Tools: JavaScript/CSS/HTML, TypeScript, React.JS, Next.JS
          </p>
        </div>

        <a href="https://github.com/jhcode14/personal-webpage" className={styles.card} target="_blank">
          View project on Github
        </a>

        <div className={styles.bigSpace}>
          <h3>Costco Item Tracker</h3>
          <p>
            This project is a local Python-based software that offer users a new way to shopping. Where
            the shoppers can record Costco item catagories and compare prices with saved history to
            determine if the current price is optimal.
            <br />
            <br />
            Tools: Python, Tkinter
          </p>
        </div>

        <a href="https://github.com/jhcode14/Costco_Item_Tracker" className={styles.card} target="_blank">
          View Project on Github
        </a>

        <div className={styles.bigSpace}>
          <h3>Chicken Bake [In Progress]</h3>
          <p>
            This project is the continuation and improved version of Costco Item Tracker.
            The project aims to become the camelcamelcamel.com for Costco Wholesale. Where shoppers can
            search desired Costco items on this website and see the current price and
            historical price fluctuation for the item.
            <br />
            <br />
            Tools: Python, JavaScript/CSS/HTML, TypeScript, React.JS, Next.JS, and more
          </p>
        </div>
      </div>
    </div>
  );
};
export default projects;
