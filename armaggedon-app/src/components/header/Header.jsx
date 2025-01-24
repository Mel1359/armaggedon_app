import {Link} from "react-router-dom";
import styles from "./Header.module.css"

export const Header = ()=>{
    return <div className={styles.container}>
        <div>
            <h1 className={styles.label}>ARMAGGEDON V</h1>
            <div className={styles.subLabel}>Сервис мониторинга и уничтожения астероидов, опасно подлетающих к Земле.
            </div>
        </div>
        <div className={styles.linkCont}>
            <Link to={"/asteroids"}>Астероиды</Link>
            <Link to={"/destruction"}>Уничтожение</Link>
        </div>
        <div className={styles.rectangle}></div>
    </div>
}