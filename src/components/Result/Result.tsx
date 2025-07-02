import styles from './Result.module.css';

export default function Result({maxQuizLen, correctNumLen}) {
    return (
        <div className={styles.result}>
            あなたの正解数は...
            <span className={styles.resultHighLight}>
                {`${maxQuizLen}問中、${correctNumLen}問正解です。`}
            </span>
        </div>
    )
}