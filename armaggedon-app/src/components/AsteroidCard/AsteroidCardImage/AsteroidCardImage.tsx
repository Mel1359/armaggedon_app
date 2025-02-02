import styles from './AsteroidCardImage.module.css';
import asteroidImage from './asteroid.png';

type AsteroidCardImageProps = {
    size: number;
};

export const AsteroidCardImage = ({ size }: AsteroidCardImageProps) => {

    const imageSize = Math.max(50, Math.min(size, 1000));

    return (
        <div className={styles.imageCont}>
            <img
                src={asteroidImage}
                alt="Asteroid"
                className={styles.image}
                style={{ width: `${imageSize}px`, height: `${imageSize}px` }}
            />
        </div>
    );
};