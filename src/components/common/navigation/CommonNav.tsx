import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "@components/common/navigation/CommonNav.module.scss";
import navJson from "@components/common/navigation/nav.json"; // json 파일을 import 해준다.
import { pageState } from "@/recoil/atoms/pageState";
import { useRecoilState } from "recoil";
import { searchState } from "@/recoil/atoms/searchState";

interface Navigation {
    index: number;
    path: string;
    label: string;
    searchValue: string;
    isActive: boolean;
}

function CommonNav() {
    const location = useLocation()
    const [navigation, setNavigation] = useState<Navigation[]>(navJson);
    const [page, setPage] = useRecoilState(pageState)
    const [search, setSearch] = useRecoilState(searchState)

    useEffect(() => {
        console.log("CommonNav useEffect:", location);
        navigation.forEach((nav: Navigation) => {
            nav.isActive = false; // 초기화

            if (nav.path === location.pathname) {
                nav.isActive = true; // 현재 경로와 일치하는 경우 isActive를 true로 설정
                setSearch(nav.searchValue); // 검색 상태 업데이트
                setPage(1); // 페이지 상태 초기화
            } else {
                nav.isActive = false; // 일치하지 않는 경우 isActive를 false로 설정

            }
        });

        setNavigation([...navigation]); // 상태 업데이트

    }, [location.pathname]);

    // useState로 선언한 반응성을 가진 데이터를 기반으로 UI를 반복호출 해보도록 한다.
    const naviLink = navigation.map((item: Navigation) => {
        return (
            <Link className={item.isActive ? `${styles.navigation__menu} ${styles.active}` : `${styles.navigation__menu} ${styles.inactive}`} to={item.path} key={item.path}>
                {/* map함수를 사용할때는 key값을 설정해줘야 한다. */}
                <span className={styles.navigation__menu__label}>{item.label}</span>
            </Link>
        );
    });

    return <nav className={styles.navigation}>{naviLink}</nav>;
}

export default CommonNav;
