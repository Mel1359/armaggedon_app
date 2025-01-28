import styles from './SpaceBanner.module.css';
import spaceImage from './space.png';

export const SpaceImage = () =>{
    return (
        <div className={styles.imageCont}>
            <img src={spaceImage} alt="Space"/>
        </div>
    )
}