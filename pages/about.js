import Head from "next/head";
import styles from "../styles/Pages.module.css";

const about = () => {
  return (
    <div>
      <Head>
        <title>About Jason</title>
        <meta
          name="keywords"
          content="jason hsu, 
        ucsd, software engineer, programming"
        />
      </Head>
      <div className={styles.grid}>
        <h1>About Me</h1>
        <img
          className={styles.space}
          src="/personal-webpage/mypic2.jpg"
          alt="Picture of Author"
        />

        <p className={styles.space}>
          {" "}
          Hi, I&apos;m Jason. I am currently studying at UC San Diego, pursuing B.S.
          in Machine Learning and a minor in Computer Science. My primary
          interest currently is to pursue a Software Development Internship, as
          I aspire to be a software engineer in the future.
          <br />
          <br />
          Before transferring to UC San Diego, I studied at UC Riverside. Through
          working at an emergency department, researching at UCR School of
          Medicine stroke lab, and volunteering at the local community. I learned
          to manage time wisely, deal with unexpected problems and be a
          team-oriented person.
          <br />
          <br />
          In my spare time, I enjoy playing guitar and online games with
          friends. I also enjoy photography and running (I look forward to running a
          half-marathon in the near future!). I like to try new food and meet
          new people, so feel free to reach out! You can reach me through the
          social websites below!
        </p>
      </div>
    </div>
  );
};
export default about;
