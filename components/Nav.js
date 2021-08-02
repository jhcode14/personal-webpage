import navStyles from "../styles/Nav.module.css";

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <div className={navStyles.grid}>
        <a href="/" className={navStyles.navBrandCard}>
          <img src="/favicon.ico" alt="icon" />
          <span className={navStyles.navBrand}>Jason Hsu</span>
        </a>
        <a href="/about" className={navStyles.card}>
          About
        </a>
        <a href="/projects" className={navStyles.card}>
          Projects
        </a>
        <a href="/cv" className={navStyles.card}>
          Resume
        </a>
        <a href="/blog" className={navStyles.card}>
          Blog
        </a>
      </div>
    </nav>
  );
};

export default Nav;
