import styles from './Action.module.css'

export const AsteroidCardAction = ({isDangerous}) =>{
    return (<div>
    <div className={styles.actionGrade}>{`Оценка: ${isDangerous ? 'опасен' : 'не опасен'}`}</div>
    <button className={styles.action}>
        <div className={styles.actionText}>На уничтожение </div>
    </button>
    </div>)
}