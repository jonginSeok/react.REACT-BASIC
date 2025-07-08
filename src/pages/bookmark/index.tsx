import { useEffect, useState } from "react";
import type { CardDTO } from "../index/types/card";
import CommonHeader from "@/components/common/header/CommonHeader";
import Card from "./components/Card";

// CSS
import styles from "./styles/index.module.scss";

function index() {
	const [data, setData] = useState([]);
	const getData = () => {
		const getLocalStorage = JSON.parse(localStorage.getItem("bookmark"));
		if (getLocalStorage || getLocalStorage != null) {
			setData(getLocalStorage);
		} else {
			setData([]);
		}
	};

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
