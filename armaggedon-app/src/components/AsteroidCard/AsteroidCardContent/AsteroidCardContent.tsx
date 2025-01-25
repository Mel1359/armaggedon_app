import styles from "./Content.module.css";
import {useContext} from "react";
import {AsteroidsContext} from "../../asteroids-context/AsteroidsContext";

type AsteroidCardContentProps = {
    name: string,
    date: string,
    distance: {
        kilometers: number;
        lunar: number;
    },
    size: number,
    distanceMode: boolean,
}

export const AsteroidCardContent = (props: AsteroidCardContentProps) =>{
    const {name, date, distance, size, distanceMode} = props;

    return (<div>
        <div className={styles.contentName}>{name}</div>
        <div className={styles.contentWrapper}>
            <div className={styles.contentDate}>{`Дата: ${date}`}</div>
            <div className={styles.contentDistance}>{distanceMode ? `Расстояние: ${distance.kilometers} км` : `Расстояние: ${distance.lunar} расстояние до Луны`}</div>
            <div className={styles.contentSize}>{`Размер: ${size}`}</div>
        </div>
    </div>)
}