import Nav from "./Nav";
import Header from "./Header";
import styles from "../styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <main className={styles.main}>
        <Header />
        {children}
      </main>
    </>
  );
};

export default Layout;
