import styles from './Result.module.css';

export default function Result({maxQuizLen, correctNumLen}) {
    return (
        <div className={styles.result}>
            正解は
            <span className={styles.resultHighLight}>
                <p>{`全${maxQuizLen}問中、${correctNumLen}問正解です。`}</p>
            </span>
        </div>
    )
}
