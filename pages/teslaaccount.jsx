import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountNavbar from "../components/AccountNavbar/AccountNavbar";
import { UseAuth } from "../context/AuthUserContext";
import styles from "../styles/teslaaccount.module.scss";
const Teslaaccount = () => {
  const { authUser, loading, signOut } = UseAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !authUser) router.push("/signIn");
  }, [authUser, loading]);

  return (
    <>
      {loading ? (
        <p>Loading ... </p>
      ) : (
        <>
          <AccountNavbar />

          <Head>
            <title>Account</title>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
          </Head>
          <div className={styles.logoInfo}>
            {authUser && <p>You`re logged as {authUser.email}</p>}
            <button onClick={signOut} className={styles.logOutBtn}>
              <p>Sign Out</p>
              <ExitToAppIcon className={styles.btnIcon} />
            </button>
          </div>
          <div className={styles.carPurchase}>
            <img
              className={styles.modelX}
              src="/images/modelX.png"
              alt="modelx"
            />
            <h1>Model X</h1>
            <div className={styles.headerButtons}>
              <div className={styles.btnMain}>
                <Link href="/">
                  <a className={styles.btn}>Custom Order</a>
                </Link>
                <Link href="/">
                  <a className={styles.btn}>exicting enventory</a>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Teslaaccount;
