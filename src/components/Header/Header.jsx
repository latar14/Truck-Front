import React from "react";
import styles from "./header.module.scss";
import logo from "../../public/logo_2.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img alt="#" src={logo} />
      </div>
      <div className={styles.nav_top}>
        <ul>
          <li>cars</li>
          <li>profile</li>
          <li>Service</li>
          <li>Pages</li>
          <li>Main</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
