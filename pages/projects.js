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
        <img
          className={styles.space}
          src="/mypic.jpg"
          alt="Picture of Author"
        />

        <p className={styles.space}>
          {" "}
          ---
          Chicken_Bake [In Progress]
          This project is the continuation of the Costco_Item Tracker project I have made. The project aims to become the camelcamelcamel.com for Costco. Because similar to amazon.com, Costco also does not always show price changes of items they are selling. The project's goal is to let shoppers search Costco items on this webpage and see the current price and the price fluctuation history to determine if the current time is the best time to purchase the thing at Costco.
          <br />
          <br />
          https://github.com/jhcode14/personal-webpage
          Personal Webpage
          This project is this website that you are on right now! This website is built with JavaScript, TypeScript, CSS, HTML, Next.JS, React.JS. Feel free to look at how I built it with the GitHub link above!
          <br />
          <br />
          https://github.com/jhcode14/Costco_Item_Tracker
          Costco_Item_Tracker
          This project is a local Python-based software that allows users to search through a Costco web page category and record the price. Shoppers can compare prices with their saved price histories to compare if Costco currently holds the best price for the item.
        </p>
      </div>
    </div>
  );
};
export default projects;
