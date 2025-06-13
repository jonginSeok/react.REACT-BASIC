import styles from "@components/common/footer/CommonFooter.module.scss";

function CommonFooter() {
    return (
        <footer className={styles.footer}>
            <div className={styles.pagination}>
                <button className={styles.pagination__button}>
                    <img src="src/assets/icons/icon-arrow-left.svg" alt="Previous" />
                </button>
                {/* 변경될 UI 부분 */}
                <span>1</span>
                <button className={styles.pagination__button}>
                    <img src="src/assets/icons/icon-arrow-right.svg" alt="Previous" />
                </button>
            </div>
        </footer>
    );
}

export default CommonFooter;
