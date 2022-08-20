import styles from "./header.module.scss";
import Reveal from "react-reveal/Reveal";
import Image from "next/image";
import Link from "next/link";
const Header = () => {
  return (
    <section className={styles.section}>
      <Reveal effect="fadeInUp">
        <div className={styles.textArea}>
          <h3>Model 3</h3>
          <p>
            Order Online for
            <span className={styles.touchless}>Touchless delivery</span>
          </p>
        </div>
      </Reveal>
      <Reveal effect="fadeInUpForBtns">
        <div className={styles.headerButtons}>
          <div className={styles.btnMain}>
            <Link href="/" className={styles.btn}>
              <a className={styles.btn}> Custom Order </a>
            </Link>
            <Link href="/">
              <a className={styles.btn}> Exicting enventory</a>
            </Link>
          </div>
        </div>
      </Reveal>
      <Image
        width={50}
        height={40}
        src="/images/down-arrow.svg"
        alt="down icon"
        className={styles.downIcon}
      />
    </section>
  );
};

export default Header;
