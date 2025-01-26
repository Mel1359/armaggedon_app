import styles from './Action.module.css'

export const AsteroidCardAction = (props : {isDangerous: boolean, isDisabled: boolean, onClick: (asteroid: any)=>void}) =>{

    const {isDangerous, isDisabled, onClick} = props

    return (<div>
        <div className={styles.actionGrade}>{`Оценка: ${isDangerous ? 'опасен' : 'не опасен'}`}</div>
        <button
            className={`${styles.action} ${isDisabled ? styles.disabled : ''}`}
            onClick={onClick}
            disabled={isDisabled}>
            <div className={styles.actionText}>На уничтожение</div>
        </button>
    </div>)
}