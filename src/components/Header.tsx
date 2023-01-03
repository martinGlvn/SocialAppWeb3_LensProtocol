import Link from "next/link";
import React from "react";
import styles from "../styles/Header.module.css";
import SignInButton from "./SignInButton";

export default function Header() {
  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.left}>
          <Link href={"/"}>
            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/6ce7b8128171271.6152fe4a34a64.png" alt="logo" className={styles.logo} />
          </Link>

          <Link href={"/create"}>Create</Link>
        </div>

        <div className={styles.right} >
          {/* @ts-expect-error Server Component */}
          <SignInButton />
        </div>
        
      </div>
      <div style={{ height: 64 }} />
    </>
  );
}