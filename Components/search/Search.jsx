// import React, { useState } from "react";
// import SearchResult from "./SearchResult";
// import styles from "./Search.module.css";
// import { IoIosSearch } from "react-icons/io";

// const Search = () => {
//   const [searchText, setSearchText] = useState("");
//   const [searchResults, setSearchResults] = useState([]);

//   const handleSearch = async () => {
//     try {
//       const response = await fetch(
//         `http://localhost:9091/products/search/${searchText}`
//       );
//       const data = await response.json();
//       setSearchResults(data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   return (
//     <div className={styles["search-bar"]}>
//       <input
//         type="search"
//         value={searchText}
//         className={styles["search-feild"]}
//         onChange={(e) => setSearchText(e.target.value)}
//         placeholder="جستجو"
//       />
//       <button
//         type="search"
//         onClick={handleSearch}
//         className={styles["search-button"]}
//       >
//         <IoIosSearch className={styles["search-icon"]} />
//       </button>
//       <SearchResult searchResults={searchResults} />
//     </div>
//   );
// };

// export default Search;
