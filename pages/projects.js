import Head from "next/head";
import styles from "../styles/Pages.module.css";

const projects = () => {
  return (
    <div>
      <Head>
        <title>Projects</title>
        <meta
          name="keywords"
          content="jason hsu, 
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
          Hi, I'm Jason, I am currently studying at UC San Diego pursuing B.S.
          in Machine Learning and a minor in Computer Science. My primary
          interest currently is to pursue a Software Engineering Internship, as
          I aspire to be one in the future.
          <br />
          <br />
          Before transferring to UC San Diego, I studied at UC Riverside, where
          I got to experience medical science, research, and biomedical
          engineering. Through working at a emergency department, researching at
          UCR School of Medicine stroke lab, and volunteering at the local
          community. I learned great teamwork, time management, and problem
          dealing skills.
          <br />
          <br />
          In my spare time, I enjoy playing guitar and online games with
          friends. I also enjoy photography and running (I look forward to run a
          half-marathon in the near future!). I like to try new food and meet
          new people so feel free to reach out! You can reach me through the
          social-websites below!
        </p>
      </div>
    </div>
  );
};
export default projects;
