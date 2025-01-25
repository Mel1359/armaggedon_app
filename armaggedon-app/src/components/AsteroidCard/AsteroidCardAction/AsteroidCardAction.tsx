import styles from './Action.module.css'

export const AsteroidCardAction = (props : {isDangerous: boolean}) =>{

    const {isDangerous} = props

    return (<div>
    <div className={styles.actionGrade}>{`Оценка: ${isDangerous ? 'опасен' : 'не опасен'}`}</div>
    <button className={styles.action}>
        <div className={styles.actionText}>На уничтожение </div>
    </button>
    </div>)
}