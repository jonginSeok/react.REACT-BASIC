import type { CardDTO } from "@/pages/index/types/card";

import styles from "./DetailDialog.module.scss";

interface Props {
    data: CardDTO
    handleDialog: (eventValue: boolean) => void
}

function DetailDialog({ data, handleDialog }: Props) { // 객체 구조분해 할당
    const closeDialog = () => {
        handleDialog(false);
    }

    return (
        <div className={styles.container}>
            <div className={styles.container__dialog}>
                <div className={styles.container__dialog__header}>
                    <div className={styles.close}>
                        <button className={styles.close__button} onClick={closeDialog}>
                            {/* 구글 아이콘을 사용 */}
                            <span className="material-symbols-outlined" style={{ fontSize: 28 + 'px' }}>close</span>
                        </button>
                        <img src={data.user.profile_image.small} alt="사진작가 프로필 사진" title="사진작가 프로필 사진" className={styles.close__authorImage} />
                        <span className={styles.close__authorName}>{data.user.name}</span>
                    </div>
                    <div className={styles.bookmark}>
                        <button className={styles.bookmark__button}>
                            {/* 구글 아이콘을 사용 */}
                            <span className="material-symbols-outlined" style={{ fontSize: 16 + 'px' }}>favorite북마크</span>
                        </button>
                        <button className={styles.bookmark__button}>download</button>
                    </div>
                </div>
                <div className={styles.container__dialog__body}>
                    <img src={data.urls.small} alt="상세 이미지" className={styles.image} />
                </div>
                <div className={styles.container__dialog__footer}>
                    <div className={styles.infoBox}>
                        <div className={styles.infoBox__item}>
                            <span className={styles.infoBox__item__label}>이미지 크기</span>
                            <span className={styles.infoBox__item__value}>{data.width} x {data.height}</span>
                        </div>
                        <div className={styles.infoBox__item}>
                            <span className={styles.infoBox__item__label}>업로드</span>
                            <span className={styles.infoBox__item__value}>{data.created_at.split("T")[0]}</span>
                        </div>
                        <div className={styles.infoBox__item}>
                            <span className={styles.infoBox__item__label}>마지막 업데이트</span>
                            <span className={styles.infoBox__item__value}>{data.updated_at.split("T")[0]}</span>
                        </div>
                        <div className={styles.infoBox__item}>
                            <span className={styles.infoBox__item__label}>다운로드</span>
                            <span className={styles.infoBox__item__value}>{data.likes}</span>
                        </div>
                    </div>
                    <div className={styles.tagBox}>
                        {/* {data.tags.map((tag: Tag) => {
                            return (
                                <div className={styles.tagBox__tag} key={tag.title}>{tag.title}</div>
                            );
                        })} */}
                        <div className={styles.tagBox__tag}>태그 데이터</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailDialog;
