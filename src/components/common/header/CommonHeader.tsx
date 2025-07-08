import { useNavigate } from "react-router-dom";
// CSS
import styles from "./CommonHeader.module.scss";

function CommonHeader() {
    const navigate = useNavigate();
    // 북마크 페이지로 이동하는 함수
    const moveToPage = (filter : string) => {
        if ('main' == filter) {
            navigate("/");
        }
        else {
            navigate("/" + filter);
        }
    };
    return (
        <header className={styles.header}>
            <div className={styles.header__logoBox}>
                <img className={styles.header__logoBox__logo} src="src/assets/images/image-logo.png" alt="로고" onClick={() => moveToPage('main')}/>
                <span className={styles.header__logoBox__title}>PhotoSplash</span>
            </div>
            <div className={styles.header__profileBox}>
                <button className={styles.header__profileBox__button}>사진제출</button>
                <button className={styles.header__profileBox__button} onClick={() => moveToPage('bookmark')}>
                    북마크
                </button>
                <span className={styles.header__profileBox__userName}>ngins7512 | ngins7512@gmail.com</span>
            </div>
        </header>
    );
}

export default CommonHeader;
