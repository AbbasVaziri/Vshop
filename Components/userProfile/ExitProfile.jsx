import React from "react";
import styles from "./ExitProfile.module.css";
import { FaArrowRightToBracket } from "react-icons/fa6";

const ExitProfile = () => {
  return (
    <>
      <div className={styles["outer-container"]}>
        <span className={styles["user-phoneNumber"]}>09025663672 سلام</span>
        <span className={styles["exit-user"]}>
              خروج از حساب کاربری
        <FaArrowRightToBracket />
        </span>
      </div>
    </>
  );
};

export default ExitProfile;
