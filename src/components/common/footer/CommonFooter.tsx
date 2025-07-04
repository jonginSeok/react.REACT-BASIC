import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, useRecoilValueLoadable } from "recoil";
import { imageData } from "@/recoil/selectors/imageSelector";
import { searchState } from "@/recoil/atoms/searchState";
import { pageState } from "@/recoil/atoms/pageState";
import styles from "./CommonFooter.module.scss";

function CommonFooter() {
  const imgSelector = useRecoilValueLoadable(imageData);
  const search = useRecoilValue(searchState);
  const [page, setPage] = useRecoilState(pageState);
  const [step, setStep] = useState(0);

  useEffect(() => {
    setStep(0);
  }, [search]);

  // 페이지 리스트 UI 생성
  const newArr: number[] = new Array();

  for (let i = 1; i <= imgSelector.contents.total_pages; i++) {
    newArr.push(i);
  }
  const length = newArr.length;
  // Math.floor() : 소수점을 내림하여 가장 가까운 정수로 만드는 함수
  // 10개씩 나누기 // 나머지가 있으면 +1
  const divide =
    Math.floor(length / 10) + (Math.floor(length % 10) > 0 ? 1 : 0);
  const res = [];

  for (let i = 0; i <= divide; i++) {
    // 배열 0부터  n개까지 잘라서 새 배열에 넣기
    res.push(newArr.slice(i * 10, (i + 1) * 10));
  }

  //------------------------------------------------------------------------------------------------

  const moveToPage = (selected: number) => {
    setPage(selected); // 현재 페이지를 변경할 때마다 step을 업데이트
  };

  const moveToPrev = () => {
    console.log("moveToPrev 호출 step:" + step);
    if (0 == step) {
      return;
    } else {
      setStep(step - 1);
      setPage(res[step - 1][0]); // 이전 페이지의 첫 번째 페이지로 이동
    }
  };

  const moveToNext = () => {
    console.log("moveToNext 호출 step:" + step);
    if (res[step].length - 2 > step) {
      setStep(step + 1);
      setPage(res[step + 1][0]); // 다음 페이지의 첫 번째 페이지로 이동
    } else {
      return;
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.pagination}>
        <button className={styles.pagination__button} onClick={moveToPrev}>
          <img src="src/assets/icons/icon-arrow-left.svg" alt="Previous" />
        </button>
        {/* 변경될 UI 부분 */}
        {/* <span>1</span> */}
        {res[step] &&
          res[step].map((item: number, index: number) => {
            // 페이지 번호가 11보다 작으면 페이지 버튼을 생성
            if (11 > item) {
              return (<button className={index === page - 1 ? `${styles.pagination__button} ${styles.active}` : `${styles.pagination__button} ${styles.inactive}`} key={item} onClick={() => moveToPage(item)}>{item}</button>);
            } else {
              return (<button className={index === page - 1 - step * 10 ? `${styles.pagination__button} ${styles.active}` : `${styles.pagination__button} ${styles.inactive}`} key={item} onClick={() => moveToPage(item)}>{item}</button>);
            }
          })}

        <button className={styles.pagination__button} onClick={moveToNext}>
          <img src="src/assets/icons/icon-arrow-right.svg" alt="Previous" />
        </button>
      </div>
    </footer>
  );
}

export default CommonFooter;
