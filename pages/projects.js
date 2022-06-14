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
          <h3>Heart Disease Machine Learning Detection</h3>
          <p>
          This project is part of UCSD&aposs; Spring 2022 COGS 118A Supervised Machine Learning Course. I worked with 4 other members
          to search for ways to better understand the correlation between heart disease and common traits and find ways to predict
          if a patient potentially will have risks of having heart disease or not. Methods include Data Cleaning, EDA, 
          Logistic Regression, K-Nearest Neighbors, Neuro Network, Random Forest, Oversampling, Data Standardization, and Cross Validation.
            <br />
            <br />
            Tools: Python, Jupyter Notebook, Scikit-learn, Numpy, Pandas, Matplotlib
          </p>
        </div>

        <a href="https://github.com/jhcode14/Heart_Disease_ML_Detection" className={styles.card} rel="noreferrer" target="_blank">
          View project on Github
        </a>


        <div className={styles.bigSpace}>
          <h3>Type 1 Diabetic Care Directive</h3>
          <p>
          This project is part of UCSD Diabetes Design Initiative and UCSD Design Lab&aposs; Type 1 Diabetic Care Directive&aposs; 
          Fall 2021 Sprint. As a frontend developer, I worked with other UCSD Designers and Developers to create a website
          prototype for Type 1 Diabetic Patients to easily provide lifesaving informations to medical team during life-threatening
          emergency.
            <br />
            <br />
            Tools: JavaScript/CSS/HTML, React.JS, Antd
          </p>
        </div>

        <a href="https://github.com/jhcode14/t1d-fall2021" className={styles.card} rel="noreferrer" target="_blank">
          View project on Github
        </a>

        <div className={styles.bigSpace}>
          <h3>Personal Webpage</h3>
          <p>
            This project is this website that you are visiting right now! Feel free to look at how I
            built it with the GitHub link above!
            <br />
            <br />
            Tools: JavaScript/CSS/HTML, TypeScript, React.JS, Next.JS
          </p>
        </div>

        <a href="https://github.com/jhcode14/personal-webpage" className={styles.card} rel="noreferrer" target="_blank">
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

        <a href="https://github.com/jhcode14/Costco_Item_Tracker" className={styles.card} rel="noreferrer" target="_blank">
          View Project on Github
        </a>

        
      </div>
    </div>
  );
};
export default projects;
