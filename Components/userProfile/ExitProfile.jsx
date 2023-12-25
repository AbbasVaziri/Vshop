import React from "react";
import styles from "./ExitProfile.module.css";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import {logout} from "@/Redux/features/user/UsersSlice";

const ExitProfile = () => {
    const dispatch = useDispatch();

  return (
    <>
      <div className={styles["outer-container"]}>
        <span className={styles["user-phoneNumber"]}>{} سلام</span>
        <div className={styles["exit-user"]} onClick={() => dispatch(logout())}>
          خروج از حساب کاربری
          <FaArrowRightToBracket />
        </div>
      </div>
    </>
  );
};

export default ExitProfile;
