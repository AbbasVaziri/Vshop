import React from "react";
import Link from "next/link";
import styles from "./Profile.module.css";
import { IoEnterOutline } from "react-icons/io5";
import Cookies from "js-cookie";

const Profile = () => {
  return (
    <div className={styles["user-conatiner"]}>
      {Cookies.get("token") ? (
        <h1>خروج</h1>
      ) : (
        <Link href={"/login"}>
          <div className={styles["container-left-header"]}>
            <IoEnterOutline className={styles["icon"]} />
            <p className={styles["enter-text"]}>ورود</p>|
            <p className={styles["signup-text"]}>ثبت نام</p>
          </div>
        </Link>
      )}
    </div>
  );
};

export default Profile;
