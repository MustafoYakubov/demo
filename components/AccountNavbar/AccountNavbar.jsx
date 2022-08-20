import React, { useState } from "react";
import styles from "../../layout/Navbar/navbar.module.scss";
import Link from "next/link";
import { SideBar } from "../../layout/Navbar/SideBar";
import CloseIcon from "@mui/icons-material/Close";
const AccountNavbar = () => {
  const [sideBar, setsideBar] = useState(false);
  const showSideBar = () => {
    setsideBar((prev) => {
      return !prev;
    });
  };

  return (
    <>
      <nav className={styles.navbar}>
        <Link href="/">
          <a>
            <img
              className={styles.teslaLogo}
              src="/images/logo.svg"
              alt="logo"
            />
          </a>
        </Link>
        {/* NAV LINK */}
        <ul className={styles.navbarNav}>
          <li className={styles.items}>
            <Link href="/">
              <a className={styles.itemsLink}>Model S</a>
            </Link>
          </li>
          <li className={styles.items}>
            <Link href="/">
              <a className={styles.itemsLink}>Model 3</a>
            </Link>
          </li>
          <li className={styles.items}>
            <Link href="/">
              <a className={styles.itemsLink}>Model X</a>
            </Link>
          </li>
          <li className={styles.items}>
            <Link href="/">
              <a className={styles.itemsLink}>Model Y</a>
            </Link>
          </li>
          <li className={styles.items}>
            <Link href="/">
              <a className={styles.itemsLink}>Solar Roof</a>
            </Link>
          </li>
          <li className={styles.items}>
            <Link href="/">
              <a className={styles.itemsLink}>Solar Panels</a>
            </Link>
          </li>
        </ul>
        {/* NAV MENU */}
        <div className={styles.menu}>
          <li className={styles.items}>
            <Link href="/">
              <a className={styles.itemsLink}>Shop</a>
            </Link>
          </li>
          <li className={styles.items}>
            <Link href=" ">
              <a className={styles.itemsLink}>Account</a>
            </Link>
          </li>
          <li className={styles.items} onClick={showSideBar}>
            Menu
          </li>
        </div>
        <div
          className={
            sideBar
              ? styles["sideMenu"] + " " + styles["active"]
              : styles["sideMenu"]
          }
        >
          <CloseIcon
            className={styles.closeIcon}
            onClick={() => setsideBar(false)}
          />
          <ul className={styles.sideBarNav}>
            {SideBar.map((item, key) => {
              return (
                <li key={key} className={styles.hamburgerLinks}>
                  <Link href={item.path}>{item.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
      {/* SIDE BAR MENU */}
    </>
  );
};

export default AccountNavbar;
