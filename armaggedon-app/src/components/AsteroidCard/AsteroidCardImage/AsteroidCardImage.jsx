import styles from './AsteroidCardImage.module.css';
import asteroidImage from './asteroid.png';

export const AsteroidCardImage = () =>{
    return (
        <div className={styles.imageCont}>
            <img src={asteroidImage} alt="Asteroid" className={styles.image}/>
        </div>
    )
}