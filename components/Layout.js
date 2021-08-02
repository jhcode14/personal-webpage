import Nav from "./Nav";
import styles from "../styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <main className={styles.main}>{children}</main>
    </>
  );
};

export default Layout;
