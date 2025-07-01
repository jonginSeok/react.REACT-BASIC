import { useState } from "react";
import { useRecoilState } from "recoil";
import { searchState } from "@/recoil/atoms/searchState";
import { pageState } from "@/recoil/atoms/pageState";

import styles from "@components/common/searchBar/CommonSearchBar.module.scss";

function CommonSearchBar() {
  const [search, setSearch] = useRecoilState(searchState);
  const [page, setPage] = useRecoilState(pageState);
  const [text, setText] = useState("");
  const handleChange = (event) => {
    setText(event.target.value);
    // 검색어가 변경될 때마다 상태를 업데이트합니다.
    console.log("handleChange:" + event.target.value);
  };
  const handleClick = () => {
    // 검색 버튼 클릭 시 동작을 정의합니다.
    if ("" === text) {
      setSearch("Korea");
    } else {
      setSearch(text);
    }
    setPage(1); // 페이지를 1로 초기화
  };
  // Enter 키를 눌렀을 때 검색어가 비어있으면 default 검색어로 Korea 검색
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if ("Enter" === event.key) {
      if ("" === text) {
        setSearch("Korea");
      } else {
        setSearch(text);
      }
      setPage(1); // 페이지를 1로 초기화
    }
  };

  return (
    <div className={styles.searchBar}>
      <div className={styles.searchBar__search}>
        <input type="text" placeholder="찾으실 이미지를 검색하세요." className={styles.searchBar__search__input} onChange={handleChange} onKeyDown={handleKeyDown} value={text} />
        <img src="src/assets/icons/icon-search.svg" alt="" onClick={handleClick} />
      </div>
    </div>
  );
}

export default CommonSearchBar;
