import navStyles from "../styles/Nav.module.css";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <div className={navStyles.grid}>
        <div className={navStyles.navBrandCard}>
          <Link href="/" passHref>
            <div>
              <img src="/personal-webpage/favicon.ico" alt="icon" />
              <span className={navStyles.navBrand}>Jason Hsu</span>
            </div>
          </Link>
        </div>
        <Link href="/about" passHref>
          <div className={navStyles.card}>
            About
          </div>
        </Link>
        <Link href="/projects" passHref>
          <div className={navStyles.card}>
            Projects
          </div>
        </Link>
        <Link href="/cv" passHref>
          <div className={navStyles.card}>
            Resume
          </div>
        </Link>
        <Link href="/blog" passHref>
          <div className={navStyles.card}>
            Blog
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
