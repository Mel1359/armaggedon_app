import {Header} from "../components/header/Header";
import {AsteroidCard} from "../components/AsteroidCard/AsteroidCard";
import styles from './Asteroids.module.css';
import {useEffect, useState} from "react";
import {SpaceImage} from "../components/card/SpaceBanner";

export const Asteroids = ()=>{

    const [asteroids, setAsteroids] = useState([]);

    const [onlyDangerous, setOnlyDangerous] = useState(false);

    const [distanceMode, setDistanceMode] = useState(false);

    useEffect(()=> {
        try{
            const result = fetch("https://api.nasa.gov/neo/rest/v1/feed?api_key=DEMO_KEY").then((res) => {
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
                        date: close.close_approach_data,
                        size, distance: {kilometers: close.miss_distance.kilometers, lunar: close.miss_distance.lunar},
                        isDangerous: item.is_potentially_hazardous_asteroid,
                        id: item.id
                    }
                })
                setAsteroids(asteroids)
            })
        }catch(err){
            console.log(err);
        }

    }, [])

    return <div>
        <Header/>
        <SpaceImage/>
        <div className={styles.showDangerousOnly}><input className={styles.checkBox} type="checkbox" value={asteroids.showMode} onChange={() => setOnlyDangerous(!onlyDangerous)}
        ></input> Показать только опасные
        </div>
        <div className={styles.distanceMode}>Расстояние <button
            className={styles.distanceChooser}>в киломентрах</button>,
            <button className={styles.distanceChooser}>в дистанциях до луны</button>
        </div>
        {onlyDangerous ? asteroids.filter((it) => it.isDangerous).map((item) =>
            <AsteroidCard key={item.id} {...item} distanceMode={distanceMode}/>) : asteroids.map((item) =>
            <AsteroidCard key={item.id} {...item} distanceMode={distanceMode}/>)}
        </div>

}