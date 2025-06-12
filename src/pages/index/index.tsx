import { useMemo, useState } from "react";
import { useRecoilValueLoadable } from "recoil";
import { imageData } from "@recoil/selectors/imageSelector";
import type { CardDTO } from "@pages/index/types/card";

// PAGES
import CommonHeader from "@components/common/header/CommonHeader";
import CommonNav from "@components/common/navigation/CommonNav";
import CommonSearchBar from "@components/common/searchBar/CommonSearchBar";
import CommonFooter from "@components/common/footer/CommonFooter";
import Card from "@pages/index/components/Card";
import DetailDialog from "@/components/common/dialog/DetailDialog";

// CSS
import styles from "./styles/index.module.scss";

function index() {
    const imgSelector = useRecoilValueLoadable(imageData);
    const [imgData, setImgData] = useState<CardDTO>();
    const [open, setOpen] = useState<boolean>(false); // 이미지 상세 다이얼로그 발생관리(false)

    const CARD_LIST = useMemo(() => {
        console.log(imgSelector);
        if ("hasValue" === imgSelector.state) {
            const result = imgSelector.contents.map((card: CardDTO) => {
                return <Card data={card} key={card.id} handleDialog={setOpen} handleSetData={setImgData} />;
            })
            return result;
        } else {
            return <div>로딩중...</div>;
        }
    }, [imgSelector])

    return (
        <div className={styles.page}>
            { /* 공통 헤더 UI 부분 */}
            <CommonHeader />
            { /* 공통 네비게이션 부분 */}
            <CommonNav />
            <div className={styles.page__contents}>
                <div className={styles.page__contents__introBox}>
                    <div className={styles.wrapper}>
                        <span className={styles.wrapper__title}> PhotoSplash </span>
                        <span className={styles.wrapper__desc}>
                            인터넷의 시각 자료 출처입니다. <br />
                            모든 지역에 있는 크리에이터들의 지원을 받습니다.
                        </span>
                        { /* 검색창 UI 부분 */}
                        <CommonSearchBar />
                    </div>
                </div>
                <div className={styles.page__contents__imageBox}>
                    {CARD_LIST}
                </div>
            </div>
            { /* 공통 푸터 UI 부분 */}
            <CommonFooter />
            {open && <DetailDialog data={imgData} handleDialog={setOpen} />}
        </div>
    );
}

{
    /*
        index.tsx:16  Warning: Can't perform a React state update on a component that hasn't mounted yet. 
        This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. 
        Move this work to useEffect instead. Error Component Stack
        
        // 윗 문장 번역
        index.tsx:16 경고: 아직 마운트되지 않은 컴포넌트에서 React 상태 업데이트를 수행할 수 없습니다. 
        이는 나중에 비동기적으로 컴포넌트 업데이트를 시도하는 render 함수에 부작용이 있음을 나타냅니다. 
        이 작업을 대신 useEffect로 옮기세요. 오류 컴포넌트 스택
     */
}

export default index;
