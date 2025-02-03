import {Header} from "../components/header/Header";
import {AsteroidCard} from "../components/AsteroidCard/AsteroidCard";
import styles from './Asteroids.module.css';
import {useContext, useEffect, useState} from "react";
import {SpaceImage} from "../components/card/SpaceBanner";
import {AsteroidsContext} from "../components/asteroids-context/AsteroidsContext";
import {getUserKey} from "../utils/getUserKey";
import {Bottom} from "../components/Bottom/Bottom";

export const Asteroids = ()=>{

    const [asteroids, setAsteroids] = useState<
        {
            name: string;
            date: string;
            distance: {
                kilometers: number;
                lunar: number;
            };
            size: number;
            id: string;
            isDangerous: boolean;
        }[]
    >([]);

    useEffect(()=> {
        try{
            const result = fetch(`https://api.nasa.gov/neo/rest/v1/feed?api_key=${getUserKey()}`).then((res) => {
                return res.json()
            }).then((response) => {
                let rawAsteroids = []
                for (const data in response.near_earth_objects) {
                    rawAsteroids = rawAsteroids.concat(response.near_earth_objects[data])
                }
                const asteroids = rawAsteroids.map(item => {
                    const size = Math.trunc((item.estimated_diameter.meters.estimated_diameter_max + item.estimated_diameter.meters.estimated_diameter_min) / 2);
                    const close = item.close_approach_data[0]
                    return {
                        name: item.name,
                        date: close.close_approach_date,
                        size, distance: {kilometers: parseFloat(Number(close.miss_distance.kilometers).toFixed(3)), lunar: parseFloat(Number(close.miss_distance.lunar).toFixed(3))},
                        isDangerous: !!item.is_potentially_hazardous_asteroid,
                        id: item.id
                    }
                })
                setAsteroids(asteroids)
            })
        }catch(err){
            console.log(err)
        }

    }, [])

    const {onlyDangerous, setOnlyDangerous, setDistanceMode, distanceMode} = useContext(AsteroidsContext)!;

    return (
        <div className={styles.body}>
            <Header/>
            <div className={styles.filtersWrapper}>
                <label className={styles.showDangerousOnly}>
                    <input
                        type="checkbox"
                        className={styles.checkBox}
                        checked={onlyDangerous}
                        onChange={() => setOnlyDangerous(!onlyDangerous)}
                    />
                    Показать только опасные
                </label>

                {/* Переключатель единиц измерения */}
                <div className={styles.distanceMode}>
                    <span>Расстояние</span>
                    <button
                        onClick={() => setDistanceMode(true)}
                        className={`${styles.distanceChooser} ${distanceMode ? styles.active : ''}`}
                    >
                        в километрах
                    </button>
                    <span>,</span>
                    <button
                        onClick={() => setDistanceMode(false)}
                        className={`${styles.distanceChooser} ${!distanceMode ? styles.active : ''}`}
                    >
                        в дистанциях до луны
                    </button>
                </div>
            </div>
            <SpaceImage/>
            <div>
                {asteroids
                    .filter(it => !onlyDangerous || it.isDangerous)
                    .map(item => <AsteroidCard key={item.id} {...item}/>)}
            </div>
            <Bottom/>
        </div>
    );
};