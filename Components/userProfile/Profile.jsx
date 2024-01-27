import React from "react";
import Link from "next/link";
import styles from "./Profile.module.css";
import { IoEnterOutline } from "react-icons/io5";
import { PiUserCircleThin } from "react-icons/pi";
import ExitProfile from "@/Components/userProfile/ExitProfile";
import { useSelector } from "react-redux";

const Profile = () => {
  const { token } = useSelector((state) => state.user);
  const isAuthenticated = !!token;

  return (
    <>
      {isAuthenticated ? (
        <div className={styles["icon-profile"]}>
          <PiUserCircleThin cursor={"pointer"} />
          <div className={styles["exit-user-container"]}>
            <ExitProfile />
          </div>
        </div>
      ) : (
        <Link href={"/login"}>
          <div className={styles["container-left-header"]}>
            <IoEnterOutline className={styles["icon"]} />
            <p className={styles["enter-text"]}>ورود</p>|
            <p className={styles["signup-text"]}>ثبت نام</p>
          </div>
        </Link>
      )}
    </>
  );
};

export default Profile;
