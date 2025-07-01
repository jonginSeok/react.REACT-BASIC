import { useEffect, useState } from "react";
import CommonHeader from "@/components/common/header/CommonHeader";
import Card from "./components/Card";
// CSS
import styles from "./styles/index.module.scss";

function index() {
	const [data, setData] = useState([]);
	const getData = () => {};

	useEffect(() => {
		// 북마크 데이터 가져오기
		getData();
	}, []);

	return (
		<div className={styles.page}>
			{/* 곻통 헤더 UI  부분 */}
			<CommonHeader />
			<main className={styles.page__contents}>
				<Card/>				
			</main>
		</div>
	);
}

export default index;
