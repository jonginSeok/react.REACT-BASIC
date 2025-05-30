import { useState } from "react";
import { useRecoilValue } from "recoil";
import { imageData } from "@recoil/selectors/imageSelector";

import CommonHeader from "@components/common/header/CommonHeader";
import CommonNav from "@components/common/navigation/CommonNav";
import CommonSearchBar from "@components/common/searchBar/CommonSearchBar";
import CommonFooter from "@components/common/footer/CommonFooter";
import Card from "@pages/index/components/Card";
// CSS
import styles from "@pages/index/styles/index.module.scss";

import type { CardDTO } from "./types/card";

function index() {
  const imageSelector = useRecoilValue(imageData);

  const [imgData, setImgData] = useState<CardDTO[]>([]);

  // imgUrls 배열을 순회하여 Card 컴포넌트를 생성
  const CARD_LIST = imageSelector.data.results.map((card: CardDTO) => {
    return <Card data={card} key={card.id} />;
  });

  return (
    <div className={styles.page}>
      {/* 공통 헤더 UI 부분 */}
      <CommonHeader />
      {/* 공통 네비게이션 부분 */}
      <CommonNav />
      <div className={styles.page__contents}>
        <div className={styles.page__contents__introBox}>
          <div className={styles.wrapper}>
            <span className={styles.wrapper__title}> PhotoSplash </span>
            <span className={styles.wrapper__desc}>
              인터넷의 시각 자료 출처입니다. <br />
              모든 지역에 있는 크리에이터들의 지원을 받습니다.
            </span>
            {/* 검색창 UI 부분 */}
            <CommonSearchBar />
          </div>
        </div>
        <div className={styles.page__contents__imageBox}>
          {CARD_LIST}
        </div>
      </div>
      {/* 공통 푸터 UI 부분 */}
      <CommonFooter />
    </div>
  );
}

{
/**
index.tsx:16  Warning: Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead. Error Component Stack

index.tsx:16 경고: 아직 마운트되지 않은 컴포넌트에서 React 상태 업데이트를 수행할 수 없습니다. 이는 나중에 비동기적으로 컴포넌트 업데이트를 시도하는 render 함수에 부작용이 있음을 나타냅니다. 이 작업을 대신 useEffect로 옮기세요. 오류 컴포넌트 스택
 */

}

export default index;


