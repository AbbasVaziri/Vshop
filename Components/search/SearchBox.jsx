/** @format */

import { useRouter } from "next/navigation";
import React, { useRef } from "react";
import styles from "./SearchBox.module.css";
import { IoIosSearch } from "react-icons/io";
import Link from 'next/link';

const SearchBox = () => {
  const textForSearch = useRef("");
  const router = useRouter();

  const clickHandler = () => {
    router.push(`/Products/search/${textForSearch.current.value}`);
  };

  return (
    <>
      <div className={styles["search-bar"]}>
        <Link href="/">
        <img
          src="https://www.digikala.com/statics/img/svg/logo.svg"
          className={styles["logo-digi"]}
          alt=""
          />
          </Link>
        <div className={styles["container-search"]}>
          <input
            type="text"
            ref={textForSearch}
            className={styles["search-feild"]}
            placeholder="جستجو"
          />
          <IoIosSearch
            onClick={clickHandler}
            className={styles["search-icon"]}
          />
        </div>
      </div>
    </>
  );
};

export default SearchBox;
