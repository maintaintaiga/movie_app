"use client";
import Image from "next/image";

import styles from "../css/appbar.module.css";
import Link from "next/link";

export default function Appbar() {
  return (
    <div role="banner" className={styles.appbar}>
      <Image
        src={"/static/images/siteLogo.png"}
        alt="site logo"
        width={120}
        height={30}
      />
      <Link href="/">
        <h2 className={styles.nav}>Browse</h2>
      </Link>
    </div>
  );
}
