import styles from "./Header.module.css";
import { getUserKey } from "../../utils/getUserKey";
import { memo, useState } from "react";
import { NavLink } from "react-router-dom";

export const Header = memo(() => {
    const [inputOpened, setInputOpened] = useState(false);

    return (
        <div className={styles.container}>
            <div>
                <div className={styles.label}>ARMAGGEDON V</div>
                <div className={styles.subLabel}>
                    Сервис мониторинга и уничтожения астероидов, опасно подлетающих к Земле.
                </div>
            </div>
            <div className={styles.rightColumn}>
                <div className={styles.linkCont}>
                    <NavLink
                        to="/asteroids"
                        className={({ isActive }) =>
                            isActive ? `${styles.link} ${styles.active}` : styles.link
                        }
                    >
                        Астероиды
                    </NavLink>
                    <NavLink
                        to="/destruction"
                        className={({ isActive }) =>
                            isActive ? `${styles.link} ${styles.active}` : styles.link
                        }
                    >
                        Уничтожение
                    </NavLink>
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
            </div>

            <div className={styles.rectangle}></div>
        </div>
    );
});

Header.displayName = "Header";