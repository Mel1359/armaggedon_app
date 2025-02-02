import { AsteroidCardAction } from './AsteroidCardAction/AsteroidCardAction'
import { AsteroidCardImage } from './AsteroidCardImage/AsteroidCardImage'
import { DinoImage } from './DinoImage/DinoImage'
import styles from './Card.module.css'
import {AsteroidCardContentContainer} from "./AsteroidCardContent/AsteroidCardContentContainer";
import {useContext} from "react";
import {AsteroidsContext} from "../asteroids-context/AsteroidsContext";

type AsteroidCardProps = {
    id: string
    name: string
    date: string
    distance: {
        kilometers: number
        lunar: number
    }
    size: number
    isDangerous: boolean
}

export const AsteroidCard = (props: AsteroidCardProps) => {
    const { name, date, distance, size, isDangerous} = props
    const {addAsteroid, destroyment} = useContext(AsteroidsContext)

    const isDisabled = destroyment.some((item)=> item.id === props.id)

    return (
        <div
            className={`${styles.card} ${isDangerous ? styles.cardRed : styles.regularCard}`}
        >
            <div className={styles.content}>
                <AsteroidCardImage size={size} />
                <DinoImage/>
            </div>
            <AsteroidCardContentContainer
                name={name}
                distance={distance}
                size={size}
                date={date}
            />
            <AsteroidCardAction
                isDangerous={isDangerous}
                isDisabled={isDisabled}
                onClick={() => addAsteroid(props)}
            />
        </div>
    )
}
