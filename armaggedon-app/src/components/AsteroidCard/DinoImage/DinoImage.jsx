import styles from "./Dino.module.css";
import dinosaur from "./dino.png";

export const DinoImage = () =>{
return (
    <div className={styles.imageCont}>
        <img src={dinosaur} alt="Dino" className={styles.image}/>
    </div>
)
}