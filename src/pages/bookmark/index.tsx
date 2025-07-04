import { useEffect, useState } from "react";
import CommonHeader from "@/components/common/header/CommonHeader";
import Card from "./components/Card";

// CSS
import styles from "./styles/index.module.scss";
import type { CardDTO } from "../index/types/card";

function index() {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [data, setData] = useState([]);
	const getData = () => {
		const getLocalStorage = JSON.parse(localStorage.getItem("bookmark"));
		if (getLocalStorage || getLocalStorage != null) {
			setData(getLocalStorage);
		} else {
			setData([]);
		}
	};

	// eslint-disable-next-line react-hooks/rules-of-hooks
	useEffect(() => {
		getData();
	}, []);

	return (
		<div className={styles.page}>
			{/* 곻통 헤더 UI  부분 */}
			<CommonHeader />
			<main className={styles.page__contents}>
			{
				data.map((item: CardDTO) => {
					return(<Card prop={item} key={item.id}/>)
				})
			}
			</main>
		</div>
	);
}

export default index;
