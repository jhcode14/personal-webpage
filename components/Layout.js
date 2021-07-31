import Nav from "./Nav";
import Header from "./Header";
import styles from "../styles/Layout.module.css";
import Image from "next/image";
import background from "../public/daniel-j-schwarz.jpg";
import icon_IN from "../public/instagram.svg";
import icon_LI from "../public/linkedin.svg";
import icon_GH from "../public/github.svg";

const Layout = ({ children }) => {
  return (
    <>
      <div className={styles.bgWrap}>
        <Image
          src={background}
          alt="background picture"
          layout="responsive"
          width={3333}
          height={3000}
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div className={styles.bgText}>
        <Nav />
        <main className={styles.main}>
          <Header />
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
