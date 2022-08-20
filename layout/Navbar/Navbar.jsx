import React, { useState } from "react";
import styles from "./navbar.module.scss";
import Link from "next/link";
import Image from "next/image";
import { SideBar } from "./SideBar";
import CloseIcon from "@mui/icons-material/Close";
const Navbar = () => {
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
              loading="lazy"
            />
          </a>
        </Link>
        {/* NAV LINK */}
        <ul className={styles.navbarNav}>
          <li className={styles.items}>
            <Link href="/" className={styles.itemsLink}>
              <a> Model S</a>
            </Link>
          </li>
          <li className={styles.items}>
            <Link href="/" className={styles.itemsLink}>
              <a> Model 3</a>
            </Link>
          </li>
          <li className={styles.items}>
            <Link href="/" className={styles.itemsLink}>
              <a> Model X</a>
            </Link>
          </li>
          <li className={styles.items}>
            <Link href="/" className={styles.itemsLink}>
              <a> Model Y</a>
            </Link>
          </li>
          <li className={styles.items}>
            <Link href="/" className={styles.itemsLink}>
              <a> Solar Roof</a>
            </Link>
          </li>
          <li className={styles.items}>
            <Link href="/" className={styles.itemsLink}>
              <a> Solar Panels</a>
            </Link>
          </li>
        </ul>
        {/* NAV MENU */}
        <div className={styles.menu}>
          <li className={styles.items}>
            <Link href="/" className={styles.itemsLink}>
              <a>Shop</a>
            </Link>
          </li>
          <li className={styles.items}>
            <Link href="/teslaaccount" className={styles.itemsLink}>
              <a>Account</a>
            </Link>
          </li>
          <li className={styles.items} onClick={showSideBar}>
            <Link href="/">
              <a>Menu</a>
            </Link>
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

export default Navbar;
