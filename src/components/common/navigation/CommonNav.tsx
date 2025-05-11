import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "@components/common/navigation/CommonNav.module.scss";
import navJson from "@components/common/navigation/nav.json"; // json 파일을 import 해준다.

interface Navigation {
  index: number;
  path: string;
  label: string;
  searchValue: string;
  isActive: boolean;
}

function CommonNav() {
  // useState를 사용하여 navigation 상태를 관리한다.
  const [navigation, setNavigation] = useState<Navigation[]>(navJson);

  // useState로 선언한 반응성을 가진 데이터를 기반으로 UI를 반복호출 해보도록 한다.
  const naviLink = navigation.map((item: Navigation) => {
    return (
      <Link className={styles.navigation__menu} to={item.path} key={item.path}> 
        {/* map함수를 사용할때는 key값을 설정해줘야 한다. */}
        <span className={styles.navigation__menu__label}>{item.label}</span>
      </Link>
    );
  });

  return <nav className={styles.navigation}>{naviLink}</nav>;
}

export default CommonNav;
