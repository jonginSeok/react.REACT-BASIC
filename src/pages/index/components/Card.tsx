import type { CardDTO } from "@pages/index/types/card";

import styles from "./Card.module.scss";

interface Props {
    data: CardDTO
    handleDialog: (eventValue: boolean) => void
    handleSetData: (eventValue: CardDTO) => void
}

function Card({ data, handleDialog, handleSetData }: Props) {
    const openDialog = () => {
        handleDialog(true);
        handleSetData(data);
    };

    return (
        <div className={styles.card} onClick={openDialog}>
            <img src={data.urls.small} alt={data.alt_description} className={styles.card__image} />
        </div>
    );
}

{
    // index.tsx:18  Warning: Can't perform a React state update on a component that hasn't mounted yet. 
    // This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. 
    // Move this work to useEffect instead. Error Component Stack
}

export default Card;
