import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { getUserKey } from "../../utils/getUserKey";
import { useState } from "react";

export const Header = () => {
    const [inputOpened, setInputOpened] = useState(false);

    return (
        <div className={styles.container}>
            <div>
                <h1 className={styles.label}>ARMAGGEDON V</h1>
                <div className={styles.subLabel}>
                    Сервис мониторинга и уничтожения астероидов, опасно подлетающих к Земле.
                </div>
            </div>
            <div className={styles.linkCont}>
                <Link to={"/asteroids"}>Астероиды</Link>
                <Link to={"/destruction"}>Уничтожение</Link>
            </div>
            <div className={styles.apiKeyBlock}>
                {getUserKey() === "DEMO_KEY" ? (
                    <button
                        className={styles.apiKeyButton}
                        onClick={() => setInputOpened(!inputOpened)}
                    >
                        Unauthorized
                    </button>
                ) : (
                    <div>API key provided</div>
                )}
                {inputOpened && (
                    <input
                        className={styles.apiKeyInput}
                        placeholder="Enter API Key"
                        onChange={(ev) => {
                            if (ev.target.value.length === 40) {
                                localStorage.setItem("API_KEY", ev.target.value);
                                setInputOpened(false);
                            }
                        }}
                    />
                )}
            </div>
            <div className={styles.rectangle}></div>
        </div>
    );
};
